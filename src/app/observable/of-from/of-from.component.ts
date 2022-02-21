import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent implements OnInit {
  constructor(private _designUtility: DesignUtilityService) {}
  obsMsg: any;
  ngOnInit(): void {
    //of example

    const Obs1 = of('Rajesh', 'Kumar', 'Kushwaha');
    Obs1.subscribe((res) => {
      this._designUtility.print(res, 'elContainer');
    });

    const Obs2 = of({ a: 'Rajesh', b: 'kumar', c: 'Kushwaha' });
    Obs2.subscribe((res) => {
      this.obsMsg = res;
    });

    //From - Array
    const Arr = ['Rajesh', 'Kumar', 'Kushwaha'];
    const Obs3 = from(Arr);

    Obs3.subscribe((res) => {
      this._designUtility.print(res, 'elContainer3');
    });

    //Promise

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolve');
      }, 3000);
    });

    const Obs4 = from(promise);

    Obs4.subscribe((res) => {
      this._designUtility.print(res, 'elContainer4');
    });

    //String
    const Obs5 = from('Rajesh');

    Obs5.subscribe((res) => {
      this._designUtility.print(res, 'elContainer5');
    });
  }
}

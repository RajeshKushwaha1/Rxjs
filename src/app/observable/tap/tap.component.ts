import { DesignUtilityService } from './../../appServices/design-utility.service';
import { interval, map, Subscription, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  myColor: string = '';
  constructor(private _du: DesignUtilityService) {}

  ngOnInit(): void {
    const source = interval(1500);

    // Ex -01

    const Arr = ['Angular', 'JavaScript', 'React'];

    let obsSubscription: Subscription;
    obsSubscription = source
      .pipe(
        tap((res) => {
          console.log(res);
          if (res === 3) {
            obsSubscription.unsubscribe();
          }
        }),
        map((res) => Arr[res])
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer');
      });

    // Ex -02

    const Colors = ['blue', 'red', 'green', 'orange', 'pink'];

    let obsSubscription2: Subscription;
    obsSubscription2 = source
      .pipe(
        tap((res) => {
          this.myColor = Colors[res];
          if (res === 3) {
            obsSubscription2.unsubscribe();
          }
        }),
        map((res) => Colors[res])
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer2');
      });
  }
}

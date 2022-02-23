import { DesignUtilityService } from './../../appServices/design-utility.service';
import {
  from,
  fromEvent,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  randomNames = ['Angular', 'JavaScript', 'React', 'NodeJS'];
  ngOnInit(): void {
    const nameSource = from(this.randomNames);

    //Ex - 01 | Take

    nameSource.pipe(take(2)).subscribe((res) => {
      this._du.print(res, 'elContainer');
    });

    //Ex - 02 | TakeLast

    nameSource.pipe(takeLast(2)).subscribe((res) => {
      this._du.print(res, 'elContainer2');
    });

    //Ex - 03 | TakeUntil
    const source = interval(1000);
    let condition1 = timer(10000);
    let condition2 = fromEvent(document, 'click');

    source
      .pipe(
        map((res) => 'Number' + res),
        takeUntil(condition2)
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer3');
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit {
  obsMSg: any;
  videoSubscription: Subscription;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    // const broadCastVideos = interval(1000);
    //note : -  timer(deley,interval)
    const broadCastVideos = timer(5000, 1000);

    this.videoSubscription = broadCastVideos.subscribe((res) => {
      console.log(res);
      this.obsMSg = 'video ' + res;
      this._designUtility.print(this.obsMSg, 'elContainer');
      this._designUtility.print(this.obsMSg, 'elContainer1');
      this._designUtility.print(this.obsMSg, 'elContainer2');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}

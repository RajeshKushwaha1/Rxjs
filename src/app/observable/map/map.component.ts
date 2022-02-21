import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  //Subscription
  sub1: Subscription;
  sub2: Subscription;

  //message
  msg1: any;
  msg2: any;
  msg3: any;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    const broadCastVideos = interval(1000);
    //Ex - 01
    this.sub1 = broadCastVideos
      .pipe(map((data) => 'video ' + data))
      .subscribe((res) => {
        this.msg1 = res;
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    //Ex - 02
    this.sub2 = broadCastVideos
      .pipe(map((data) => 'video ' + data * 3))
      .subscribe((res) => {
        this.msg2 = res;
      });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    //Ex - 03

    const Language = from([
      {
        id: 1,
        subject: 'Angular',
      },
      {
        id: 2,
        subject: 'JavaScript',
      },
      {
        id: 3,
        subject: 'React JS',
      },
      {
        id: 4,
        subject: 'Node JS',
      },
    ]);

    Language.pipe(map((data) => data.subject)).subscribe((res) => {
      this._designUtility.print(res, 'elContainer');
    });
  }
}

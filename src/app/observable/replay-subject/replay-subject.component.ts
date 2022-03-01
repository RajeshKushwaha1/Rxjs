import { interval, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css'],
})
export class ReplaySubjectComponent implements OnInit {
  //List Data
  user1List: string[] = ['Angular1', 'Angular2'];
  user2List: string[] = [];
  user3List: string[] = [];

  //subscribeModes

  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  //Toggle properties

  methodInterval: boolean = false;
  intSubscription: Subscription;

  //subscription

  subscription2: Subscription;
  subscription3: Subscription;

  //user2SubscribeButton

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._du.videoEmit.subscribe((res) => {
        this.user2List.push(res);
      });
    }

    this.subscribeMode2 = !this.subscribeMode2;
  }

  //user3SubscribeButton

  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._du.videoEmit.subscribe((res) => {
        this.user3List.push(res);
      });
    }

    this.subscribeMode3 = !this.subscribeMode3;
  }

  //Toggle Method

  toggleMethod() {
    const broadCastVideo = interval(1000);

    if (!this.methodInterval) {
      this.intSubscription = broadCastVideo.subscribe((res) => {
        this._du.videoEmit.next('video' + res);
      });
    } else {
      this.intSubscription.unsubscribe();
    }

    this.methodInterval = !this.methodInterval;
  }

  constructor(private _du: DesignUtilityService) {}

  ngOnInit(): void {
    this._du.videoEmit.subscribe((res) => {
      console.log(res);
      this.user1List.push(res);
    });
  }

  onVideoAdd(video: any) {
    this._du.videoEmit.next(video);
  }
}

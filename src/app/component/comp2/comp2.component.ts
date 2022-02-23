import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  userName: string;
  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}

  onChange(uname: any) {
    this._designUtility.userName.next(uname.value);
  }
}

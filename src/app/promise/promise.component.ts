import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  promiseVAl: any;
  constructor() {}

  dellAvailable() {
    return true;
  }

  hpAvailable() {
    return false;
  }

  ngOnInit(): void {
    let byLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolve');
      // reject('promise is reject');

      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is purchased');
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve('Hp is purchased');
        }, 3000);
      } else {
        return setTimeout(() => {
          reject('Item are not available');
        }, 3000);
      }
    });

    byLaptop
      .then((res) => {
        console.log('then message : ', res);
        this.promiseVAl = res;
      })
      .catch((res) => {
        console.log('catch message : ', res);
        this.promiseVAl = res;
      });
  }
}

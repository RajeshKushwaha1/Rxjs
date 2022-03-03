import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('Input Result here...');

  videoEmit = new ReplaySubject<string>(2, 5000);

  asyncVideoEmit = new AsyncSubject();

  constructor() {}

  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId)?.appendChild(el);
  }

  print2(val: any, containerId: any) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerText = val;

    document.getElementById(containerId)?.prepend(el);
  }
}

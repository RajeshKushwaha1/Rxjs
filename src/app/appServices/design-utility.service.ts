import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('Input Result here...');

  constructor() {}

  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId)?.appendChild(el);
  }
}

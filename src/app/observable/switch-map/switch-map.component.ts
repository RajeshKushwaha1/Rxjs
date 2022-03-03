import { Component, OnInit } from '@angular/core';
import {
  map,
  mergeAll,
  mergeMap,
  of,
  delay,
  from,
  switchAll,
  switchMap,
} from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  getData(data: any) {
    return of(data + 'Video Uploaded').pipe(delay(1000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this._du.print(res, 'elContainer');
    });

    //Ex - 02 | Map  +  switchAll
    source
      .pipe(
        map((res) => this.getData(res)),
        switchAll()
      )
      .subscribe((res2) => {
        this._du.print(res2, 'elContainer2');
      });

    //Ex - 03 | switchMap
    source.pipe(switchMap((res) => this.getData(res))).subscribe((res2) => {
      this._du.print(res2, 'elContainer3');
    });
  }
}

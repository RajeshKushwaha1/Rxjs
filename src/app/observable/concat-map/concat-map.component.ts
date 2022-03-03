import { Component, OnInit } from '@angular/core';
import { of, from, map, mergeAll, mergeMap, concatAll, concatMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css'],
})
export class ConcatMapComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  getData(data: any) {
    return of(data + 'Video Uploaded');
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) =>
      res.subscribe((res2) => {
        console.log(res2);
        this._du.print(res2, 'elContainer');
      })
    );

    //Ex - 02 | Map  +  concatAll
    source
      .pipe(
        map((res) => this.getData(res)),
        concatAll()
      )
      .subscribe((res2) => {
        this._du.print(res2, 'elContainer2');
      });

    //Ex - 03 | concatMap
    source.pipe(concatMap((res) => this.getData(res))).subscribe((res2) => {
      this._du.print(res2, 'elContainer3');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
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

    //Ex - 02 | Map  +  MergeAll
    source
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe((res2) => {
        this._du.print(res2, 'elContainer2');
      });

    //Ex - 03 | mergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res2) => {
      this._du.print(res2, 'elContainer3');
    });
  }
}

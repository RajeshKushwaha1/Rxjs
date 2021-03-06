import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map((v) => 'Tech video #' + (v + 1)),
      take(5)
    );
    const sourceComedy = interval(1000).pipe(
      map((v) => 'Comedy video #' + (v + 1)),
      take(3)
    );
    const sourceNews = interval(1000).pipe(
      map((v) => 'News video #' + (v + 1)),
      take(4)
    );

    const finalObs = concat(sourceTech, sourceComedy, sourceNews);
    finalObs.subscribe((res) => {
      console.log(res);
      this._du.print(res, 'elContainer');
    });
  }
}

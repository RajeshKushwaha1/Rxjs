import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { combineLatest, map, pluck, fromEvent } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css'],
})
export class CombineLatestComponent implements OnInit, AfterViewInit {
  //source
  nameSource = ['A', 'B', 'C', 'D', 'E', 'F'];
  colorSource = ['res', 'green', 'blue', 'yellow', 'voilet', 'purple'];

  // Template Reference
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // fromEvent<any>(this.name.nativeElement, 'change')
    //   .pipe(map((event) => event.target.value))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    //make observable

    const nameObs = fromEvent<any>(this.name.nativeElement, 'change')
      .pipe(map((event) => event.target.value))
      .subscribe((res) => {
        console.log(res);
      });

    // fromEvent<any>(this.color.nativeElement, 'change')
    //   .pipe(pluck('target', 'value'))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change')
      .pipe(pluck('target', 'value'))
      .subscribe((res) => {
        console.log(res);
      });

    // Ex - 01 CombineLatest

    // combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
    //   console.log(name, color);
    // });
  }
}

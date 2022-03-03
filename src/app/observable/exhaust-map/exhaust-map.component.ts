import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { exhaustMap, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css'],
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  @ViewChild('btn') btn: ElementRef;
  num = 0;
  saveRequest: any;
  fetching: boolean = false;

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => (this.fetching = true)),
        exhaustMap(() => this.onSave(this.num++))
      )
      .subscribe((res) => {
        console.log(res);
        this.onFetch();
        this.fetching = false;
      });
  }

  onSave(changes: any) {
    return this.http.put(this.url, { data: changes });
  }

  // buttonClick() {
  //   this.onSave(this.num++).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  onFetch() {
    this.http.get<any>(this.url).subscribe((res) => {
      console.log(res.data);
      this.saveRequest = res.data;
    });
  }
}

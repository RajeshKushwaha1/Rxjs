import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css'],
})
export class DebounceComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  inputData: string;

  @ViewChild('nameInput2') nameInput2: ElementRef;
  inputData2: string;

  constructor() {}

  ngAfterViewInit(): void {
    //Ex 01 -
    let search = fromEvent<any>(this.nameInput.nativeElement, 'keyup').pipe(
      map((obj) => obj.target.value),
      debounceTime(1000)
    );
    search.subscribe((data) => {
      console.log(data);
      this.inputData = data;
    });

    // Ex -02

    let search2 = fromEvent<any>(this.nameInput2.nativeElement, 'keyup').pipe(
      map((obj) => obj.target.value),
      distinctUntilChanged()
    );
    search2.subscribe((data) => {
      console.log(data);
      this.inputData2 = data;
    });
  }
}

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css'],
})
export class DebounceComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  constructor() {}

  inputData: string;
  ngAfterViewInit(): void {
    let search = fromEvent<any>(this.nameInput.nativeElement, 'keyup').pipe(
      map((obj) => obj.target.value),
      debounceTime(1000)
    );
    search.subscribe((data) => {
      console.log(data);
      this.inputData = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  dataArray = [
    {
      id: 1,
      name: 'Rahul',
      gender: 'M',
    },
    {
      id: 2,
      name: 'Ramesh',
      gender: 'M',
    },
    {
      id: 3,
      name: 'Vijay',
      gender: 'M',
    },
    {
      id: 4,
      name: 'D',
      gender: 'F',
    },
  ];

  data: any;
  data2: any;
  data3: any;
  constructor() {}

  ngOnInit(): void {
    const source = from(this.dataArray);

    // Ex - 01 - filter by length

    source
      .pipe(
        filter((member) => member.name.length > 5),
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
      });

    // Ex - 02 - filter by gender

    source
      .pipe(
        filter((member) => member.gender === 'M'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });

    // Ex - 02 - filter by gender

    source
      .pipe(
        filter((member) => member.id <= 2),
        toArray()
      )
      .subscribe((res) => {
        this.data3 = res;
      });
  }
}

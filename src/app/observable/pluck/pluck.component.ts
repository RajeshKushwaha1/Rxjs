import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  constructor() {}

  users = [
    {
      name: 'Rajesh',
      skill: 'Angular',
      job: {
        title: 'Angular',
      },
    },
    {
      name: 'Rajesh',
      skill: 'JavaScript',
      job: {
        title: 'Angular',
      },
    },
    {
      name: 'Rajesh',
      skill: 'React',
      job: {
        title: 'Angular',
      },
    },
  ];

  data: any;
  data2: any;
  ngOnInit(): void {
    //Ex - 01

    from(this.users)
      .pipe(
        // map((data) => data.skill),
        pluck('skill'),
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
      });

    //Ex - 02

    from(this.users)
      .pipe(
        // map((data) => data.skill),
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });
  }
}

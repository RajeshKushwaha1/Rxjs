import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, toArray, of, from } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  constructor() {}

  users = [
    {
      name: 'rajesh',
      skills: 'JavaScript',
    },
    {
      name: 'rajesh',
      skills: 'Angular',
    },
    {
      name: 'rajesh',
      skills: 'React',
    },
    {
      name: 'rajesh',
      skills: 'Nose Js',
    },
  ];
  sourceSub: Subscription;
  ngOnInit(): void {
    // EX - 01
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });

    // EX - 02
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    // EX - 03
    const source3 = of('Hello', 'JavaScript', 'Angular');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}

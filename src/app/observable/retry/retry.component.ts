import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')

      .subscribe((res) => {
        // console.log(res);
        this.data = res;
      });
  }
}

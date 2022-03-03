import { map, Observable, filter, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css'],
})
export class ShareReplayComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  allProducts: Observable<any>;
  username: Observable<any>;
  website: Observable<any>;

  ngOnInit(): void {
    // this.http.get(this.url).subscribe((res) => {
    //   console.log(res);
    //   this.allProducts = res;
    // });

    // after using Observable

    this.allProducts = this.http.get(this.url).pipe(shareReplay());
    this.username = this.allProducts.pipe(
      map((res) =>
        res.filter((usernameData: { [x: string]: string }) => {
          return usernameData['username'] === 'Bret';
        })
      )
    );

    this.website = this.allProducts.pipe(
      map((res) =>
        res.filter((websiteData: { [x: string]: string }) => {
          return websiteData['website'] === 'hildegard.org';
        })
      )
    );
  }
}

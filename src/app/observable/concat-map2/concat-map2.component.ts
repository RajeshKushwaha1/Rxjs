import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { of, mergeMap, from, delay, concatMap } from 'rxjs';

@Component({
  selector: 'app-concat-map2',
  templateUrl: './concat-map2.component.html',
  styleUrls: ['./concat-map2.component.css'],
})
export class ConcatMap2Component implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  notifyData = [
    {
      name: 'Facebook',
      icon: '',
      time: '4 sec ago',
      img: '',
      strong: 'Alex jonson',
      p: 'Commented post here!',
    },
    {
      name: 'Facebook',
      icon: '',
      time: '4 sec ago',
      img: '',
      strong: 'Alex jonson',
      p: 'Commented post here!',
    },
    {
      name: 'Facebook',
      icon: '',
      time: '4 sec ago',
      img: '',
      strong: 'Alex jonson',
      p: 'Commented post here!',
    },
    {
      name: 'Facebook',
      icon: '',
      time: '4 sec ago',
      img: '',
      strong: 'Alex jonson',
      p: 'Commented post here!',
    },
  ];

  ngOnInit(): void {
    from(this.notifyData)
      .pipe(concatMap((res) => this.getHtml(res)))
      .subscribe((res: any) => {
        console.log(res);
        this._du.print2(res, 'elContainer');
      });
  }

  getHtml(data: any) {
    return of(` <div class="header">
                   <div class="app">
                     <img src=" ${data.name}" alt="" />
                       ${data.name}
                   </div>
                <div class="item"> ${data.time}</div>
                </div>
                <div class="body">
                    <img src=" ${data.name}" alt="" />
                        <strong> ${data.strong}</strong>
                        <p> ${data.p}</p>
                </div>`).pipe(delay(2000));
  }
}

import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { TapComponent } from './observable/tap/tap.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { MapComponent } from './observable/map/map.component';
import { CustomComponent } from './observable/custom/custom.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { FilterComponent } from './observable/filter/filter.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { TakeComponent } from './observable/take/take.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMap2Component } from './observable/concat-map2/concat-map2.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'promise',
    component: PromiseComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'from-event',
        component: FromEventComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'of-from',
        component: OfFromComponent,
      },
      {
        path: 'to-array',
        component: ToArrayComponent,
      },
      {
        path: 'custom',
        component: CustomComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'pluck',
        component: PluckComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'tap',
        component: TapComponent,
      },
      {
        path: 'take',
        component: TakeComponent,
      },
      {
        path: 'retry',
        component: RetryComponent,
      },
      {
        path: 'debounce',
        component: DebounceComponent,
      },
      {
        path: 'subject',
        component: SubjectComponent,
      },
      {
        path: 'replay-subject',
        component: ReplaySubjectComponent,
      },
      {
        path: 'async-subject',
        component: AsyncSubjectComponent,
      },
      {
        path: 'concat',
        component: ConcatComponent,
      },
      {
        path: 'merge',
        component: MergeComponent,
      },
      {
        path: 'merge-map',
        component: MergeMapComponent,
      },
      {
        path: 'concat-map',
        component: ConcatMapComponent,
      },
      {
        path: 'concat-map2',
        component: ConcatMap2Component,
      },
      {
        path: 'share-replay',
        component: ShareReplayComponent,
      },
      {
        path: 'combine-latest',
        component: CombineLatestComponent,
      },
      {
        path: 'switch-map',
        component: SwitchMapComponent,
      },
      {
        path: 'exhaust-map',
        component: ExhaustMapComponent,
      },
    ],
  },
  {
    path: 'type-script',
    loadChildren: () =>
      import('./typescript/typescript.module').then((m) => m.TypescriptModule),
  },
  // {
  //   path: '*',
  //   redirectTo: 'home',
  // },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

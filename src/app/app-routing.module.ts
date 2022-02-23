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
import { TypeScriptComponent } from './type-script/type-script.component';

const routes: Routes = [
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
    ],
  },
  {
    path: 'type-script',
    loadChildren: () =>
      import('./type-script/type-script.module').then(
        (m) => m.TypeScriptModule
      ),
  },
  {
    path: '**',
    redirectTo: 'promise',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

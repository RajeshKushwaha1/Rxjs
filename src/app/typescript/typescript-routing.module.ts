import { Demo1Component } from './demo1/demo1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './typescript.component';
import { Demo2Component } from './demo2/demo2.component';
import { TypeScriptListComponent } from './type-script-list/type-script-list.component';

const routes: Routes = [
  {
    path: '',
    component: TypescriptComponent,
    children: [
      {
        path: '',
        component: TypeScriptListComponent,
      },
      {
        path: 'demo1',
        component: Demo1Component,
      },
      {
        path: 'demo2',
        component: Demo2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypescriptRoutingModule {}

import { Demo2Component } from './demo2/demo2.component';
import { TypeScriptModule } from './type-script.module';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'demo2',
    component: Demo2Component,
  },
];

export const routing: ModuleWithProviders<TypeScriptModule> =
  RouterModule.forChild(routes);

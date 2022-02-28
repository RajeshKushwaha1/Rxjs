import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { TypescriptComponent } from './typescript.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { TypeScriptListComponent } from './type-script-list/type-script-list.component';

@NgModule({
  declarations: [
    TypescriptComponent,
    Demo1Component,
    Demo2Component,
    TypeScriptListComponent,
  ],
  imports: [CommonModule, TypescriptRoutingModule],
})
export class TypescriptModule {}

import { routing } from './type-routing.module';
import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { Demo2Component } from './demo2/demo2.component';

@NgModule({
  declarations: [DemoComponent, Demo2Component],
  imports: [routing],
})
export class TypeScriptModule {}

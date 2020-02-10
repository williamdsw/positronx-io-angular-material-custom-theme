import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { CustomThemeDemoComponent } from './custom-theme-demo.component';

@NgModule({
  declarations: [CustomThemeDemoComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class CustomThemeDemoModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomThemeDemoComponent } from './custom-theme-demo/custom-theme-demo.component';

const ROUTES: Routes = [
  { path: 'custom-theme-demo', component: CustomThemeDemoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'custom-theme-demo' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

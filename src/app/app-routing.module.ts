import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ErrorComponent} from './components/error/error.component';


const routes: Routes = [
  {path: 'eap', component: MainPageComponent},
  {path: '', redirectTo: 'eap', pathMatch: 'full'},
  // this is supposed to be a 404 page
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

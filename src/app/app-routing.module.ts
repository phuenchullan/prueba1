import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CurrencyComponent } from './components/currency/currency.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'currency', component: CurrencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

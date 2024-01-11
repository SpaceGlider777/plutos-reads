import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductComponent } from './features/product/product.component';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:isbn', component: ProductComponent },
  { path: 'search/:searchStr', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PopularBooksComponent } from './components/popular-books/popular-books.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { HighestRatedBooksComponent } from './components/highest-rated-books/highest-rated-books.component';

@NgModule({
  declarations: [
    HomeComponent,
    PopularBooksComponent,
    HighestRatedBooksComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDividerModule
  ]
})
export class HomeModule { }

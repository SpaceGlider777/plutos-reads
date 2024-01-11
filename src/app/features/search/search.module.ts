import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';

import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule
  ]
})
export class SearchModule { }

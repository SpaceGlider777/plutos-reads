import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class ProductModule { }

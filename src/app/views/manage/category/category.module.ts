// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoryComponent } from './category.component';
import { AddComponent } from './add.component';




// Theme Routing
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  declarations: [
    CategoryComponent,
    AddComponent  
    
  ]
})
export class CategoryModule { }

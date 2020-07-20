// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
 
import { SubCategoryComponent } from './subcategory.component';
import { AddsubComponent } from './addsub.component';

// Theme Routing
import { SubCategoryRoutingModule } from './subcategory-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SubCategoryRoutingModule
  ],
  declarations: [
    SubCategoryComponent, 
    AddsubComponent
  ]
})
export class SubCategoryModule { }

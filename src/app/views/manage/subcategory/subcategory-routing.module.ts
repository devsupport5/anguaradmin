import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SubCategoryComponent } from './subcategory.component';
import { AddsubComponent } from './addsub.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sub Category'
    },
    children: [
      {
        path: '',
        component: SubCategoryComponent,
        data: {
          title: 'Sub Category'
        }
      },{
        path: 'category',
        component: SubCategoryComponent,
        data: {
          title: 'Sub Category'
        }
      },{
        path: 'add',
        component: AddsubComponent,
        data: {
          title: 'add'
        }
      }     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '个人中心'
    },
    children: [
      {
        path: 'personal',
        component: PersonalComponent,
        data: {
          title: '个人资料'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule {}

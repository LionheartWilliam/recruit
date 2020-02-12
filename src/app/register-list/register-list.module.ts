import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterListRoutingModule } from './register-list-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { PrivateRegistersListComponent } from '../component/private-registers-list.component';
import { PrintRegisterComponent } from '../component/print-register.component';

const routes :Routes =[
  { 
    path: 'private-list', 
    component: PrivateRegistersListComponent,
    children: [
      { path:'print-register/:id', component:PrintRegisterComponent}
    ]
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterListRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RegisterListModule { }

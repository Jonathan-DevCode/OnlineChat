import { AccountRoutingModule } from './account-routing.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    LoginModule,
    RegisterModule
  ],
  exports: [ AccountComponent ]
})
export class AccountModule { }

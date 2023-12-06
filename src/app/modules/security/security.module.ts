import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    SecurityComponent,
    SignInComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class SecurityModule { }

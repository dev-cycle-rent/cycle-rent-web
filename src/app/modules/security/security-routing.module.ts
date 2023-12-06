import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LogInComponent} from "./components/log-in/log-in.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";

const routes: Routes = [{ path: '', component: SecurityComponent,children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LogInComponent},
    {path: 'signup', component: SignInComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

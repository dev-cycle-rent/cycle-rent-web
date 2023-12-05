import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessComponent } from './process.component';
import {MainPageContextComponent} from "./components/main-page-context/main-page-context.component";
import {
  BikeDetailsPageContextComponent
} from "./components/bike-details-page-context/bike-details-page-context.component";
import {
  RentalDetailsPageContextComponent
} from "./components/rental-details-page-context/rental-details-page-context.component";

const routes: Routes = [
  { path: '', component: ProcessComponent,children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: 'home', component: MainPageContextComponent},
      { path: 'cycle-details', component: BikeDetailsPageContextComponent},
      { path: 'rental-details', component: RentalDetailsPageContextComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }

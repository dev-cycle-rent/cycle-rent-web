import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProcessRoutingModule} from './process-routing.module';
import {ProcessComponent} from './process.component';
import {MainPageContextComponent} from './components/main-page-context/main-page-context.component';
import {
    BikeDetailsPageContextComponent
} from './components/bike-details-page-context/bike-details-page-context.component';
import {
    RentalDetailsPageContextComponent
} from './components/rental-details-page-context/rental-details-page-context.component';
import {
    MainPageMainSliderComponent
} from './components/main-page-context/inner-items/main-page-main-slider/main-page-main-slider.component';
import {
    MainPageFormComponent
} from './components/main-page-context/inner-items/main-page-form/main-page-form.component';
import {
    MainPagePopularCyclesComponent
} from './components/main-page-context/inner-items/main-page-popular-cycles/main-page-popular-cycles.component';
import {ShareModule} from "../share/share.module";
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        ProcessComponent,
        MainPageContextComponent,
        BikeDetailsPageContextComponent,
        RentalDetailsPageContextComponent,
        MainPageMainSliderComponent,
        MainPageFormComponent,
        MainPagePopularCyclesComponent
    ],
    imports: [
        CommonModule,
        ProcessRoutingModule,
        ShareModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatOptionModule,
        MatSelectModule
    ]
})
export class ProcessModule {
}

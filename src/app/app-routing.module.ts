import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'cars-list', component: CarsListComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'edit-car/:id', component: CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

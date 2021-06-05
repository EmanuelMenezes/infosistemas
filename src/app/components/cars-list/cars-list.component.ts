import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { faHome, faPencilAlt, faPlus, faThList, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  faPlus = faPlus;
  faList = faThList;
  faHome = faHome;
  faEdit = faPencilAlt;
  faDelete = faTimes;

  Cars:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetCars().subscribe(res => {
      console.log(res)
      this.Cars =res;
    });    
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteCar(id).subscribe((res) => {
        this.Cars.splice(i, 1);
      })
    }
  }
}

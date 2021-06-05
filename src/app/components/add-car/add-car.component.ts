import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.carForm = this.formBuilder.group({
      placa: [''],
      chassi: [''],
      marca: [''],
      ano: [''],
      renavam: [''],
      modelo: ['']
    })
  }
  ngOnInit() { }

  onSubmit(): any {
    this.crudService.AddCar(this.carForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/cars-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
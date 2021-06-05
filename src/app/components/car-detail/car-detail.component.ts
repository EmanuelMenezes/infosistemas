import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { faHome, faPencilAlt, faPlus, faThList, faTimes, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  faPlus = faPlus;
  faList = faThList;
  faHome = faHome;
  faBack = faUndoAlt;
  faDelete = faTimes;

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
    ) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');

      this.crudService.GetCar(this.getId).subscribe(res => {
        this.updateForm.setValue({
          placa: res['placa'],
          chassi: res['chassi'],
          marca: res['marca'],
          ano: res['ano'],
          renavam: res['renavam'],
          modelo: res['modelo']
        });
      });

      this.updateForm = this.formBuilder.group({
        placa: [''],
        chassi: [''],
        marca: [''],
        ano: [''],
        renavam: [''],
        modelo: ['']
      })
     }

  ngOnInit(): void {
  }
  onUpdate(): any {
    this.crudService.updateCar(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/cars-list'))
      }, (err) => {
        console.log(err);
    });
  }
}

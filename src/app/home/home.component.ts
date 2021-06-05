import { Component, OnInit } from '@angular/core';
import { faHome, faPlus, faThList } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faPlus = faPlus;
  faList = faThList;
  faHome = faHome;
  
  constructor() { }

  ngOnInit(): void {
  }

}

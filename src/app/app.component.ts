import { Component } from '@angular/core';
import { faCoffee, faHome, faPlus, faThList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infosistemas';
  faPlus = faPlus;
  faList = faThList;
  faHome = faHome;
}

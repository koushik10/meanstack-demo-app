import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeanStackApp';
  students: Array<any>;
  constructor(private dataService: DataService){
    this.dataService.getStudents().subscribe(response => this.students = response);
  }
}

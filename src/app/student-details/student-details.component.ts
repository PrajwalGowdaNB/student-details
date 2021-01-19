import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() studentDetails:Student;
  constructor() { }

  ngOnInit(): void {
  }

}

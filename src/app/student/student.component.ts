import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student[] = [{
    name: 'Prajwal Gowda N B',
    id: 101,
    age: 22,
    phone: 9482801714,
    email: 'prajwal@gmail.com',
    classX: 79,
    classXII: 78,
    degree: 67,
    imageUrl: 'https://media.istockphoto.com/photos/portrait-of-smiling-mature-man-standing-on-white-background-picture-id1245820679?b=1&k=6&m=1245820679&s=170667a&w=0&h=6FUjVCV0ZT4DlTMcp9QDChuu8tDjHo3LJYeyiyHUOr4=',
    summary: 'abc xyz fsder'
  },
  {
    name: 'Shivakumar K S',
    id: 102,
    age: 22,
    phone: 8762440863,
    email: 'shivakumar@gmail.com',
    classX: 79,
    classXII: 78,
    degree: 67,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/18/04/man-1150058__340.jpg',
    summary: ' def abc xyz fsder'
  },
  {
    name: 'Akash',
    id: 103,
    age: 22,
    phone: 7676165714,
    email: 'akash@gmail.com',
    classX: 79,
    classXII: 78,
    degree: 67,
    imageUrl: 'https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-picture-id1212702108?b=1&k=6&m=1212702108&s=170667a&w=0&h=Qnh1PmzI68f__1pfNdD2-QnAbvntC3sl0xUdVrie6BA=',
    summary: 'abc xyz abc gfrs fsder'
  },
  {
    name: 'Deepika',
    id: 104,
    age: 22,
    phone: 9206124172,
    email: 'deepika@gmail.com',
    classX: 79,
    classXII: 78,
    degree: 67,
    imageUrl: 'https://cdn.pixabay.com/photo/2017/06/01/00/44/smiling-2362136__340.jpg',
    summary: 'def gfdrt abc xyz fsder'
  },
  {
    name: 'Bhaveesh',
    id: 105,
    age: 22,
    phone: 7353983480,
    email: 'bhavesh@gmail.com',
    classX: 79,
    classXII: 78,
    degree: 67,
    imageUrl: 'https://media.istockphoto.com/photos/smiling-biracial-businessman-holding-video-call-with-clients-partners-picture-id1216968894?b=1&k=6&m=1216968894&s=170667a&w=0&h=EpcnDEaICRAc0y3nai-5e9FWB9EfkkjqTg0ecbJEXx0=',
    summary: 'abc  gjdfatrs xyz fsder'
  }
  ];

  selectedStudent = this.student[0];
  constructor() { }

  onSelectingStudent(stud) {
    this.selectedStudent = stud;
  }
  ngOnInit(): void {
  }

  delete(stu) {
    let id = this.student.indexOf(stu);
    if (confirm("Are you Sure?? " + stu.name + " will be deleted!")) {
      this.student.splice(id, 1);
    }
  }
}

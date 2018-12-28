import { Component, OnInit } from '@angular/core';
import { StudentService } from '../app/services/student.service';
import { nextTick } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  contact: Student = {
    id: 1,
    name: 'Yevgeny',
    teudatZeut: '309667293',
    birthday: '2017/04/19',
    class: '1B',
    image: '../assets/img/contact.png'
  };
  selectedStudent: string;
  currentStudent: Student;
  nextStudent: Student;
  previousStudent: Student;

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    });
  }
  onSelected(selectedStudent) {
    this.students.forEach((student) => {
      if (student.name === selectedStudent) {
        this.currentStudent = student;
      }
    });

  }




  onPrevious(currentStudent) {
    if (this.students.indexOf(currentStudent) > 0) {
      const index = this.students.indexOf(currentStudent) - 1;
      this.previousStudent = this.students[index];
      this.currentStudent = this.previousStudent;
      console.log(this.previousStudent);

    } else {
      return false;
    }

  }
  onNext(currentStudent) {
    if (this.students.indexOf(currentStudent) < this.students.length - 1) {
      const index = this.students.indexOf(currentStudent) + 1;
      this.nextStudent = this.students[index];
      this.currentStudent = this.nextStudent;
      console.log(this.nextStudent);
    } else {
      return false;
    }




    // if(currentStudent){
    //   // console.log( parseInt(student.id) +1)
    //   // console.log(currentStudent.id+1);
    //   this.nextStudent.id = currentStudent.id+1


  }



}


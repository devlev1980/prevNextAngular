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

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
      console.log(this.students);
    });
  }
  onSelected(selectedStudent) {
    //  console.log(selectedStudent);
    this.students.forEach((student) => {
      if (student.name === selectedStudent) {
        this.currentStudent = student;
      }
      // console.log(this.currentStudent)
    });

  }


  // console.log(e);


  onPrevious() {
    this.students.forEach((student, index) => {
      if (student[index] > 0) {
        return this.currentStudent = student[index - 1];
      }
    });
    // if(currentStudentId === 0 ){
    //   console.log(currentStudentId)
    //   // console.log(this.students[this.students.length-1])
    //    return this.students[0];
    // }
    // return this.students[currentStudentId - 1];

    // console.log(idx);
  }
  onNext(currentStudent) {
    // console.log(currentStudent)

    // if(currentStudent){
    //   // console.log( parseInt(student.id) +1)
    //   // console.log(currentStudent.id+1);
    //   this.nextStudent.id = currentStudent.id+1

    //   console.log(this.nextStudent);
    // console.log(this.nextStudent.id)
  }


  // if (currentStudentId === this.students.length - 1) {
  //    console.log(this.students[this.students.length - 1 ] );
  //   //  return this.students[0];
  // }
  // return this.students[currentStudentId+1];
}


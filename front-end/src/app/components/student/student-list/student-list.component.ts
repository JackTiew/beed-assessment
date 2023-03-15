import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: any = [];
  
  constructor(
    private studentService: StudentService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  addStudent() {
    const dialogRef = this.dialog.open(AddStudentDialogComponent);

    dialogRef.afterClosed().subscribe(
      (result) => {
        this.insertStudent(result);
      }
    );
  }

  async addStudentFromAPI() {
    const student = await this.studentService.getStudentData(Math.floor(Math.random() * 100) + 1);
    this.insertStudent(student);
  }

  insertStudent(student: any) {
    this.studentList.push(student);
  }

  deleteStudent(studentID: number) {
    this.studentList = this.studentList.filter((student: any)=>student.id != studentID);
  }

}

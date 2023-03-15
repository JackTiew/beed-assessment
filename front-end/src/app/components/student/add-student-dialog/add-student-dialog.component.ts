import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.css']
})
export class AddStudentDialogComponent implements OnInit {

  sexList = [
    {
      label: "Male",
      value: 1
    },
    {
      label: "Female",
      value: 2
    }
  ];
  studentForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    age: ['', [ Validators.required ]],
    sex: ['', [ Validators.required ]],
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddStudentDialogComponent>,
  ) { }

  ngOnInit(): void {}

  addStudent() {
    if(this.studentForm.valid)
    {      
      this.dialogRef.close(
        {
          name: this.studentForm.get('name')?.value,
          age: this.studentForm.get('age')?.value,
          sex: this.studentForm.get('sex')?.value
        }
      );
    }
    this.studentForm.markAllAsTouched();    
  }

}

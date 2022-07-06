import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from 'src/app/service/course/Course';
import { CourseServiceService } from 'src/app/service/course/course-service.service';
import { StudentServicesService } from 'src/app/service/student/student-services.service';
import { Year } from 'src/app/service/year/Year';
import { YearServicesService } from 'src/app/service/year/year-services.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  alert:boolean=false
course!:Course[]
year!:Year[]
insertdata!:FormGroup
  constructor(private courseservice:CourseServiceService,
    private yearservice:YearServicesService,
    private studentservice:StudentServicesService) { }

  ngOnInit(): void {

    this.insertdata = new FormGroup({
      fname: new FormControl(''),
      scname: new FormControl(''),
      lname: new FormControl(''),
      cname: new FormControl(''),
      lodate: new FormControl(''),
      age: new FormControl(''),
      phone: new FormControl(''),
      gender: new FormControl(''),
    })


    this.getCorse();
   this.getYear();
  }
  public getCorse(){
    this.courseservice.getCourseList().subscribe(data=>{
      console.log(data)
      this.course = data;
    })
  }
  public getYear(){
    this.yearservice.getYearList().subscribe(data=>{
      console.log(data)
      this.year = data;
    })
  }
public createStudent(){
  this.studentservice.createStudent(this.insertdata.value).subscribe(data=>{
    console.log(data);
    this.alert=true
  })
}
close(){
  this.alert=false
}

submit(){
console.log(this.insertdata.value)
this.createStudent();
this.insertdata.reset()
}

}

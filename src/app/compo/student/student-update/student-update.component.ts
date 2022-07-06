import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/service/course/Course';
import { CourseServiceService } from 'src/app/service/course/course-service.service';
import { Student } from 'src/app/service/student/Student';
import { StudentServicesService } from 'src/app/service/student/student-services.service';
import { Year } from 'src/app/service/year/Year';
import { YearServicesService } from 'src/app/service/year/year-services.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  id!:number
  students: Student= new Student()
  course!:Course[]
  year!:Year[]
  insertdata!:FormGroup
    constructor(private courseservice:CourseServiceService,
      private yearservice:YearServicesService,
      private studentservice:StudentServicesService,
      private route:ActivatedRoute,private router:Router) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
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
    this.getdatabyid();
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
  public updateStudent(){
    this.studentservice.updateStudent(this.id,this.insertdata.value).subscribe(data=>{
      console.log(data);
    })
  }

  public getdatabyid(){
    this.studentservice.getEStudentById(this.id).subscribe(data=>{
      this.students = data
      this.insertdata = new FormGroup({
        fname: new FormControl(data.fname),
        scname: new FormControl(data.scname),
        lname: new FormControl(data.lname),
        cname: new FormControl(data.cname),
        lodate: new FormControl(data.lodate),
        age: new FormControl(data.age),
        phone: new FormControl(data.age),
        gender: new FormControl(data.gender),
      })
    })
  }
  
  submit(){
  console.log(this.insertdata.value)
  this.updateStudent();
  this.insertdata.reset()
  this.router.navigate(['/nav/student-details'])
  }
  
}

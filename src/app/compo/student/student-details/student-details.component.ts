import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/service/student/Student';
import { StudentServicesService } from 'src/app/service/student/student-services.service';
import {jsPDF}  from 'jspdf';  
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  [x: string]: any;
  
student!:Student[]
page: number = 1;
count: number = 0;
tableSize: number = 5;
tableSizes: any = [3, 6, 9, 12];
  couponPage: any;
  constructor(private studentservices:StudentServicesService,private router:Router
   ) { }

  ngOnInit(): void {
    this.getData();
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getData();
  }
  public getData(){
    return this.studentservices.getStudentList().subscribe(data=>{
      this.student = data;
    })
  }
  delete(id:number){
    this.studentservices.deleteStudent(id).subscribe(data=>{
      console.log(data)
      this.getData();
    })
  }
  update(id:number){
    this.studentservices.getEStudentById(id).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/nav/student-update',{id}])
    })
  }


}
 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/service/student/Student';
import { StudentServicesService } from 'src/app/service/student/student-services.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  id!:number
  getdata: Student = new Student();
  constructor(private studentservices:StudentServicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getbyId();
  }

  public getbyId(){
    return this.studentservices.getEStudentById(this.id).subscribe(data=>{
      console.log(data)
      this.getdata = data;
    })
  }

}

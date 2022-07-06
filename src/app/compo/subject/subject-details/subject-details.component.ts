import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/service/subject/Subject';
import { SubjectServiceService } from 'src/app/service/subject/subject-service.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  subject!: Subject[]
  constructor(private subjectservices:SubjectServiceService) { }

  ngOnInit(): void {
   this.getdata();
  }
  public getdata(){
    this.subjectservices.getSubjectList().subscribe(data=>{
      console.log(data)
      this.subject= data;
    })
  }
  public delete(id:number){

    this.subjectservices.deleteSubject(id).subscribe(data=>{
      console.log(data)
      this.getdata();
    })
  }
}

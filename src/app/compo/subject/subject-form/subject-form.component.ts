import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectServiceService } from 'src/app/service/subject/subject-service.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {
insert_subject!:FormGroup
  constructor(private subjectservice:SubjectServiceService,private router : Router) { }

  ngOnInit(): void {
    this.insert_subject = new FormGroup({
      subject_name: new FormControl('')
    })
  }
  public insertdata(){
    return this.subjectservice.createSubject(this.insert_subject.value).subscribe(data=>{
      console.log(data)
      this.gotoSubjectdetails()
    })
  }
  public gotoSubjectdetails(){
    this.router.navigate(['/nav/subject-details']);
  }

  submit(){
    this.insertdata();
    this.insert_subject.reset()
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/service/course/course-service.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
insertCourse!:FormGroup
  constructor(private courseservice:CourseServiceService,private router:Router) { }

  ngOnInit(): void {
    this.insertCourse = new FormGroup({
      cname: new FormControl(''),
      cdescription : new FormControl('')
    })
  }
  public insertdata(){
    return this.courseservice.createCourse(this.insertCourse.value).subscribe(data=>{
      console.log(data)
      this.gotoCoursedetails()
    })
  }
  public gotoCoursedetails(){
    this.router.navigate(['/nav/course-details']);
  }

  submit(){
    this.insertdata();
    this.insertCourse.reset()
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/service/course/Course';
import { CourseServiceService } from 'src/app/service/course/course-service.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  update_data!:FormGroup  
  id!:number
  course:Course = new Course()
    constructor(private courseservise:CourseServiceService,
      private route: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.update_data=new FormGroup({
        cname: new FormControl(''),
        cdescription: new FormControl('')
      })
      this.getbyid();
    }
  
    public getbyid(){
  this.courseservise.getECourseById(this.id).subscribe(data=>{
    this.course= data
    this.update_data=new FormGroup({
      cname: new FormControl(data.cname),
      cdescription: new FormControl(data.cdescription),
    })
  })
    }
  
  public update(){
    this.courseservise.updateCourse(this.id,this.update_data.value).subscribe(data=>{
      console.log(data)
    })
  }
  public gotocoursedetails(){
    this.router.navigate(['/nav/course-details']);
  }
    submit(){
      this.update();
      this.gotocoursedetails();
      this.update_data.reset();
    }

}

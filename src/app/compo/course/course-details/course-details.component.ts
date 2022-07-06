import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/service/course/Course';
import { CourseServiceService } from 'src/app/service/course/course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course!: Course[]
  constructor(private courseservice :CourseServiceService,private router:Router) { }

  ngOnInit(): void {
   this.getdata();
  }
  public getdata(){
    this.courseservice.getCourseList().subscribe(data=>{
      console.log(data)
      this.course = data;
    })
  }
  public delete(id:number){

    this.courseservice.deleteCourse(id).subscribe(data=>{
      console.log(data)
      this.getdata();
    })
  }
  public update(id:number){
    this.router.navigate(['/nav/course-update',{id}]);
    }
}

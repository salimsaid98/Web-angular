import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './compo/nabar/nav/nav.component';
import { CardComponent } from './compo/nabar/card/card.component';
import { UserformComponent } from './compo/user/userform/userform.component';
import { UserdetailsComponent } from './compo/user/userdetails/userdetails.component';
import { CourseFormComponent } from './compo/course/course-form/course-form.component';
import { CourseDetailsComponent } from './compo/course/course-details/course-details.component';
import { SubjectFormComponent } from './compo/subject/subject-form/subject-form.component';
import { SubjectDetailsComponent } from './compo/subject/subject-details/subject-details.component';
import { YearFormComponent } from './compo/year/year-form/year-form.component';
import { YearDetailsComponent } from './compo/year/year-details/year-details.component';
import { StudentFormComponent } from './compo/student/student-form/student-form.component';
import { StudentDetailsComponent } from './compo/student/student-details/student-details.component';
import { UserdupdateComponent } from './compo/user/userdupdate/userdupdate.component';
import { CourseUpdateComponent } from './compo/course/course-update/course-update.component';
import { LoginComponent } from './compo/login/login/login.component';
import { LogoutComponent } from './compo/logout/logout/logout.component';
import { StudentViewComponent } from './compo/student/student-view/student-view.component';
import { StudentUpdateComponent } from './compo/student/student-update/student-update.component';
const routes: Routes = 
[
  { path: '', component: LoginComponent,children:[
    
  ]},
  { path: 'logout', component: LogoutComponent },

  {path:'nav',component:NavComponent,children:[
  {path:'',component:CardComponent},
  {path:'user-form',component:UserformComponent},
  {path:'user-details',component:UserdetailsComponent},
  {path:'course-form',component:CourseFormComponent},
  {path:'course-details',component:CourseDetailsComponent},
  {path:'subject-form',component:SubjectFormComponent},
  {path:'subject-details',component:SubjectDetailsComponent},
  {path:'year-form',component:YearFormComponent},
  {path:'year-details',component:YearDetailsComponent},
  {path:'student-form',component:StudentFormComponent},
  {path:'student-details',component:StudentDetailsComponent},
  {path:'user-update',component:UserdupdateComponent},
  {path:'course-update',component:CourseUpdateComponent},
  {path:'student-view',component:StudentViewComponent},
  {path:'student-update',component:StudentUpdateComponent}
]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

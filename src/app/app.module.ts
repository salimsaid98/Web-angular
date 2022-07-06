import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './compo/nabar/nav/nav.component';
import { CardComponent } from './compo/nabar/card/card.component';
import { UserformComponent } from './compo/user/userform/userform.component';
import { UserdetailsComponent } from './compo/user/userdetails/userdetails.component';
import { UserdupdateComponent } from './compo/user/userdupdate/userdupdate.component';
import { StudentFormComponent } from './compo/student/student-form/student-form.component';
import { StudentDetailsComponent } from './compo/student/student-details/student-details.component';
import { CourseFormComponent } from './compo/course/course-form/course-form.component';
import { CourseDetailsComponent } from './compo/course/course-details/course-details.component';
import { CourseUpdateComponent } from './compo/course/course-update/course-update.component';
import { StudentUpdateComponent } from './compo/student/student-update/student-update.component';
import { SubjectFormComponent } from './compo/subject/subject-form/subject-form.component';
import { SubjectDetailsComponent } from './compo/subject/subject-details/subject-details.component';
import { SubjectUpdateComponent } from './compo/subject/subject-update/subject-update.component';
import { YearFormComponent } from './compo/year/year-form/year-form.component';
import { YearDetailsComponent } from './compo/year/year-details/year-details.component';
import { YearUpdateComponent } from './compo/year/year-update/year-update.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './compo/login/login/login.component';
import { LogoutComponent } from './compo/logout/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { StudentViewComponent } from './compo/student/student-view/student-view.component';
import { NgxPrintModule } from 'ngx-print';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    UserformComponent,
    UserdetailsComponent,
    UserdupdateComponent,
    StudentFormComponent,
    StudentDetailsComponent,
    CourseFormComponent,
    CourseDetailsComponent,
    CourseUpdateComponent,
    StudentUpdateComponent,
    SubjectFormComponent,
    SubjectDetailsComponent,
    SubjectUpdateComponent,
    YearFormComponent,
    YearDetailsComponent,
    YearUpdateComponent,
    LoginComponent,
    LogoutComponent,
    StudentViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule ,
    NgxPrintModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}


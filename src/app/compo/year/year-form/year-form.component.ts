import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { YearServicesService } from 'src/app/service/year/year-services.service';

@Component({
  selector: 'app-year-form',
  templateUrl: './year-form.component.html',
  styleUrls: ['./year-form.component.css']
})
export class YearFormComponent implements OnInit {
  insert_year!:FormGroup
  constructor(private yearservice:YearServicesService,private router : Router) { }

  ngOnInit(): void {
    this.insert_year = new FormGroup({
      lodate: new FormControl('')
    })
  }
  public insertdata(){
    return this.yearservice.createYear(this.insert_year.value).subscribe(data=>{
      console.log(data)
      this.gotoyeardetails()
    })
  }
  public gotoyeardetails(){
    this.router.navigate(['/nav/navyear-details']);
  }

  submit(){
    this.insertdata();
    this.insert_year.reset()
  }
}

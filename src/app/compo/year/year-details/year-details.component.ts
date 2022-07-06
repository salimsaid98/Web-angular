import { Component, OnInit } from '@angular/core';
import { Year } from 'src/app/service/year/Year';
import { YearServicesService } from 'src/app/service/year/year-services.service';

@Component({
  selector: 'app-year-details',
  templateUrl: './year-details.component.html',
  styleUrls: ['./year-details.component.css']
})
export class YearDetailsComponent implements OnInit {
  year!: Year[]
  constructor(private yearservices : YearServicesService) { }

  ngOnInit(): void {
   this.getdata();
  }
  public getdata(){
    this.yearservices.getYearList().subscribe(data=>{
      console.log(data)
      this.year= data;
    })
  }
  public delete(id:number){

    this.yearservices.deleteYear(id).subscribe(data=>{
      console.log(data)
      this.getdata();
    })
  }

}

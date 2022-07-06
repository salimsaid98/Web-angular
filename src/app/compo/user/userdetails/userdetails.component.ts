import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/service/user/User';
import { UserServicesService } from 'src/app/service/user/user-services.service';

/**
 * @title Paginator
 */
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
users!: User[]
page: number = 1;
count: number = 0;
tableSize: number = 5;
tableSizes: any = [3, 6, 9, 12];
  constructor(private userservice : UserServicesService,private router : Router) { }

  ngOnInit(): void {
   this.getdata();
  }
  public getdata(){
    this.userservice.getUserList().subscribe(data=>{
      console.log(data)
      this.users = data;
    })
  }
  public delete(id:number){

    this.userservice.deleteUser(id).subscribe(data=>{
      console.log(data)
      this.getdata();
    })
  }

public update(id:number){
this.router.navigate(['/nav/user-update',{id}]);
}

onTableDataChange(event: any) {
  this.page = event;
  this.getdata();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getdata();
}

}

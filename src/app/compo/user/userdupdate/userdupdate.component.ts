import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/service/user/User';
import { UserServicesService } from 'src/app/service/user/user-services.service';

@Component({
  selector: 'app-userdupdate',
  templateUrl: './userdupdate.component.html',
  styleUrls: ['./userdupdate.component.css']
})
export class UserdupdateComponent implements OnInit {
update_data!:FormGroup  
id!:number
user: User = new User()
  constructor(private userservice:UserServicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.update_data=new FormGroup({
      username: new FormControl(''),
      password:new FormControl('')
    })
    this.getbyid();
  }

  public getbyid(){
this.userservice.getEUserById(this.id).subscribe(data=>{
  this.user = data
  this.update_data=new FormGroup({
    username: new FormControl(data.username),
    password:new FormControl(data.password)
  })
})
  }

public update(){
  this.userservice.updateUser(this.id,this.update_data.value).subscribe(data=>{
    console.log(data)
  })
}
public gotouserdetails(){
  this.router.navigate(['/nav/user-details']);
}
  submit(){
    this.update();
    this.gotouserdetails();
    this.update_data.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/service/user/user-services.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
insert_user!:FormGroup
  constructor(private userservices:UserServicesService ,private route : Router) { }

  ngOnInit(): void {

    this.insert_user = new FormGroup({
      username: new FormControl(''),
      password:new FormControl('')
    })

  }
 public insert(){
    this.userservices.createUser(this.insert_user.value).subscribe(data=>{
      console.log(data)
      this.gotouserdetails();
    })
  }
  public gotouserdetails(){
    this.route.navigate(['/nav/user-details']);
  }

  

  submit(){
        console.log(this.insert_user);
        this.insert();
        this.insert_user.reset();
        
  }
}

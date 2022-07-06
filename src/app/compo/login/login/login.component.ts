import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthntcationService } from 'src/app/service/authntication/authntcation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean=false
  username = 'salim'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthntcationService) { }

  ngOnInit() {
  }
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/nav'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
      this.alert=true
  }

}

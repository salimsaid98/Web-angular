import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthntcationService } from 'src/app/service/authntication/authntcation.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

 
  constructor(
    private authentocationService: AuthntcationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['']);
  }


}

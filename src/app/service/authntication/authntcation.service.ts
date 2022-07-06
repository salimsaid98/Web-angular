import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthntcationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === "salim" && password === "12345") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}

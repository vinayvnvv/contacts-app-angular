import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }


  setAuth(email: string) {
  	localStorage.setItem('email', email);
  }

  getAuth(email: string) {
  	if(this.isLoggedIn)
  		localStorage.setItem('email', email);
  	else 
  		return false;
  }


  isLoggedIn() {
  	if(localStorage.getItem('email')) return true;
  	return false;
  }

  removeAuth()  {
  	localStorage.removeItem('email');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'

@Injectable()
export class LoginHttpService {

  constructor(
  		private http: HttpClient
  	) { }


  login = (loginData) => {
  	return this.http.post(environment.apiHost + 'login', loginData);
  }

}

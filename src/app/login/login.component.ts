import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms'

import { LoginHttpService } from './login-http.service';
import { AuthService } from './../services/auth.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginHttpService]
})
export class LoginComponent implements OnInit {

  loginForm;
  isLoading: boolean;
  isInvalid: boolean;
  constructor(
  		private fb: FormBuilder,
  		private loginHttpService: LoginHttpService,
  		private authService: AuthService,
  		private router: Router
  	) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm() {
  	this.loginForm = this.fb.group({
  			email: new FormControl('', [Validators.email]),
  			password: new FormControl('', [Validators.required]),
  		})
  }

  login(valid: boolean) {
  	this.isInvalid = false;
  	if(valid) {
  		this.isLoading = true;
  		this.loginHttpService.login(this.loginForm.value).subscribe(
  				(suc) => {
  					console.log(suc);
  					this.authService.setAuth(this.loginForm.value.email);
  					this.router.navigate(['/']);
  					this.isLoading = false;
  				},
  				(err) => {
  					console.log(err)
  					if(err.status == 403) {
  						this.isInvalid = true;
  					}
  					this.isLoading = false;
  				}
  			)
  	}
  }

}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
  	if(this.authService.isLoggedIn()) return true;
  	else this.router.navigate(['/login']);
  }

}


@Injectable()
export class AuthGuardLoginService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
  	if(!this.authService.isLoggedIn()) return true;
  	else this.router.navigate(['/']);
  }

}

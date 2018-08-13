import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService, AuthGuardLoginService} from './services/auth-guard.service';

const routes: Routes = [
	{ path: '', loadChildren: './main/main.module#MainModule' , canActivate:[AuthGuardService] },
	{ path: 'login', loadChildren: './login/login.module#LoginModule' , canActivate: [AuthGuardLoginService]},
	{ path: '**', loadChildren: './main/main.module#MainModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

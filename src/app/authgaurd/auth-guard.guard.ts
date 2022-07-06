import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../services/authguardservice/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardService, private router: Router) {}
  canActivate():boolean {
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/signin");  
  }  
  return this.Authguardservice.gettoken();
  }
  
}
// canActivate(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
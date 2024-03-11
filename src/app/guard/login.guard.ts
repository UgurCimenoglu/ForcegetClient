import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router, private toastr: ToastrService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.isAuthenticated()) {
        return true;
      } else {
        this.route.navigate(["login"]);
        this.toastr.info("Grirş Yapmalısınız!, Login Sayfasına Yönlendiriliyorsunuz.")
        return false;
      }
  }
  
}

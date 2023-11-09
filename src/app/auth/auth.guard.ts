import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private keycloakserv:KeycloakService) {}
 
  canActivate(): Promise<boolean> {
    return this.keycloakserv.isLoggedIn().then((authenticated) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
}
}

import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_PATH = 'http://localhost:8090';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(  
    private httpclient: HttpClient,
    private userAuthService: UserAuthService) { }


  public onLogin(loginData: any) {
    return this.httpclient.post(this.API_PATH + '/api/auth/signin', loginData, {
      headers: this.requestHeader,
    });
  }

  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 1; i < userRoles.length; i++) {
        for (let j = 1; j < allowedRoles.length; j++) {
          if (userRoles[i].roles === allowedRoles[j]) {
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }



}

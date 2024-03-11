import { Inject, Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { TokenModel } from '../models/tokenModel';
import { ResponseModel } from '../models/responseModel';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  login(login: Login) {
    let newPath = `${this.baseUrl}/auth/login`;
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      login
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  register(register: Register) {
    let newPath = `${this.baseUrl}/auth/register`;
    return this.httpClient.post<ResponseModel>(newPath, register);
  }
}

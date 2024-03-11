import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ModeList } from '../models/modeList';
import { MovementList } from '../models/movementList';
import { IncotermList } from '../models/IncotermList';
import { CountryList } from '../models/CountryList';
import { CommonTypeList } from '../models/common';

@Injectable({
  providedIn: 'root',
})
export class OthersService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  getModes() {
    let newPath = `${this.baseUrl}/mode`;
    return this.httpClient.get<CommonTypeList>(newPath);
  }

  getMovementTypes() {
    let newPath = `${this.baseUrl}/MovementType`;
    return this.httpClient.get<CommonTypeList>(newPath);
  }

  getIncoterms() {
    let newPath = `${this.baseUrl}/Incoterm`;
    return this.httpClient.get<CommonTypeList>(newPath);
  }

  getCountries() {
    let newPath = `${this.baseUrl}/country`;
    return this.httpClient.get<CountryList>(newPath);
  }
  getPackageTypes() {
    let newPath = `${this.baseUrl}/PackageType`;
    return this.httpClient.get<CommonTypeList>(newPath);
  }
  getUnit1s() {
    let newPath = `${this.baseUrl}/unit1`;
    return this.httpClient.get<CommonTypeList>(newPath);
  }
  getUnit2s() {
    let newPath = `${this.baseUrl}/unit2`;
    return this.httpClient.get<CommonTypeList>(newPath);
  }
  getCurrencys() {
    let newPath = `${this.baseUrl}/currency`;
    return this.httpClient.get<CommonTypeList>(newPath);
  }
}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { OfferList } from '../models/offterList';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  getOffers() {
    let newPath = `${this.baseUrl}/offer`;
    return this.httpClient.get<OfferList>(newPath);
  }

  addOffer(value: any) {
    let newPath = `${this.baseUrl}/offer`;
    return this.httpClient.post<ResponseModel>(newPath, value);
  }
}

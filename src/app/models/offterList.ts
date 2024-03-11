import { ListResponseModel } from './listResponseModel';

export interface OfferList extends ListResponseModel<OfferData> {}

export interface OfferData {
  modeId: string;
  movementTypeId: string;
  incotermId: string;
  countryId: string;
  cityId: string;
  packageTypeId: string;
  unit1Id: string;
  unit2Id: string;
  currencyId: string;
  unit1Value: number;
  unit2Value: number;
  price: number;
  mode: Mode;
  movementType: MovementType;
  incoterm: Incoterm;
  country: Country;
  city: City2;
  packageType: PackageType;
  unit1: Unit1;
  unit2: Unit2;
  currency: Currency;
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface Mode {
  name: string;
  offer: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface MovementType {
  name: string;
  offer: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface Incoterm {
  name: string;
  offer: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface Country {
  name: string;
  cities: City[];
  offers: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface City {
  name: string;
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface City2 {
  name: string;
  country: Country2;
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface Country2 {
  name: string;
  cities: any[];
  offers: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface PackageType {
  name: string;
  offer: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface Unit1 {
  name: string;
  offer: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface Unit2 {
  name: string;
  offer: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

export interface Currency {
  name: string;
  offer: any[];
  id: string;
  createdDate: string;
  updatedDate: any;
}

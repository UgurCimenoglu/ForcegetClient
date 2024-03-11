import { ListResponseModel } from './listResponseModel';

export interface CountryList extends ListResponseModel<Country> {}

export interface Country {
  id: string;
  name: string;
  cities: City[];
}

export interface City {
  id: string;
  name: string;
}

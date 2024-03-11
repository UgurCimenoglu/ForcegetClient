import { ListResponseModel } from './listResponseModel';

export interface IncotermList extends ListResponseModel<Incoterm> {}

export interface Incoterm {
  id: string;
  Name: string;
}

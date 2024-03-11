import { ListResponseModel } from './listResponseModel';

export interface CommonTypeList extends ListResponseModel<Common> {}

export interface Common {
  id: string;
  name: string;
}

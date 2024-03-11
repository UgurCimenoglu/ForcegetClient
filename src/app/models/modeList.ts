import { ListResponseModel } from './listResponseModel';

export interface ModeList extends ListResponseModel<Mode> {}

export interface Mode {
  id: string;
  Name: string;
}

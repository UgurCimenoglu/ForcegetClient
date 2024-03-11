import { ListResponseModel } from './listResponseModel';

export interface MovementList extends ListResponseModel<Movement> {}

export interface Movement {
  id: string;
  Name: string;
}

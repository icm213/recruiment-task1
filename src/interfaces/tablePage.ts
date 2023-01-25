import { tableProduct } from "./tableProduct";
export interface tablePage {
  tablePage: number;
  passProduct: (productObj: tableProduct) => void;
  toggleModal: () => void;
}

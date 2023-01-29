import { PassProductData } from "./PassProductData";
export interface CreateTable {
  tablePage: number;
  fetchExactProduct: number;
  productsCount: number;
  passProduct: (productObj: PassProductData) => void;
  toggleModal: () => void;
}

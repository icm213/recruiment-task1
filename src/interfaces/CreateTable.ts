import { PassProductData } from "./PassProductData";
export interface CreateTable {
  tablePage: number;
  passProduct: (productObj: PassProductData) => void;
  toggleModal: () => void;
  fetchExactProduct: number;
  productsCount: number;
}

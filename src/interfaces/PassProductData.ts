export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
export interface PassProductData extends Product {
  toggleModal?: () => void;
}

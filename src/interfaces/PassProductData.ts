export interface PassProductData {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
  toggleModal?: () => void;
}

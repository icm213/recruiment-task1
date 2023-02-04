export interface PassInputData {
  productsCount: number;
  inputValue: string;
  handleChange: (e: { target: { value: string } }) => void;
}

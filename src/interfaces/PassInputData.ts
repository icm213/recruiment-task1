export interface PassInputData {
  inputValue: string;
  handleChange: (e: { target: { value: string } }) => void;
}

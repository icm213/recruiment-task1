export interface InputData {
  inputValue: number | string;
  handleChange: (e: { target: { value: string } }) => void;
}

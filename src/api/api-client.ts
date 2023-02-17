import axios, { AxiosError } from "axios";
import { Product } from "../interfaces/PassProductData";

export default class ApiClient {
  private baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
  async getProduct(id: number): Promise<Product | null> {
    const url = `${this.baseURL}/products?id=${id}`;
    try {
      const response = await axios.get(url);
      return response.data.data as Product;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          return null;
        }
        handleApiError(error);
      } else {
        handleApiError(error);
      }
      return null;
    }
  }

  async getAmountOfProducts(): Promise<number> {
    const url = `${this.baseURL}/products`;
    try {
      const response = await axios.get(url);
      return response.data.total;
    } catch (error) {
      handleApiError(error);
      return;
    }
  }

  // async getProductsPaginated(pageNumber: number): Promise<Product[]> | null {
  //   const url = `${this.baseURL}/products?per_page=5&page=$${pageNumber}`;
  // }
}

function handleApiError(error: Error | AxiosError): void {
  if (axios.isAxiosError(error)) {
    console.error(`API error: ${error.message} (${error.response?.status})`);
  } else {
    console.error(`API error: ${error.message}`);
  }
}

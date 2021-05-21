import { Product } from "./product";

export interface RespProduct {
  success: boolean;
  message: string;
  data: Product[];
}

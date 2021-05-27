import { SaleProduct } from "./sale-product";

export interface RespSaleProduct {
  success: boolean;
  message: string;
  data: SaleProduct[];
}

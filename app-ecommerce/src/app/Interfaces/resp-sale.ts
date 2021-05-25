import { Sale } from "./sale";

export interface RespSale {
  success: boolean;
  message: string;
  data: Sale[];
}

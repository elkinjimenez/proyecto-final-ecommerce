import { ObjGeneral } from "./obj-general";
import { Product } from "./product";
import { Sale } from "./sale";

export interface SaleProduct  extends ObjGeneral{
  amount: number;
  product: Product | number;
  sale: Sale | number;
}

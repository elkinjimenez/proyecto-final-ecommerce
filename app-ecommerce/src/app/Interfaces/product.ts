import { ObjGeneral } from "./obj-general";

export interface Product extends ObjGeneral {
  name: string;
  state: boolean;
  registerUser: string;
  modifyUser?: string;
  description: string;
  brand: string;
  category: number;
  stock: number;
  price: number;
}

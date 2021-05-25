import { Client } from "./client";
import { ObjGeneral } from "./obj-general";

export interface Sale  extends ObjGeneral{
  saleDate: number;
  client: Client | number;
  state: boolean;
}

import { ObjGeneral } from "../Interfaces/obj-general";

export interface Person extends ObjGeneral {
  address: string;
  city: string;
  email: string;
  lastname: string;
  name: string;
  phone: number;
}

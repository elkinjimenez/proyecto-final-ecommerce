import { ObjGeneral } from "./obj-general";

export interface Person extends ObjGeneral {
  address: string;
  city: string;
  email: string;
  lastname: string;
  name: string;
  phone: number;
}

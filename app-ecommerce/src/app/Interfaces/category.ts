import { ObjGeneral } from "./obj-general";

export interface Category extends ObjGeneral{
  name: string;
  state: boolean;
  registerUser: string;
  modifyUser: string;
}

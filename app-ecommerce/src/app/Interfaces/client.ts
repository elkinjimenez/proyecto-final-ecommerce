import { Person } from "../Interface/person";
import { ObjGeneral } from "./obj-general";

export interface Client extends ObjGeneral {
  gender: string;
  user: string;
  password: string;
  person: Person;
  state: boolean;
}

import { Category } from "./category";

export interface RespGeneral {
  success: boolean;
  message: string;
  data: Category[];
}

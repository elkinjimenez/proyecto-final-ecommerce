import { Category } from "./category";

export interface RespCategory {
  success: boolean;
  message: string;
  data: Category[];
}

import { Client } from "./client";

export interface RespClient {
  success: boolean;
  message: string;
  data: Client[];
}

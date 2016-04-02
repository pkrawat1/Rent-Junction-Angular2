import { Logo } from "./category";

export interface Product {
  created_at: string;
  desc: string;
  logo: Logo;
  mft_date: string;
  name: string;
  rent: string;
  updated_at: string;
  _id: string;
  owner_id: string;
  sub_category_id: string;
}

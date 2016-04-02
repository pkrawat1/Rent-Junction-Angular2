export interface Category {
  desc: string;
  logo: Logo;
  name: string;
  s_name: string;
  sub_categories: SubCategory[];
  _id: String;
}

export interface SubCategory {
  logo: Logo;
  name: string;
  _id: string;
  category_id: string;
}

export interface Logo {
  url: string;
}

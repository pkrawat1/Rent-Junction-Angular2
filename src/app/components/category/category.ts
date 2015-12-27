export interface Category {
  desc: string;
  logo: Logo;
  name: string;
  s_name: string;
  sub_categories: SubCategory;
}

export interface SubCategory{
  logo: Logo;
  name: string;
  _id: string;
  category_id: string;
}

interface Logo {
  url: string;
}
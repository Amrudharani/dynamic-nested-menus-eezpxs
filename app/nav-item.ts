export interface NavItem {
  Id: number;
  Name: string;
  Slug: string;
  Parent: number;
  term_url: string;
  attr: number;
  route?: string;
  children?: NavItem[];
}

export type Locale = "pt" | "en";

export interface MenuItem {
  name: string;
  desc?: string;
  price?: string;
}

export interface MenuSubsection {
  title?: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  subsections?: MenuSubsection[];
  items?: MenuItem[];
}

export interface MenuNote {
  label: string;
  text: string;
}

export interface MenuData {
  sections: MenuSection[];
  notes: MenuNote[];
}

// What the menu page and admin page consume.
export interface MenuPayload {
  data: MenuData;
  imageUrl: string | null;
}

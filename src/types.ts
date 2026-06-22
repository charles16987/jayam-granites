export interface GalleryItem {
  id: string;
  title: string;
  type: 'slab' | 'warehouse';
  image: string;
  description: string;
  thickness?: string;
  finish?: string;
  origin?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

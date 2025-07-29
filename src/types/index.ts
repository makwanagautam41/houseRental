
export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  type: 'apartment' | 'house' | 'villa' | 'studio';
  furnishing: 'furnished' | 'semi-furnished' | 'unfurnished';
  amenities: string[];
  description: string;
  owner: {
    name: string;
    avatar: string;
    phone: string;
    email: string;
  };
  featured: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone?: string;
}

export interface SearchFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number;
  type: string;
  furnishing: string;
}

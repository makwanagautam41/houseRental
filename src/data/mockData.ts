
import { Property } from '../types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    address: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334'
    ],
    type: 'apartment',
    furnishing: 'furnished',
    amenities: ['WiFi', 'Parking', 'Pool', 'Gym', 'AC'],
    description: 'Beautiful modern apartment in the heart of downtown with stunning city views.',
    owner: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      phone: '+1 555-0123',
      email: 'sarah@email.com'
    },
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Cozy Family House',
    address: '456 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    price: 3200,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      'https://images.unsplash.com/photo-1524230572899-a752b3835840'
    ],
    type: 'house',
    furnishing: 'semi-furnished',
    amenities: ['WiFi', 'Parking', 'Garden', 'AC', 'Fireplace'],
    description: 'Charming family house with a beautiful garden and quiet neighborhood.',
    owner: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      phone: '+1 555-0456',
      email: 'michael@email.com'
    },
    featured: true,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Luxury Villa with Pool',
    address: '789 Hillside Drive',
    city: 'Miami',
    state: 'FL',
    price: 4500,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    ],
    type: 'villa',
    furnishing: 'furnished',
    amenities: ['WiFi', 'Parking', 'Pool', 'Gym', 'AC', 'Security'],
    description: 'Stunning luxury villa with private pool and ocean views.',
    owner: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      phone: '+1 555-0789',
      email: 'emily@email.com'
    },
    featured: false,
    createdAt: '2024-01-25'
  },
  {
    id: '4',
    title: 'Minimalist Studio',
    address: '321 Design Street',
    city: 'New York',
    state: 'NY',
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    images: [
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      'https://images.unsplash.com/photo-1524230572899-a752b3835840'
    ],
    type: 'studio',
    furnishing: 'furnished',
    amenities: ['WiFi', 'AC', 'Laundry'],
    description: 'Clean, minimalist studio perfect for young professionals.',
    owner: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      phone: '+1 555-0321',
      email: 'david@email.com'
    },
    featured: true,
    createdAt: '2024-02-01'
  },
  {
    id: '5',
    title: 'Spacious Loft',
    address: '654 Industrial Blvd',
    city: 'Chicago',
    state: 'IL',
    price: 2200,
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04'
    ],
    type: 'apartment',
    furnishing: 'unfurnished',
    amenities: ['WiFi', 'Parking', 'High Ceilings', 'Exposed Brick'],
    description: 'Unique loft space with industrial charm and modern amenities.',
    owner: {
      name: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      phone: '+1 555-0654',
      email: 'lisa@email.com'
    },
    featured: false,
    createdAt: '2024-02-05'
  },
  {
    id: '6',
    title: 'Beachfront Condo',
    address: '987 Ocean Drive',
    city: 'San Diego',
    state: 'CA',
    price: 3800,
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      'https://images.unsplash.com/photo-1524230572899-a752b3835840'
    ],
    type: 'apartment',
    furnishing: 'furnished',
    amenities: ['WiFi', 'Parking', 'Pool', 'Beach Access', 'AC'],
    description: 'Beautiful beachfront condo with panoramic ocean views.',
    owner: {
      name: 'James Martinez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      phone: '+1 555-0987',
      email: 'james@email.com'
    },
    featured: true,
    createdAt: '2024-02-10'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Alex Thompson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    text: 'Found my dream apartment in just 2 days! The process was seamless and the support team was incredibly helpful.',
    rating: 5
  },
  {
    id: '2',
    name: 'Maria Garcia',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    text: 'HomeHaven made house hunting so much easier. The search filters are perfect and I love the detailed property information.',
    rating: 5
  },
  {
    id: '3',
    name: 'Robert Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    text: 'As a property owner, I appreciate how easy it is to manage my listings. Great platform for both renters and owners.',
    rating: 5
  }
];

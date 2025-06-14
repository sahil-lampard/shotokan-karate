export type TCourse = {
  id: string;
  name: string;
  description: string;
  ageGroup: string;
  schedule: string;
  price: string;
  features: string[];
};

export type TTrainer = {
  id: string;
  name: string;
  rank: string;
  experience: string;
  specialization: string[];
  image: string;
  bio: string;
};

export type TGalleryImage = {
  id: string;
  url: string;
  title: string;
  category: 'training' | 'events' | 'competitions' | 'graduation';
};

export type TMembershipPlan = {
  id: string;
  name: string;
  duration: string;
  price: string;
  features: string[];
  recommended: boolean;
};

export const INSTITUTE_INFO = {
  name: 'Traditional Shotokan Karate Institute',
  description: 'A premier affiliated karate training center dedicated to excellence in martial arts education',
  address: 'Payyoli, Kozhikode, Kerala',
  phone: '+91 9656303593',
  email: 'aimindia@gmail.com',
  socialMedia: {
    facebook: 'https://facebook.com/shotokankarate',
    instagram: 'https://instagram.com/shotokankarate',
    youtube: 'https://youtube.com/shotokankarate',
  },
  affiliation: {
    name: 'World Shotokan Karate Federation',
    logo: '/images/affiliation-logo.png',
    description: 'Certified member of the World Shotokan Karate Federation',
  },
};

export const COURSES: TCourse[] = [
  {
    id: 'kids-basic',
    name: 'Kids Basic Training',
    description: 'Introduction to karate for children aged 5-12',
    ageGroup: '5-12 years',
    schedule: 'Mon, Wed, Fri - 4:00 PM to 5:00 PM',
    price: '$99/month',
    features: [
      'Basic stances and movements',
      'Age-appropriate exercises',
      'Discipline and respect training',
      'Fun learning environment',
    ],
  },
  {
    id: 'adult-basic',
    name: 'Adult Basic Training',
    description: 'Comprehensive karate training for adults',
    ageGroup: '13+ years',
    schedule: 'Mon, Wed, Fri - 6:00 PM to 7:30 PM',
    price: '$129/month',
    features: [
      'Basic to advanced techniques',
      'Strength and conditioning',
      'Self-defense training',
      'Belt progression system',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced Training',
    description: 'Advanced techniques and competition preparation',
    ageGroup: 'All ages (Black Belt)',
    schedule: 'Tue, Thu, Sat - 6:00 PM to 8:00 PM',
    price: '$149/month',
    features: [
      'Advanced kata training',
      'Competition preparation',
      'Instructor training',
      'Specialized workshops',
    ],
  },
];

export const TRAINERS: TTrainer[] = [
  {
    id: 'trainer-1',
    name: 'Sensei John Smith',
    rank: '7th Dan Black Belt',
    experience: '25+ years',
    specialization: ['Kata', 'Kumite', 'Self-defense'],
    image: '/images/trainers/sensei-john.jpg',
    bio: 'Master John Smith has been teaching karate for over 25 years and has trained numerous national champions.',
  }, 
  {
    id: 'trainer-2',
    name: 'Ajith Kumar',
    rank: '5th Dan Black Belt',
    experience: '15+ years',
    specialization: ['Kids Training', 'Kata', 'Fitness'],
    image: '/images/trainers/sensei-sarah.jpg',
    bio: 'Sensei Sarah specializes in children\'s training and has developed unique methods to make karate fun and engaging for young students.',
  },
  {
    id: 'trainer-3',
    name: 'Sajeer VP',
    rank: '5th Dan Black Belt',
    experience: '15+ years',
    specialization: ['Kids Training', 'Kata', 'Fitness'],
    image: '/images/trainers/sajeer.jpg',
    bio: 'Sensei Sarah specializes in children\'s training and has developed unique methods to make karate fun and engaging for young students.',
  },
];

export const GALLERY: TGalleryImage[] = [
  {
    id: 'gallery-1',
    url: '/images/gallery/training-1.jpg',
    title: 'Basic Training Session',
    category: 'training',
  },
  {
    id: 'gallery-2',
    url: '/images/gallery/competition-1.jpg',
    title: 'National Championship 2023',
    category: 'competitions',
  },
  {
    id: 'gallery-3',
    url: '/images/gallery/graduation-1.jpg',
    title: 'Black Belt Ceremony 2023',
    category: 'graduation',
  },
];

export const MEMBERSHIP_PLANS: TMembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    duration: '3 months',
    price: '$299',
    features: [
      '2 classes per week',
      'Basic uniform included',
      'Belt testing included',
      'Access to basic training materials',
    ],
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    duration: '6 months',
    price: '$549',
    features: [
      '3 classes per week',
      'Premium uniform included',
      'Belt testing included',
      'Access to all training materials',
      '10% discount on workshops',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    duration: '12 months',
    price: '$999',
    features: [
      'Unlimited classes',
      'Premium uniform included',
      'Belt testing included',
      'Access to all training materials',
      '20% discount on workshops',
      'Private lesson once a month',
    ],
    recommended: false,
  },
]; 

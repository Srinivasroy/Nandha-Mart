export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  footer : string;
}

export const products = [
  {
    id: 1,
    name: 'Nandha 1st Phone ',
    price: '$799000',
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Nandha 2nd phone',
    price: '$699000',
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Nandha 3rd phone',
    price: '$2000999',
    description: 'CEOs Phone',
    footer : 'Copyright by Nandha C.E.O'
  }
];



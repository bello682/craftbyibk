export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  tag?: string;
}
// @/lib/data.ts

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "LHR London England Hoodie",
    price: 250,
    image: "/images/bag-1.jpg",
    category: "Hoodie",
    tag: "New Arrival",
  },
  {
    id: "2",
    name: "Retro Rapper Taped Hoodie",
    price: 180,
    image: "/images/bag-2.jpg",
    category: "Hoodie",
  },
  {
    id: "3",
    name: "Classic Street Hoodie",
    price: 150,
    image: "/images/bag-3.jpg",
    category: "Hoodie",
  },
  {
    id: "4",
    name: "Essential Fleece Hoodie",
    price: 120,
    image: "/images/bag-4.jpg",
    category: "Hoodie",
  },
  {
    id: "5",
    name: "Signature Oversized Hoodie",
    price: 210,
    image: "/images/bag-1.jpg",
    category: "Hoodie",
    tag: "Limited",
  },
  {
    id: "6",
    name: "Vintage Wash Pullover",
    price: 195,
    image: "/images/bag-2.jpg",
    category: "Hoodie",
  },
  {
    id: "7",
    name: "Urban Tech Wear Hoodie",
    price: 275,
    image: "/images/bag-3.jpg",
    category: "Hoodie",
  },
  {
    id: "8",
    name: "Midnight Stealth Hoodie",
    price: 230,
    image: "/images/bag-4.jpg",
    category: "Hoodie",
  },
];

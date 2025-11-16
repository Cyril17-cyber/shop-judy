// /data/products.ts

export interface SubCategoryType {
  name: string;
  image: string;
}

interface CityType {
  country: string;
  city: string;
}

interface CategoryType {
  name: string;
  subCategories: SubCategoryType[];
}

export const categories: CategoryType[] = [
  {
    name: "electronics",
    subCategories: [
      {
        name: "television & video",
        image:
          "https://images.unsplash.com/photo-1701421048182-2a628d927578?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB0ZWxldmlzaW9ufGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "audio & music",
        image:
          "https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlcnxlbnwwfDJ8MHx8fDI%3D",
      },
      {
        name: "cameras & video",
        image:
          "https://images.unsplash.com/photo-1524135220673-c731600a1a50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZXJhfGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "security equipments",
        image:
          "https://images.unsplash.com/photo-1515432085503-cabf2fbcd690?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHwyfDB8fHwy",
      },
      {
        name: "electronic equipments",
        image:
          "https://images.unsplash.com/photo-1563920443079-783e5c786b83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlY3VyaXR5fGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1563920443079-783e5c786b83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlY3VyaXR5fGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        name: "computers",
        image:
          "https://images.unsplash.com/photo-1563920443079-783e5c786b83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlY3VyaXR5fGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        name: "networking equipments",
        image:
          "https://images.unsplash.com/photo-1563920443079-783e5c786b83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlY3VyaXR5fGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        name: "home",
        image:
          "https://images.unsplash.com/photo-1563920443079-783e5c786b83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlY3VyaXR5fGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
  },
  {
    name: "fitness",
    subCategories: [
      {
        name: "weights",
        image:
          "https://images.unsplash.com/photo-1652364649008-99b647d0d1d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlaWdodHN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "equipments",
        image:
          "https://images.unsplash.com/photo-1652364653960-1c23c208ef43?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "wear",
        image:
          "https://images.unsplash.com/photo-1716951187026-77811cc8c929?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwYWNjZXNzb3JpZXN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1595909315417-2edd382a56dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwYWNjZXNzb3JpZXN8ZW58MHwyfDB8fHwy",
      },
    ],
  },
  {
    name: "kitchen",
    subCategories: [
      {
        name: "cookware",
        image:
          "https://images.unsplash.com/photo-1583777656977-480d550aea5c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va3dhcmV8ZW58MHwyfDB8fHwy",
      },
      {
        name: "appliances",
        image:
          "https://images.unsplash.com/photo-1583241475880-083f84372725?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "utensils",
        image:
          "https://images.unsplash.com/photo-1593618229012-8aaad1cfefc3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbiUyMHRvb2xzfGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "gadgets",
        image:
          "https://images.unsplash.com/photo-1639036910954-27b2fe434fb1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpdGNoZW4lMjB0b29sc3xlbnwwfDJ8MHx8fDI%3D",
      },
    ],
  },
  {
    name: "fashion",
    subCategories: [
      {
        name: "bags",
        image:
          "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnc3xlbnwwfDJ8MHx8fDI%3D",
      },
      {
        name: "clothing",
        image:
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHwyfDB8fHwy",
      },
      {
        name: "shoes",
        image:
          "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "jewelry",
        image:
          "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxyeXxlbnwwfDJ8MHx8fDI%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1521127376958-80338b32f37b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHwyfDB8fHwy",
      },
    ],
  },
  {
    name: "phone & tablets",
    subCategories: [
      {
        name: "smartphones",
        image:
          "https://images.unsplash.com/photo-1640936343842-268f9d87e764?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "tablets",
        image:
          "https://images.unsplash.com/photo-1644953798828-a92178929505?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNjZXNzb3JpZXN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "wearables",
        image:
          "https://images.unsplash.com/photo-1657610692698-45ead7f75550?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlJTIwd2F0Y2h8ZW58MHwyfDB8fHwy",
      },
    ],
  },
  {
    name: "automobiles",
    subCategories: [
      {
        name: "cars",
        image:
          "https://images.unsplash.com/photo-1705624843697-4461f9dce482?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "motorcycles",
        image:
          "https://images.unsplash.com/photo-1572746965401-cb4df8f9fa79?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW90b3JjeWNsZXxlbnwwfDJ8MHx8fDI%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1584945810370-9d887daa7a80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RlZXJpbmclMjBjb3ZlcnxlbnwwfDJ8MHx8fDI%3D",
      },
      {
        name: "heavy machinery",
        image:
          "https://images.unsplash.com/photo-1748974302709-20c4b9c76b04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdnklMjBtYWNoaW5lcnl8ZW58MHwyfDB8fHwy",
      },
      {
        name: "truck & trailers",
        image:
          "https://images.unsplash.com/photo-1701637657912-9e23e32155d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJ1Y2t8ZW58MHwyfDB8fHwy",
      },
      {
        name: "parts",
        image:
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcGFydHN8ZW58MHwwfDB8fHwy",
      },
      {
        name: "supplies",
        image:
          "https://images.unsplash.com/photo-1590227763209-821c686b932f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwb2lsfGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
  },
  {
    name: "gaming",
    subCategories: [
      {
        name: "consoles",
        image:
          "https://images.unsplash.com/photo-1708958624428-d3b6bfb4faa3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlzdGF0aW9ufGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1585102664582-d3f574466cf5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYXlzdGF0aW9ufGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "games",
        image:
          "https://images.unsplash.com/photo-1635243208988-9ff40a412038?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYXlzdGF0aW9uJTIwZ2FtZXxlbnwwfDJ8MHx8fDI%3D",
      },
    ],
  },
  {
    name: "home",
    subCategories: [
      {
        name: "dining",
        image:
          "https://images.unsplash.com/photo-1616486886892-ff366aa67ba4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nJTIwdGFibGV8ZW58MHwyfDB8fHwy",
      },
      {
        name: "cleaning tools",
        image:
          "https://images.unsplash.com/photo-1716625301208-d9589e446fa6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsZWFuaW5nfGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "home decor",
        image:
          "https://images.unsplash.com/photo-1615874694520-474822394e73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8MnwwfHx8Mg%3D%3D",
      },
      {
        name: "bedding",
        image:
          "https://images.unsplash.com/photo-1688065177980-926d65bd548c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHxlbnwwfDJ8MHx8fDI%3D",
      },
    ],
  },
  {
    name: "baby products",
    subCategories: [
      {
        name: "clothing",
        image:
          "https://images.unsplash.com/photo-1705329584512-b210927265e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMGNsb3RoZXN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNsb3RoZXN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "feeding",
        image:
          "https://images.unsplash.com/photo-1631880383152-f29099b0fd16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGZvb2R8ZW58MHwyfDB8fHwy",
      },
      {
        name: "toys",
        image:
          "https://images.unsplash.com/photo-1743660324799-de11a1e9bfd7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMHRveXN8ZW58MHwyfDB8fHwy",
      },
      {
        name: "supplies",
        image:
          "https://images.unsplash.com/photo-1711936400545-90fbdc5496c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieSUyMHR1YnxlbnwwfDJ8MHx8fDI%3D",
      },
    ],
  },
  {
    name: "animals & pets",
    subCategories: [
      {
        name: "feeding",
        image:
          "https://images.unsplash.com/photo-1596854331442-3cf47265cefb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwZm9vZHxlbnwwfDJ8MHx8fDI%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1736699511230-1dc8a3e8b917?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZyUyMGNvbGxhcnxlbnwwfDJ8MHx8fDI%3D",
      },
      {
        name: "supplies",
        image:
          "https://images.unsplash.com/photo-1663659506570-067bf9e9937f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsJTIwc2hhbXBvb3xlbnwwfDJ8MHx8fDI%3D",
      },
      {
        name: "health",
        image:
          "https://images.unsplash.com/photo-1747930318086-8dbe46e52ddb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwZHJ1Z3N8ZW58MHwyfDB8fHwy",
      },
    ],
  },
];

// This is a TypeScript interface for a product object
export interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  rated: number;
  category: string; //category field
  subCategory: string; //sub-category field
  sex?: string;
  colors?: string[];
  sizes?: string[];
  condition: string;
  description: string[]; //description field
  stock: number; //stock field
  discount?: number; //discount field
  gallery: string[]; //gallery field for multiple images
  createdAt: string; //field for creation date
  deliversTo: CityType[];
  brand: string;
  keywords: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Womens Summer Tops Crewneck Short Sleeve Shirts Casual Chiffon Blouses Flowy Lace Hem Boho Clothing Trendy 2025",
    price: 25000,
    seller: "Rita Stores",
    rated: 4.1,
    category: "fashion",
    subCategory: "clothing",
    sex: "female",
    colors: ["#1e1e1e", "#00d492", "#0084d1"],
    condition: "brand new",
    description: [
      "Falechay womens crew neck crochet lace boho shirts is made with high-quality fabric. Soft, lightweight and comfortable to wear.",
      "Feature: Crewneck, Solid Color, Short Sleeve, Crochet Lace Edges, Pom Pom Swiss Dots Detailing, Loose Fit Tops, make you look more energetic.",
      "You can pair this fashion blouses with variety of coats, jacket, jeans, denim shorts, skirts, jeggings, sneakers or heels to complete casual look that's easy to love all season long.",
      "Occasion: The casual lace crochet shirts is perfect choice for your daily wear, outdoor activities, shopping, dates and any other occasions in Spring, Summer, Fall and Winter.",
      " Size: Please refer to the Size Chart before ordering, Hand/machine wash recommend, hang dry, do not bleach.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/71cvjYANouL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71Iyq3a5s9L._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/81t-J0VcjFL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71U23Upk8wL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71cvNkssE3L._AC_SY879_.jpg",
    ],
    createdAt: "12-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Kaduna",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "Chiffon",
    keywords: ["fashion", "clothing", "chiffon", "female", "women"],
  },
  {
    id: 2,
    name: "Dokotoo Tops for Women Striped 2025 Fashion T Shirts for Women Color Block Crewneck Design Loose Basic Tee",
    price: 20000,
    seller: "Dokotoo Store",
    rated: 4.3,
    category: "fashion",
    subCategory: "clothing",
    sex: "female",
    colors: ["#1e1e1e", "#00d492", "#0084d1"],
    condition: "brand new",
    description: [
      "Falechay womens crew neck crochet lace boho shirts is made with high-quality fabric. Soft, lightweight and comfortable to wear.",
      "Feature: Crewneck, Solid Color, Short Sleeve, Crochet Lace Edges, Pom Pom Swiss Dots Detailing, Loose Fit Tops, make you look more energetic.",
      "You can pair this fashion blouses with variety of coats, jacket, jeans, denim shorts, skirts, jeggings, sneakers or heels to complete casual look that's easy to love all season long.",
      "Occasion: The casual lace crochet shirts is perfect choice for your daily wear, outdoor activities, shopping, dates and any other occasions in Spring, Summer, Fall and Winter.",
      " Size: Please refer to the Size Chart before ordering, Hand/machine wash recommend, hang dry, do not bleach.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/61EufpA8npL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61I36UQBSHL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61-zyxZPewL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61yKQgr3yyL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/619c0XNoteL._AC_SY879_.jpg",
    ],
    createdAt: "20-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Enugu",
      },
      {
        country: "Nigeria",
        city: "Lagos",
      },
    ],
    brand: "Dokotoo",
    keywords: ["fashion", "clothing", "chiffon", "female", "women"],
  },

  {
    id: 3,
    name: "J.VER Men's Cotton Linen Short Sleeve Shirts Casual Lightweight Button Down Shirts Vacation Beach Summer Tops with Pocket",
    price: 17000,
    seller: "J.VER Store",
    rated: 4.3,
    category: "fashion",
    subCategory: "clothing",
    sex: "male",
    colors: ["#a800b7", "#fefefe", "#4d0218"],
    condition: "brand new",
    description: [
      "Shrink Free: The casual short sleeve shirt is made of high-quality cotton and linen fabric with anti-shrink treatment, soft and comfortable,easy to iron, lightweight and cool,good breathability, take away the stuffiness, and give you a better wearing experience",
      "Unique Design: 1. We offer solid shirts in a variety of colors. 2. One chest pocket makes it easy to store small items. 3. Classic design--spread collar, button closure placket. 4. Extra button--Cotton linen short sleeve shirts are sewn with an eighth button, which you can use if needed",
      "Easy to Match: We offer you a wide range of sizes and colors to meet your different needs. Men's cotton linen shirt sizes are standard US sizes, easy to match with various bottoms. Please refer to the size chart image to choose the size that suits you",
      "Applicable Occasions: Mens casual cotton linen shirts are perfect for summer, vacation, beach, party, tropical, wedding, date and other daily wear. In everyday casual dressing, men's short sleeve shirt will always show off your charm. It is also an ideal gift for husbands, fathers, sons and friends",
      "Dry, laundry or handwash are available, low iron if necessary",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/71FEmf-htQL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71wkhG8w2zL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71GTs2pscmL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ORhYuO8oL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Z2LUBeAkL._AC_SX679_.jpg",
    ],
    createdAt: "20-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Kaduna",
      },
      {
        country: "Nigeria",
        city: "Abuja",
      },
    ],
    brand: "J.VER",
    keywords: ["fashion", "clothing", "chiffon", "male", "men"],
  },
  {
    id: 4,
    name: "Zaitun Mens Hooded Sweatshirt Long Sleeve Solid Knitted Hoodie Pullover Sweater",
    price: 40000,
    seller: "J.VER Store",
    rated: 4.6,
    category: "fashion",
    subCategory: "clothing",
    sex: "male",
    colors: ["#a800b7", "#fefefe", "#4d0218"],
    condition: "barely used",
    description: [
      "Shrink Free: The casual short sleeve shirt is made of high-quality cotton and linen fabric with anti-shrink treatment, soft and comfortable,easy to iron, lightweight and cool,good breathability, take away the stuffiness, and give you a better wearing experience",
      "Unique Design: 1. We offer solid shirts in a variety of colors. 2. One chest pocket makes it easy to store small items. 3. Classic design--spread collar, button closure placket. 4. Extra button--Cotton linen short sleeve shirts are sewn with an eighth button, which you can use if needed",
      "Easy to Match: We offer you a wide range of sizes and colors to meet your different needs. Men's cotton linen shirt sizes are standard US sizes, easy to match with various bottoms. Please refer to the size chart image to choose the size that suits you",
      "Applicable Occasions: Mens casual cotton linen shirts are perfect for summer, vacation, beach, party, tropical, wedding, date and other daily wear. In everyday casual dressing, men's short sleeve shirt will always show off your charm. It is also an ideal gift for husbands, fathers, sons and friends",
      "Dry, laundry or handwash are available, low iron if necessary",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/910-JpfoTWL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91kaGoi+RzL._AC_SX679_.jpgg",
      "https://m.media-amazon.com/images/I/81ButF0N0yL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71JKyn+mpIL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91dJT8AZpyL._AC_SY879_.jpg",
    ],
    createdAt: "20-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Abuja",
      },
      {
        country: "Nigeria",
        city: "Lagos",
      },
    ],
    brand: "J.VER",
    keywords: ["fashion", "clothing", "chiffon", "male", "men"],
  },
  {
    id: 5,
    name: "COSIDRAM Mens Loafer Casual Shoes Comfort Lightweight Driving Travel Walking Shoes for Adult Male",
    price: 45500,
    seller: "COSIDRAM Store",
    rated: 4.2,
    category: "fashion",
    subCategory: "shoes",
    sex: "male",
    colors: ["#1e1e1e", "#00d492", "#0084d1"],
    condition: "brand new",
    description: [
      "Falechay womens crew neck crochet lace boho shirts is made with high-quality fabric. Soft, lightweight and comfortable to wear.",
      "Feature: Crewneck, Solid Color, Short Sleeve, Crochet Lace Edges, Pom Pom Swiss Dots Detailing, Loose Fit Tops, make you look more energetic.",
      "You can pair this fashion blouses with variety of coats, jacket, jeans, denim shorts, skirts, jeggings, sneakers or heels to complete casual look that's easy to love all season long.",
      "Occasion: The casual lace crochet shirts is perfect choice for your daily wear, outdoor activities, shopping, dates and any other occasions in Spring, Summer, Fall and Winter.",
      " Size: Please refer to the Size Chart before ordering, Hand/machine wash recommend, hang dry, do not bleach.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/71zpaQZdHXL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/71u1qaNXZ6L._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/91PSJ5fvFvL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/7195ENJLs8L._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/81VxZGvl1vL._AC_SY695_.jpg",
    ],
    createdAt: "12-03-2024",
    deliversTo: [
      {
        country: "United States",
        city: "California",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "COSIDRAM",
    keywords: ["fashion", "shoes", "men", "male"],
  },
  {
    id: 6,
    name: "Susanny Women's Closed Toe Rhinstone Wedding Low Heel Slingback Clear Kitten Heels,Adjustable Strap Pointed Toe Bow Pumps High Heeled Prom Dress Shoes",
    price: 50000,
    seller: "Susanny Store Store",
    rated: 4.5,
    category: "fashion",
    subCategory: "shoes",
    sex: "female",
    colors: ["#1e1e1e", "#00d492", "#0084d1"],
    condition: "brand new",
    description: [
      "Falechay womens crew neck crochet lace boho shirts is made with high-quality fabric. Soft, lightweight and comfortable to wear.",
      "Feature: Crewneck, Solid Color, Short Sleeve, Crochet Lace Edges, Pom Pom Swiss Dots Detailing, Loose Fit Tops, make you look more energetic.",
      "You can pair this fashion blouses with variety of coats, jacket, jeans, denim shorts, skirts, jeggings, sneakers or heels to complete casual look that's easy to love all season long.",
      "Occasion: The casual lace crochet shirts is perfect choice for your daily wear, outdoor activities, shopping, dates and any other occasions in Spring, Summer, Fall and Winter.",
      " Size: Please refer to the Size Chart before ordering, Hand/machine wash recommend, hang dry, do not bleach.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/71W8nBd4zjL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/61ylNw2usEL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/714uGWtJf-L._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/71HnVAVl36L._AC_SX695_.jpg",
      "https://m.media-amazon.com/images/I/61gb29pysKL._AC_SY695_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Canada",
        city: "Ottawa",
      },
      {
        country: "Nigeria",
        city: "Lagos",
      },
    ],
    brand: "Susanny",
    keywords: ["fashion", "shoes", "female", "women"],
  },
  {
    id: 7,
    name: "Women Fashion Handbags Purses Wallet Tote Shoulder Bag Casual Crossbody Bags, Top Handle Satchel Purse Set 4pcs for Ladies",
    price: 43000,
    seller: "Susanny Store Store",
    rated: 4.5,
    category: "fashion",
    subCategory: "bags",
    sex: "female",
    colors: ["#1e1e1e", "#00d492", "#0084d1"],
    condition: "brand new",
    description: [
      "Falechay womens crew neck crochet lace boho shirts is made with high-quality fabric. Soft, lightweight and comfortable to wear.",
      "Feature: Crewneck, Solid Color, Short Sleeve, Crochet Lace Edges, Pom Pom Swiss Dots Detailing, Loose Fit Tops, make you look more energetic.",
      "You can pair this fashion blouses with variety of coats, jacket, jeans, denim shorts, skirts, jeggings, sneakers or heels to complete casual look that's easy to love all season long.",
      "Occasion: The casual lace crochet shirts is perfect choice for your daily wear, outdoor activities, shopping, dates and any other occasions in Spring, Summer, Fall and Winter.",
      " Size: Please refer to the Size Chart before ordering, Hand/machine wash recommend, hang dry, do not bleach.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/41syz3CmJZL._AC_.jpg",
      "https://m.media-amazon.com/images/I/41HFFz3rqtL._AC_.jpg",
      "https://m.media-amazon.com/images/I/41ah6nozBoL._AC_.jpg",
      "https://m.media-amazon.com/images/I/41jMQUsrlqL._AC_.jpg",
      "https://m.media-amazon.com/images/I/41ANWMHaAlL._AC_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Port Harcourt",
      },
      {
        country: "Nigeria",
        city: "Kwara",
      },
    ],
    brand: "SYGWEEL",
    keywords: ["fashion", "bags", "female", "women"],
  },
  {
    id: 8,
    name: "Dasein Women Tassel Zipper Pocket Crossbody Bag Shoulder Purse Fashion Travel Bag with Multi Pockets",
    price: 25000,
    seller: "Dasein Store",
    rated: 4.4,
    category: "fashion",
    subCategory: "bags",
    sex: "female",
    colors: ["#1e1e1e", "#00d492", "#0084d1"],
    condition: "brand new",
    description: [
      "Falechay womens crew neck crochet lace boho shirts is made with high-quality fabric. Soft, lightweight and comfortable to wear.",
      "Feature: Crewneck, Solid Color, Short Sleeve, Crochet Lace Edges, Pom Pom Swiss Dots Detailing, Loose Fit Tops, make you look more energetic.",
      "You can pair this fashion blouses with variety of coats, jacket, jeans, denim shorts, skirts, jeggings, sneakers or heels to complete casual look that's easy to love all season long.",
      "Occasion: The casual lace crochet shirts is perfect choice for your daily wear, outdoor activities, shopping, dates and any other occasions in Spring, Summer, Fall and Winter.",
      " Size: Please refer to the Size Chart before ordering, Hand/machine wash recommend, hang dry, do not bleach.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/81ruTUv6u4L._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/81xi+EAY9QL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/71fRtuZAybL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/71ct5PUJTfL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/71oTGTM0JwL._AC_SY695_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Kaduna",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "Dasein",
    keywords: ["fashion", "bags", "female", "women"],
  },
  {
    id: 9,
    name: "CHAOREN Mens Belt Leather Ratchet Belt - Customizable Fit, Effortless Style (35mm)",
    price: 20000,
    seller: "CHAOREN Store",
    rated: 4.6,
    category: "fashion",
    subCategory: "accessories",
    sex: "male",
    colors: ["#1e1e1e", "#00d492", "#0084d1"],
    condition: "brand new",
    description: [
      "Customizable Fit: Achieve the perfect fit with our innovative rachette belt. Enjoy up to 1/5' adjustments, ensuring a comfortable and precise fit everywhere you go. The easily removable buckle allows you to cut the belt to your ideal size, making it tailored to your unique style. Sharp, sleek, and attractive - adjustable dress belt accentuates your personality with confidence!",
      "Effortless to Use: Experience the ultimate convenience with our brown leather belt. Simply slide it into the sliding buckle, pull it through, and the click-it buckle automatically locks in place. Releasing the belt is just as easy - gently push the lever on the side of the automatic buckle, and the lock snaps shut. Enjoy the seamless simplicity and smoothness of our ratchet belt design.",
      "Maximum Durability: Crafted with genuine leatheur men's belts for jeans present a refined and high-textured look. The high-density stylish buckle is not only lighter but also scratch-resistant, ensuring the belt's longevity and durability. Embrace the perfect blend of style and durability with CR!",
      "Great Choice: Elevate any occasion with the premium experience of CHAOREN. Our fashion design belt complements various outfits and events, making it a thoughtful and stylish belt choice for men. With luxury packaging as standard, make a lasting impression with a CR leather ratchet belt.",
      "Your Satisfaction Guaranteed: We are dedicated to ensuring our customers' satisfaction. If any issue arises with the product, rest assured that we are here to assist you promptly and without hesitation. Choose CHAOREN for a risk-free and enjoyable shopping experience.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/81hnOL0a49L._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/81vmm3BiuPL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71a3KWicrQL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91Xhb1iOcfL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81jiUsG5pSL._AC_SX679_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Lagos",
      },
      {
        country: "Nigeria",
        city: "Abuja",
      },
    ],
    brand: "Dasein",
    keywords: ["fashion", "belt", "accessories", "male", "men"],
  },
  {
    id: 10,
    name: "BURBERRY Sunglasses BE 4358 300185 Knight Black Yellow",
    price: 76000,
    seller: "STIN Store",
    rated: 4.6,
    category: "fashion",
    subCategory: "accessories",
    sex: "unisex",
    colors: ["#1e1e1e", "#00d492", "#0084d1"],
    condition: "brand new",
    description: [
      "Customizable Fit: Achieve the perfect fit with our innovative rachette belt. Enjoy up to 1/5' adjustments, ensuring a comfortable and precise fit everywhere you go. The easily removable buckle allows you to cut the belt to your ideal size, making it tailored to your unique style. Sharp, sleek, and attractive - adjustable dress belt accentuates your personality with confidence!",
      "Effortless to Use: Experience the ultimate convenience with our brown leather belt. Simply slide it into the sliding buckle, pull it through, and the click-it buckle automatically locks in place. Releasing the belt is just as easy - gently push the lever on the side of the automatic buckle, and the lock snaps shut. Enjoy the seamless simplicity and smoothness of our ratchet belt design.",
      "Maximum Durability: Crafted with genuine leatheur men's belts for jeans present a refined and high-textured look. The high-density stylish buckle is not only lighter but also scratch-resistant, ensuring the belt's longevity and durability. Embrace the perfect blend of style and durability with CR!",
      "Great Choice: Elevate any occasion with the premium experience of CHAOREN. Our fashion design belt complements various outfits and events, making it a thoughtful and stylish belt choice for men. With luxury packaging as standard, make a lasting impression with a CR leather ratchet belt.",
      "Your Satisfaction Guaranteed: We are dedicated to ensuring our customers' satisfaction. If any issue arises with the product, rest assured that we are here to assist you promptly and without hesitation. Choose CHAOREN for a risk-free and enjoyable shopping experience.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/41NXz6sVZ-L._AC_SX695_.jpg",
      "https://m.media-amazon.com/images/I/414cKtTqkSL._AC_SX695_.jpg",
      "https://m.media-amazon.com/images/I/41XRBOBpAOL._AC_SX695_.jpg",
      "https://m.media-amazon.com/images/I/41McbTxNg6L._AC_.jpg",
      "https://m.media-amazon.com/images/I/31KELgkFk8S._AC_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Benin",
      },
      {
        country: "Nigeria",
        city: "Lagos",
      },
    ],
    brand: "BURBERRY",
    keywords: [
      "fashion",
      "glasses",
      "shades",
      "accessories",
      "male",
      "men",
      "women",
      "unisex",
      "female",
      "burberry",
    ],
  },
  {
    id: 11,
    name: "Heart Pendant Gold Necklace for Women Moissanite Lab-Created Gem I Love You Wedding Anniversary Birthday Christmas Valentine Engagements Mothers Day Jewelry for Wife Her Girlfriend Mom Daughter",
    price: 15000,
    seller: "Hoaritik Store",
    rated: 4.6,
    category: "fashion",
    subCategory: "jewelry",
    sex: "female",
    colors: ["#fdc700", "#99a1af"],
    condition: "brand new",
    description: [
      "Falechay womens crew neck crochet lace boho shirts is made with high-quality fabric. Soft, lightweight and comfortable to wear.",
      "Feature: Crewneck, Solid Color, Short Sleeve, Crochet Lace Edges, Pom Pom Swiss Dots Detailing, Loose Fit Tops, make you look more energetic.",
      "You can pair this fashion blouses with variety of coats, jacket, jeans, denim shorts, skirts, jeggings, sneakers or heels to complete casual look that's easy to love all season long.",
      "Occasion: The casual lace crochet shirts is perfect choice for your daily wear, outdoor activities, shopping, dates and any other occasions in Spring, Summer, Fall and Winter.",
      " Size: Please refer to the Size Chart before ordering, Hand/machine wash recommend, hang dry, do not bleach.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/71LRXc62E8L._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/91iUNm9wc3L._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/61xbTa9RR8L._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/51W6ui4vryL._AC_.jpg",
      "https://m.media-amazon.com/images/I/71LP0YRIOvL._AC_SY695_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Canada",
        city: "Toronto",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "Hoaritik",
    keywords: ["fashion", "jewelry", "chain", "female", "women"],
  },
  {
    id: 12,
    name: "Basics 14-Piece High Carbon Stainless Steel Kitchen Knife Set with Sharpener and Pinewood Block, Black",
    price: 10000,
    seller: "Haboak Store",
    rated: 4.6,
    category: "kitchen",
    subCategory: "utensils",
    colors: ["#1e1e1e", "#fefefe"],
    condition: "brand new",
    description: [
      "14-piece knife set incluedes: (1) 8'' Chef's knife, (1) 8'' Slicing knife, (1) 8'' Bread knife, (1) 5.5'' Utility knife, (1) 3.5'' paring knife, (6) 4.5'' steak knife, (1) 8'' kitchen scissors, (1) 8''sharpener, (1) knife block",
      "High carbon stainless-steel blades for precision results and lasting sharpness",
      "Traditional, full tang, triple-riveted ergonomic knife handles offer pleasant weight for better balance and control",
      "Wash by hand only",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/810IjwSOWZL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/718J8nUNveL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71VkKj29ScL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/917efAlnvwL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/810Z0YRuKgL._AC_SL1500_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Kaduna",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "Plain wood",
    keywords: ["kitchen", "cutlery", "utensils", "knife"],
  },
  {
    id: 13,
    name: "Fullstar Vegetable Chopper and Spiralizer - Food Chopper with Container, Fruit Slicer, Kitchen Gadgets & Accessories, Home Essentials (4 in 1, White)",
    price: 15000,
    seller: "Haboak Store",
    rated: 4.6,
    category: "kitchen",
    subCategory: "gadgets",
    colors: ["#1e1e1e", "#fefefe"],
    condition: "brand new",
    description: [
      "14-piece knife set incluedes: (1) 8'' Chef's knife, (1) 8'' Slicing knife, (1) 8'' Bread knife, (1) 5.5'' Utility knife, (1) 3.5'' paring knife, (6) 4.5'' steak knife, (1) 8'' kitchen scissors, (1) 8''sharpener, (1) knife block",
      "High carbon stainless-steel blades for precision results and lasting sharpness",
      "Traditional, full tang, triple-riveted ergonomic knife handles offer pleasant weight for better balance and control",
      "Wash by hand only",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/81ThsIfz1RL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yjyT7qcSL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91WcrRj4nGL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91UyMhTh3ZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Exnpx5-LL._AC_SX679_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Kaduna",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "Keystar",
    keywords: ["kitchen", "gadget", "chopper", "fruit slicer"],
  },
  {
    id: 14,
    name: "Deiss PRO Citrus Lemon Zester & Cheese Grater — Parmesan Cheese, Lemon, Ginger, Garlic, Nutmeg, Chocolate, Vegetables, Fruits - Razor-Sharp Stainless Steel Blade + Protect Cover - Dishwasher Safe",
    price: 12000,
    seller: "Deiss Store",
    rated: 4.8,
    category: "kitchen",
    subCategory: "gadgets",
    colors: ["#1e1e1e", "#fefefe"],
    condition: "brand new",
    description: [
      "14-piece knife set incluedes: (1) 8'' Chef's knife, (1) 8'' Slicing knife, (1) 8'' Bread knife, (1) 5.5'' Utility knife, (1) 3.5'' paring knife, (6) 4.5'' steak knife, (1) 8'' kitchen scissors, (1) 8''sharpener, (1) knife block",
      "High carbon stainless-steel blades for precision results and lasting sharpness",
      "Traditional, full tang, triple-riveted ergonomic knife handles offer pleasant weight for better balance and control",
      "Wash by hand only",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/81Z1qETjFsL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/617twlhNpXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/817vIEf3OYL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/812kFGu-SOL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71S4DfQEwXL._AC_SL1500_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Kaduna",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "Deiss PRO",
    keywords: ["kitchen", "gadget", "chopper", "fruit slicer"],
  },
  {
    id: 15,
    name: "Non Stick Kitchen Cookware 8-Piece Set, Non-Induction, Includes Pots and Pans, Black",
    price: 17000,
    seller: "Selwa & sons Store",
    rated: 4.8,
    category: "kitchen",
    subCategory: "cookware",
    colors: ["#1e1e1e", "#fefefe"],
    condition: "brand new",
    description: [
      "14-piece knife set incluedes: (1) 8'' Chef's knife, (1) 8'' Slicing knife, (1) 8'' Bread knife, (1) 5.5'' Utility knife, (1) 3.5'' paring knife, (6) 4.5'' steak knife, (1) 8'' kitchen scissors, (1) 8''sharpener, (1) knife block",
      "High carbon stainless-steel blades for precision results and lasting sharpness",
      "Traditional, full tang, triple-riveted ergonomic knife handles offer pleasant weight for better balance and control",
      "Wash by hand only",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/71mDTOYtDSL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71hhHF4mNaL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/814PiSnvZzL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71kwZlXKc5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Cb5V8XP4L._AC_SX679_.jpg",
    ],
    createdAt: "18-04-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Abuja",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "Deiss PRO",
    keywords: ["kitchen", "cookware", "pots", "pans"],
  },
  {
    id: 16,
    name: "BENFEI HDMI to VGA 6 Feet Cable, Uni-Directional HDMI Computer to VGA Monitor Cable (Male to Male) Compatible for Computer, Desktop, Laptop, PC, Monitor, Projector, HDTV, Roku, Xbox",
    price: 10000,
    seller: "BENFEI Store",
    rated: 4.5,
    category: "electronics",
    subCategory: "television & video",
    colors: ["#1e1e1e", "#fefefe"],
    condition: "brand new",
    description: [
      "COMPACT DESIGN - The compact-designed portable Benfei HDMI to VGA adapter connects a computer, desktop, laptop, or other devices with HDMI port to a monitor, projector, HDTV, or other devices with VGA port; Tuck this lightweight gadget into your bag to do a business presentation with your laptop and projector, or extend your desktop screen to a monitor or TV;",
      "SUPERIOR STABILITY - Built-in advanced IC chip converts HDMI digital signal to VGA analog signal; ✅ It is NOT a bi-directional converter and cannot transmit signals from VGA to HDMI",
      "INCREDIBLE PERFORMANCE - The HDMI male to VGA Male cable supports resolutions up to 1920x1080@60Hz (1080p Full HD) including 720p, 1600x1200, 1280x1024 for high definition monitors or projectors; Gold plated HDMI connector resists corrosion and abrasion and improve the signal transmission performance;,  Molded strain relief increases cable durability",
      "BROAD COMPATIBILITY - The HDMI-VGA adapter is compatible with computer, pc, desktop, laptop, ultrabook, notebook, Chromebook, Raspberry Pi, Intel Nuc, Roku, PS3, Xbox One, Xbox 360, Wii U, Set Top Box, TV BOX, or other devices with HDMI port; ✅ NOT compatible with Blu-ray player and devices with low-power HDMI ports such as SONY PS4, Apple MacBook Pro with Retina Display, Mac mini, and Apple TV;",
      "18 MONTH WARRANTY - Exclusive Benfei Unconditional 18-month Warranty ensures long-time satisfaction of your purchase; Friendly and easy-to-reach customer service to solve your problems timely",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/71sA-0p4ECL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71zZVKeioCL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81QVDJumE7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71oi5Bw0SiL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ON+YCVcML._AC_SL1500_.jpg",
    ],
    createdAt: "18-03-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Kaduna",
      },
      {
        country: "Nigeria",
        city: "Enugu",
      },
    ],
    brand: "BENFEI",
    keywords: ["Laptop", "Monitor", "PC", "Projector", "Television", "HDMI"],
  },
  {
    id: 17,
    name: "100 inch Projector Screen and Stand,Portable Projector Screen 4K HD Rear Front Projection Screen with Carry Bag for Outdoor Indoor Home Theater Backyard Cinema Travel",
    price: 45000,
    seller: "Abdtech Store",
    rated: 4.4,
    category: "electronics",
    subCategory: "television & video",
    colors: ["#1e1e1e", "#fefefe"],
    sizes: ["100Inch", "120Inch"],
    condition: "fairly used",
    description: [
      "【Wrinkle Free Outdoor Movie Screen】With 100-inch Diagonal, 160° Wide Viewing Angle, Gain 1.1 and 16:9 aspect ratio, 100inch outdoor projector screen with stand has made of high-quality polyester & spandex material , thicker than other average screens. Projector screen with stand greatly offers sharper and brighter image quality. Screen has soft and smooth touch feeling,which make you more pleasure，not easy to be yellow, Meanwhile, supporting front and rear projection.",
      "【Unique Screen Edge Design】3-side black border adopt hollow design convenient for posts insertion. Outdoor projector screen will be greatly maintained itself flatness, no waves and wrinkles. When some breeze blows over and screen can’t easily be deflected. This design will increase its the whole screen's stability and benefit for fast installation. No any complicated process of fixing outdoor movie screen.",
      "【High-Quality Accessory】Outdoor movie screen with stand comes with several Lightweight aluminum poles.It don’t easily be rust or distorted. Deeper plastic joints can be perfectly insert into aluminum poles with a tight fit to avoid loose. Two oblong base with 4 fixed posts greatly make the stand very sturdy. Its base will take less rooms on its behind but meanwhile no lessen its stability.",
      "【Lightweight And Easy To Carry】Rear projector screen with stand has weight of 5.7 lbs. You can hold it on one hand or put travel bags on your shoulders, easy to carry in anywhere you want and pack away. It is very portable and takes less space.You can put it in the car trunks for travel. Better enjoy an exciting movie with 4k ultra HD home projector when at outdoor. Compatible indoor with outdoor use. Great gift ideas on Birthday, Fathers day, Valentine's Day, Christmas and so on.",
      "【Easy To Install Within 5 Mins】No screws, no strings,only several kinds of accessory, enough to fastly and firmly set it up. You don’t need to do research or buy for extra accessory. Two people work together can finish assembling within 5 mins. Great for rapidly transfer place with less time. If outdoor portable projector screen get dirty, you can wash it and then hang it up.",
    ],
    stock: 12,
    gallery: [
      "https://m.media-amazon.com/images/I/71RnPw+GhkL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/7124zZNlYqL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Db5uZ4snL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71DBHaKJAZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71tXNkh1wuL._AC_SX679_.jpg",
    ],
    createdAt: "15-02-2024",
    deliversTo: [
      {
        country: "Nigeria",
        city: "Kaduna",
      },
      {
        country: "Nigeria",
        city: "Kano",
      },
    ],
    brand: "Deiss PRO",
    keywords: ["Laptop", "Monitor", "PC", "Projector", "Television", "HDMI"],
  },
];

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and") // replace "&" with "and"
    .replace(/[\s\W-]+/g, "-"); // replace spaces and non-word chars with "-"
}

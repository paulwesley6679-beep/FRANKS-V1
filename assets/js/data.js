// data.js

// Top-level categories
const categories = {
   men: {
     name: "Men",
     subcategories: [
        "T-shirts (Polo)",
        "Shirts",
        "Hoddie",
        "Plain Trousers",
        "Chinos",
        "Track Pants",
        "Baggies",
        "Jeans",
        "Cufflinks",
        "Others"
     ]
   },
   women: {
    name: "Women",
    subcategories: [
       "Crop Tops",
       "Gowns",
       "Blouses",
       "Trousers / Shorts",
       "Skirts",
       "Dresses",
       "Accessories",
       "Others"
    ]
   },
   thrifts: {
    name: "Thrifts",
    subcategories: [
        "Men Thrifts",
        "Women Thrifts",
        "Mix",
        "Vintage",
        "Others"
    ]
   }
};
// Sample products (for marketplace & trending)
const products = [
    {
        id: 1,
        name: "Classic Polo T-shirts",
        category: "men",
        subcategories: "T-shirts (polo)",
        price: 4500,
        image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
        whatsapp: "https://wa.me/2348012345678"
    },
    {
        id: 2,
        name: "Denim Jeans",
        category: "men",
        subcategories: "Jeans",
        price:3500,
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
        whatsapp: "https://wa.me/2348012345678"
    },
    {
        id: 3,
        name: "Crop Top Summer",
        category: "women",
        subcategories: "Crop Tops",
        price: 3500,
        image: "https://images.pexels.com/photos/1002648/pexels-photo-1002648.jpeg",
        whatsapp: "https://wa.me/2348012345678"
    },
    {
        id: 4,
        name: "Elegants Gowns",
        category: "women",
        subcategories: "Gowns",
        price: "12000",
        image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
        whatsapp: "https://wa.me/2348012345678"
    },
    {
        id: 5,
        name: "Vintage Thrifts Jacket",
        category: "thrifts",
        subcategories: "vintage",
        price: 5000,
        image: "https://images.pexels.com/photo/2983464/pexels-photo-2983464.jpeg",
        whatsapp: "https://wa.me/2348012345678"
    }
];

//Trending products (subset of products)
const trendingProducts = [
    products[0],
    products[3],
    products[4]
];
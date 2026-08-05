import {apple,
  banana,
  orange,
  mango,
  grapes,
  tomato,
  potato,
  onion,
  carrot,
  spinach,
  milk,
  butter,
  cheese,
  curd,
  bread,
  cookies,
  coffee,
  orangeJuice,
  chips,
  chocolate,
  rice,
  wheatFlour,
  sunflowerOil,
  turmeric,
  almonds,} from "../assets/products";
const products = [
  // Fruits
  {
    id:1,
    name: "Apple",
    category: "Fruits",
    price: 120,
    stock: 25,
    image: apple,
    description: "Fresh and juicy red apples."
  },
  {
    id:2,
    name: "Banana",
    category: "Fruits",
    price: 60,
    stock: 40,
    image: banana,
    description: "Naturally sweet bananas rich in potassium."
  },
  {
    id:3,
    name: "Orange",
    category: "Fruits",
    price: 90,
    stock: 30,
    image: orange,
    description: "Fresh juicy oranges full of Vitamin C."
  },
  {
    id:4,
    name: "Mango",
    category: "Fruits",
    price: 150,
    stock: 20,
    image: mango,
    description: "Sweet and delicious Alphonso mangoes."
  },
  {
    id:5,
    name: "Grapes",
    category: "Fruits",
    price: 110,
    stock: 18,
    image: grapes,
    description: "Fresh seedless green grapes."
  },

  // Vegetables
  {
    id:6,
    name: "Tomato",
    category: "Vegetables",
    price: 40,
    stock: 50,
    image: tomato,
    description: "Fresh farm tomatoes."
  },
  {
    id:7,
    name: "Potato",
    category: "Vegetables",
    price: 35,
    stock: 60,
    image: potato,
    description: "Premium quality potatoes."
  },
  {
    id:8,
    name: "Onion",
    category: "Vegetables",
    price: 45,
    stock: 55,
    image: onion,
    description: "Fresh onions for everyday cooking."
  },
  {
    id:9,
    name: "Carrot",
    category: "Vegetables",
    price: 50,
    stock: 30,
    image: carrot,
    description: "Organic carrots rich in nutrients."
  },
  {
    id:10,
    name: "Spinach",
    category: "Vegetables",
    price: 30,
    stock: 25,
    image: spinach,
    description: "Fresh green spinach leaves."
  },

  // Dairy
  {
    id:11,
    name: "Milk",
    category: "Dairy",
    price: 55,
    stock: 40,
    image: milk,
    description: "Fresh cow milk."
  },
  {
    id:12,
    name: "Butter",
    category: "Dairy",
    price: 80,
    stock: 18,
    image: butter,
    description: "Creamy salted butter."
  },
  {
    id:13,
    name: "Cheese",
    category: "Dairy",
    price: 180,
    stock: 15,
    image: cheese,
    description: "Premium cheese cubes."
  },
  {
    id:14,
    name: "Curd",
    category: "Dairy",
    price: 45,
    stock: 25,
    image: curd,
    description: "Healthy fresh curd."
  },

  // Bakery
  {
    id:15,
    name: "Bread",
    category: "Bakery",
    price: 45,
    stock: 30,
    image: bread,
    description: "Soft whole wheat bread."
  },
  {
    id:16,
    name: "Cookies",
    category: "Bakery",
    price: 120,
    stock: 20,
    image: cookies,
    description: "Crunchy chocolate cookies."
  },

  // Beverages
  {
    id:17,
    name: "Coffee",
    category: "Beverages",
    price: 250,
    stock: 18,
    image: coffee,
    description: "Premium instant coffee."
  },
  {
    id:18,
    name: "Orange Juice",
    category: "Beverages",
    price: 90,
    stock: 22,
    image: orangeJuice,
    description: "Fresh orange juice."
  },

  // Snacks
  {
    id:19,
    name: "Potato Chips",
    category: "Snacks",
    price: 30,
    stock: 50,
    image: chips,
    description: "Crispy salted potato chips."
  },
  {
    id:20,
    name: "Chocolate",
    category: "Snacks",
    price: 80,
    stock: 35,
    image: chocolate,
    description: "Delicious milk chocolate."
  },

  // Rice & Grains
  {
    id:21,
    name: "Rice",
    category: "Rice & Grains",
    price: 650,
    stock: 15,
    image: rice,
    description: "Premium basmati rice."
  },
  {
    id:22,
    name: "Wheat Flour",
    category: "Rice & Grains",
    price: 320,
    stock: 18,
    image: wheatFlour,
    description: "Whole wheat flour."
  },

  // Oils & Spices
  {
    id:23,
    name: "Sunflower Oil",
    category: "Oils & Spices",
    price: 180,
    stock: 20,
    image: sunflowerOil,
    description: "Refined sunflower cooking oil."
  },
  {
    id:24,
    name: "Turmeric Powder",
    category: "Oils & Spices",
    price: 65,
    stock: 30,
    image: turmeric,
    description: "Pure turmeric powder."
  },

  // Dry Fruits
  {
    id:25,
    name: "Almonds",
    category: "Dry Fruits",
    price: 550,
    stock: 12,
    image: almonds,
    description: "Premium quality almonds."
  }
];

export default products;
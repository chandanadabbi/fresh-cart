import products from "./src/data/productsData.js";

const API =
  "https://6a69c9e4b2789286ad70fb33.mockapi.io/api/products";

async function uploadProducts() {
  for (const product of products) {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      console.log("Uploaded:", data.name);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("All Products Uploaded");
}

uploadProducts();
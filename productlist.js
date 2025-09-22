  const products = [
    { name: "Smartphone", category: "electronics", price: 500, rating: 4.5, img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg" },
    { name: "Laptop", category: "electronics", price: 900, rating: 4.8, img: "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?cs=srgb&dl=pexels-pixabay-40185.jpg&fm=jpg" },
    { name: "T-Shirt", category: "clothing", price: 20, rating: 4.2, img: "https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg" },
    { name: "Headphones", category: "electronics", price: 80, rating: 4.4, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Watch", category: "accessories", price: 120, rating: 4.6, img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw11e7d01c/images/Titan/Catalog/1825SL15_2.jpg?sw=600&sh=600" },
    { name: "Trouser", category: "clothing", price: 200, rating: 4.1, img: "https://www.powersutra.co/cdn/shop/files/TR229_2.jpg?v=1754651767" },
    { name: "chain", category: "accessories", price: 100, rating: 4.7, img: "https://m.media-amazon.com/images/I/61Su4BqpDGL._SY695_.jpg" }

  ];

  const productContainer = document.getElementById("productContainer");

  function displayProducts(productList) {
    productContainer.innerHTML = "";
    productList.forEach(p => {
      const productCard = document.createElement("div");
      productCard.className = "product";
      productCard.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <p>⭐ ${p.rating}</p>
      `;
      productContainer.appendChild(productCard);
    });
  }
function filterProducts() {
    const category = document.getElementById("categoryFilter").value;
    let filtered = products;
    if (category !== "all") {
      filtered = products.filter(p => p.category === category);
    }
    displayProducts(filtered);
  }

  function sortProducts() {
    const sortValue = document.getElementById("sortFilter").value;
    let sortedProducts = [...products];

    if (sortValue === "priceLow") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "priceHigh") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "ratingHigh") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(sortedProducts);
  }
  displayProducts(products);

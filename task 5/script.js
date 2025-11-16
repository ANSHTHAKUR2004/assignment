// Product array with categories
const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Jacket", category: "clothing" },
  { name: "Novel", category: "books" },
  { name: "Textbook", category: "books" },
  { name: "Sneakers", category: "clothing" },
  { name: "Tablet", category: "electronics" }
];

const productList = document.getElementById("products");
const allBtn = document.getElementById("allBtn");
const electronicsBtn = document.getElementById("electronicsBtn");
const clothingBtn = document.getElementById("clothingBtn");
const searchBox = document.getElementById("searchBox");

// Function to display products
function displayProducts(filteredProducts) {
  productList.innerHTML = ""; // clear list
  filteredProducts.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} (${product.category})`;
    productList.appendChild(li);
  });
}

// Initial display
displayProducts(products);

// Button filters
allBtn.addEventListener("click", () => displayProducts(products));
electronicsBtn.addEventListener("click", () => {
  const filtered = products.filter(p => p.category === "electronics");
  displayProducts(filtered);
});
clothingBtn.addEventListener("click", () => {
  const filtered = products.filter(p => p.category === "clothing");
  displayProducts(filtered);
});

// Bonus: Search filter
searchBox.addEventListener("input", () => {
  const keyword = searchBox.value.toLowerCase();
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(keyword) || 
    p.category.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});

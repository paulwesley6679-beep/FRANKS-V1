// seller.js

document.addEventListener("DOMContentLoaded", function () {
    const categorySelect = document.getElementById("category");
    const subcategorySelect = document.getElementById("subcategory");
    const sellerForm = document.getElementById("seller-form");
    const sellerProductGrid = document.getElementById("seller-products");

    function updateSubcategories(categoryKey) {
        subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';

        if (!categories[categoryKey]) return;

        categories[categoryKey].subcategories.forEach(sub => {
            const option = document.createElement("option");
            option.value = sub;
            option.textContent = sub;
            subcategorySelect.appendChild(option);
        });
    }

    categorySelect.addEventListener("change",function () {
        updateSubcategories(this.value);
    });

    function createProductCard(Product) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${Product.image}" alt="{product.name}">
        <div class="card-content">
          <h3>${Product.name}</h3>
          <p>₦${Product.price}</p>
          <a href="${Product.whatsapp}" target="_blank" class="btn primary">
          Buy on WhatsApp
          </a>
          </div>
          `;

          return card;
    }

    sellerForm.addEventListener("submit",function (e) {
        e.preventDefault();

        const name = document.getElementById("product-name").value.trim();
        const category = categorySelect.value;
        const subcategory = subcategorySelect.value;
        const imageUrl = document.getElementById("image-url").value;

        const price = document.getElementById("price").value.trim();
        const whatsapp = document.getElementById("whatsapp-link").value.trim();

        if (!name || !category || !subcategory || !price || !imageUrl || !whatsapp) {
            alert("Please fill in all fields.");
            return;
        }

        const newProduct = {
            id: products.length + 1,
            name: name,
            category: category,
            subcategory: subcategory,
            price: Number(price),
            image: imageUrl,
            whatsapp: whatsapp
        };

        products.push(newProduct);

        const card = createProductCard(newProduct);
        sellerProductGrid.appendChild(card);

        sellerForm.requestFullscreen();
        subcategorySelect.innerHTML = '<option value="">Select subcategory</option>';

        alert("Product uploaded successfully!");
    });
});
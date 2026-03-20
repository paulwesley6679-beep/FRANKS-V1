// marketplace.js
// marketplace.js
document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".top-categories .category-btn");
    const subcategoryContainer = document.getElementById("subcategories");
    const productGrid = document.getElementById("product-grid");
    const trendingGrid = document.getElementById("trending-grid");

    let selectedCategory = null;
    let selectedSubcategory = null;

    /* ==============================
       Render Subcategories
       ============================== */
    function renderSubcategories(categoryKey) {
        if (!subcategoryContainer) return;
        subcategoryContainer.innerHTML = "";

        if (!categories[categoryKey]) return;

        categories[categoryKey].subcategories.forEach(sub => {
            const button = document.createElement("button");
            button.classList.add("category-btn");
            button.textContent = sub;
            button.setAttribute("aria-pressed", "false");

            button.addEventListener("click", () => {
                // Reset previous subcategory buttons
                document.querySelectorAll("#subcategories .category-btn")
                    .forEach(btn => btn.setAttribute("aria-pressed", "false"));

                button.setAttribute("aria-pressed", "true");
                selectedSubcategory = sub;

                renderProducts();
            });

            subcategoryContainer.appendChild(button);
        });
    }

    /* ===============================
       Render Products
       =============================== */
    function renderProducts() {
        if (!productGrid) return;
        productGrid.innerHTML = "";

        const filteredProducts = products.filter(product => {
            const matchCategory = selectedCategory ? product.category === selectedCategory : true;
            const matchSubcategory = selectedSubcategory ? product.subcategory === selectedSubcategory : true;
            return matchCategory && matchSubcategory;
        });

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = "<p>No products available yet.</p>";
            return;
        }

        filteredProducts.forEach(product => {
            const card = createProductCard(product);
            productGrid.appendChild(card);
        });
    }

    /* ===============================
       Render Trending
       =============================== */
    function renderTrending() {
        if (!trendingGrid) return;
        trendingGrid.innerHTML = "";

        const shuffled = shuffleArray(trendingProducts);

        shuffled.forEach(product => {
            const card = createProductCard(product);
            trendingGrid.appendChild(card);
        });
    }

    /* ===============================
       Create Product Card
       =============================== */
    function createProductCard(product) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>₦${product.price}</p>
                <a href="${product.whatsapp}" target="_blank" class="btn primary">
                    Buy on WhatsApp
                </a>
            </div>
        `;

        return card;
    }

    /* ===============================
       Category Button Click
       =============================== */
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Reset all category buttons
            categoryButtons.forEach(btn => btn.setAttribute("aria-pressed", "false"));

            button.setAttribute("aria-pressed", "true");

            selectedCategory = button.dataset.category;
            selectedSubcategory = null;

            renderSubcategories(selectedCategory);
            renderProducts();
        });
    });

    /* ===============================
       Initial Render
       =============================== */
    renderTrending();
    renderProducts();
});


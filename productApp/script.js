document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    // API-dən məhsulları yükləyirik
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.price} USD</p>
                    <div class="actions">
                        <button onclick="viewDetails(${product.id})">Details</button>
                        <button onclick="addToFavorites(${product.id})">❤️</button>
                        <button onclick="addToCart(${product.id}, ${product.price})">Add to Basket</button>
                    </div>
                `;

                productList.appendChild(productCard);
            });
        });
});

function viewDetails(productId) {
    // Məhsulun detalları üçün başqa səhifəyə yönləndiririk
    window.location.href = `product.html?id=${productId}`;
}

function addToFavorites(productId) {
    // Məhsulu sevimlilərə əlavə etmək üçün funksionallıq
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(productId)) {
        favorites.push(productId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function addToCart(productId, price) {
    // Məhsulu səbətə əlavə etmək üçün funksionallıq
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id: productId, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
}

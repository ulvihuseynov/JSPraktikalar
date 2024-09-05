document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favorites-list');

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>You have no favorite products yet.</p>';
    } else {
        favorites.forEach(productId => {
            // Hər bir favorit məhsul üçün API-dən məlumatları alırıq
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(response => response.json())
                .then(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';

                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>${product.price} USD</p>
                        <button onclick="removeFromFavorites(${product.id})">Remove</button>
                        <button onclick="viewDetails(${product.id})">Details</button>
                    `;

                    favoritesList.appendChild(productCard);
                });
        });
    }
});

function removeFromFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    location.reload(); // Səhifəni yeniləyirik
}

function viewDetails(productId) {
    window.location.href = `product.html?id=${productId}`;
}

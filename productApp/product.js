document.addEventListener('DOMContentLoaded', () => {
    const productDetailsContainer = document.getElementById('product-details');

    // URL-dən məhsulun ID-sini alırıq
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        // API-dən məhsulun məlumatlarını alırıq
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                const productDetails = document.createElement('div');
                productDetails.className = 'product-details';

                productDetails.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h1>${product.title}</h1>
                    <p>${product.description}</p>
                    <p>Price: ${product.price} USD</p>
                    <button onclick="addToCart(${product.id}, ${product.price})">Add to Basket</button>
                `;

                productDetailsContainer.appendChild(productDetails);
            });
    } else {
        productDetailsContainer.innerHTML = '<p>Product not found.</p>';
    }
});

function addToCart(productId, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id: productId, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to the cart!');
}

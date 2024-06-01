// Dates for the footer
const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

let modif = new Date(document.lastModified).toLocaleString('en-us');
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: <span>${modif}</span>`;

// Populating the Product Name
document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 'fc-1888', 
        name: 'flux capacitor', 
        avg_rating: 4.5 },

        { id: 'fc-2050', 
        name: 'power laces', 
        avg_rating: 4.7 },

        { id: 'fs-1987', 
        name: 'time circuits', 
        avg_rating: 3.5 },

        { id: 'ac-2000', name: 
        'low voltage reactor', 
        avg_rating: 3.9 },

        { id: 'jj-1969', name: 
        'warp equalizer', 
        avg_rating: 5.0 }
    ];

    const productName = document.getElementById('naming-product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productName.appendChild(option);
    });

});

function amountReview() {
    const numReviews = document.querySelector(".reviewCounter");
    let reviewCounter = localStorage.getItem('.reviewCounter') || 0;
    reviewCounter++;
    localStorage.getItem('reviewCounter', reviewCounter);
    numReviews.textContent = reviewCounter;
};
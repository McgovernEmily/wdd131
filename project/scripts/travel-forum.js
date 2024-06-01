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
        { id: 'ct-01', 
        name: 'France', 
        avg_rating: 4.5 },

        { id: 'ct-02', 
        name: 'USA', 
        avg_rating: 4.7 },

        { id: 'ct-03', 
        name: 'Italy', 
        avg_rating: 3.5 },

        { id: 'ct-04', name: 
        'Switzerland', 
        avg_rating: 3.9 },

        { id: 'ct-05', name: 
        'England', 
        avg_rating: 5.0 },

        { id: 'ct-06', name: 
        'Maldives', 
        avg_rating: 5.0 },

        { id: 'ct-07', name: 
        'Turks & Caicos', 
        avg_rating: 5.0 },

        { id: 'ct-08', name: 
        'Japan', 
        avg_rating: 5.0 },

        { id: 'ct-09', name: 
        'Thailand', 
        avg_rating: 5.0 },

        { id: 'ct-10', name: 
        'Costa Rica', 
        avg_rating: 5.0 },

        { id: 'ct-11', name: 
        'New Zealand', 
        avg_rating: 5.0 },

        { id: 'ct-12', name: 
        'Canada', 
        avg_rating: 5.0 },

        { id: 'ct-13', name: 
        'Australia', 
        avg_rating: 5.0 },
        
        { id: 'ct-14', name: 
        'Netherlands', 
        avg_rating: 5.0 },

        { id: 'ct-15', name: 
        'Spain', 
        avg_rating: 5.0 },

    ];

    const productName = document.getElementById('naming-product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productName.appendChild(option);
    });

});
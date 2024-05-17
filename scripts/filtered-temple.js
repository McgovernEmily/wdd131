// Finding the dates.
const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

let modif = new Date(document.lastModified).toLocaleString('en-us');
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: <span>${modif}</span>`;

// This is my nav bar.
const hamButton = document.querySelector('#al');
const nav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	nav.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Arrays of temples.
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, USA",
        dedicated: "1919, November 27",
        area: 47224,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Frederiksberg, Hovedstaden, Denmark",
        dedicated: "2004, May 23",
        area: 25000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-278232-wallpaper.jpg"
    }
  ];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.temple-container');
    const homeLink = document.getElementsByClassName('.home');
    const oldLink = document.getElementsByClassName('.old');
    const newLink = document.getElementsByClassName('.new');
    const largeLink = document.getElementsByClassName('.large');
    const smallLink = document.getElementsByClassName('.small');


    const displayTemples = (filteredTemples) => {
        container.innerHTML = ''; // Clear existing content
        filteredTemples.forEach(temple => {
            const figure = document.createElement('figure');
            figure.classList.add('hover');

            const img = document.createElement('img');
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";
            figure.appendChild(img);

            const figcaption = document.createElement('figcaption');
            figcaption.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${formatDate(temple.dedicated)}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            `;
            figure.appendChild(figcaption);

            container.appendChild(figure);
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        return `${year}, ${month}, ${day}`;
    };

    homeLink.addEventListener('click', () => displayTemples(temples));

    oldLink.addEventListener('click', () => {
        const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        displayTemples(oldTemples);
    });

    newLink.addEventListener('click', () => {
        const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        displayTemples(newTemples);
    });

    largeLink.addEventListener('click', () => {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
    });

    smallLink.addEventListener('click', () => {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
    });

    // Display all temples by default when the page loads
    displayTemples(temples);
});

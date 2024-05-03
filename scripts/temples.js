const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

let modif = new Date(document.lastModified).toLocaleString('en-us');
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: <span>${modif}</span>`;

const hamButton = document.querySelector('#hamburger-x');
const navigation = document.querySelector('#top-nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
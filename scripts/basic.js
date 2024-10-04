const lastModified = document.querySelector("#lastModified");
const copyright = document.querySelector("#copyright");
const people = document.querySelector("#people");

const today = new Date();

lastModified.innerHTML = `last modified: <span class="highlight">${document.lastModified}</span>`;

copyright.innerHTML = `&copy <span class="highlight">${today.getFullYear()}</span> Eldon Bird`;

people.innerHTML = `people: <span class="highlight">${10000000000}</span>`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {

    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const mainHeader = document.querySelector('main h1');
const menuButton = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const box = document.querySelector('.grid-container');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Gilbert Arizona United States",
    location: "Arizona, United States",
    dedicated: "2014, March, 2",
    area: 85326,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/320x200/gilbert-arizona-mormon-temple-1172202-wallpaper.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/320x200/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    templeName: "Bogotá, Distrito Capital, Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/320x200/bogota-colombia-mormon-temple-856490-wallpaper.jpg"
  }
];

function getYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0].trim());
}

function displayTemples(filteredTemples) {
    box.innerHTML = "";

    filteredTemples.forEach((temple, index) => {
        const section = document.createElement('section');
        const h3 = document.createElement('h3');
        const location = document.createElement('p');
        const dedicated = document.createElement('p');
        const area = document.createElement('p');
        const img = document.createElement('img');

        h3.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
        
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        if (index === 0) {
            img.setAttribute("fetchpriority", "high");
        } else {
            img.setAttribute("loading", "lazy");
        }

        section.classList.add('card');
        section.appendChild(h3);
        section.appendChild(location);
        section.appendChild(dedicated);
        section.appendChild(area);
        section.appendChild(img);

        box.appendChild(section);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeader.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeader.textContent = "Old Temples";
    const oldTemples = temples.filter(temple => getYear(temple.dedicated) < 1900);
    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeader.textContent = "New Temples";
    const newTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeader.textContent = "Large Temples";
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeader.textContent = "Small Temples";
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});
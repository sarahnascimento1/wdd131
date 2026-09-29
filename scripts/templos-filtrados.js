const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

document.getElementById("ultimaModificacao").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navegacao = document.querySelector('.navegacao');

hamButton.addEventListener('click', () => {
    navegacao.classList.toggle('open');
    hamButton.classList.toggle('open');
});

function toggleActive(element) {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
    });

    element.classList.add("active")
}

const temples = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, EUA",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, EUA",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Templo de Auckland",
        localizacao: "Auckland, Nova Zelândia",
        consagracao: "2025-05-13",
        area: 45456, 
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg"
    },
    {
        nomeDoTemplo: "Templo de Montreal, Canadá",
        localizacao: "Montreal, Quebec", 
        consagracao: "2000-06-04",
        area: 11550, 
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
    },
    {
        nomeDoTemplo: "Templo de Gilbert, Arizona",
        localizacao: "Gilbert, Arizona - EUA",
        consagracao: "2010-11-13",
        area: 85326,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
    }
    
];

const oldCutoffDate = new Date('1950-01-01');
const newCutoffDate = new Date('2000-01-01');
const largeArea = 90000;
const smallArea = 10000;

function setFiler(seletor, filterFunction) {
    const element = document.querySelector(seletor);

    element.addEventListener('click', () => {
        toggleActive(element);
        createTempleCard(temples.filter(filterFunction));
    });
}

setFiler('#all', () => temples);
setFiler('#old', temple => new Date(temple.consagracao) < oldCutoffDate);
setFiler('#new', temple => new Date(temple.consagracao) >= newCutoffDate);
setFiler('#large', temple => temple.area > largeArea);
setFiler('#small', temple => temple.area < smallArea); 


function createTempleCard(templos) {
    document.querySelector('.fotos').innerHTML = '';

    templos.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.nomeDoTemplo;
        location.innerHTML = `<span class="label">Localizacao:</span> ${temple.localizacao}`;
        dedication.innerHTML = `<span class="label">Dedicado:</span> ${temple.consagracao}`;
        area.innerHTML = `<span class="label">Tamanho:</span> ${temple.area} pés²`;
        img.setAttribute("src", temple.urlDaImagem);
        img.setAttribute("alt", `Templo ${temple.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".fotos").appendChild(card);
    });
}

createTempleCard(temples);



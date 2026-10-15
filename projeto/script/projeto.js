const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observer.unobserve(entrada.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.foto1, .foto2, .gato, .brincando, .pastor').forEach(img => observer.observe(img));

const alimentacao = [
    {
        titulo: " 🐕Onívoros oportunistas",
        descricao: "Diferente dos gatos, os cães são onívoros.Eles se adaptaram ao longo de milhares de anos para digerir amido, vegetais e frutas, além de carne."
    },

    {
        titulo: "🐱Carnívoros estritos:",
        descricao: "Os gatos são carnívoros obrigatórios e não sobrevivem sem carne. Eles precisam de nutrientes específicos encontrados apenas na proteína animal, como a taurina (essencial para o coração e a visão) e o ácido araquidônico."
    },

    {
        titulo: "🍖 Saciedade inexistente:",
        descricao: " Na natureza, os lobos caçam e comem o máximo que podem porque não sabem quando será a próxima refeição. Os cães herdaram esse instinto e, por isso, a maioria comeria até passar mal se o tutor deixasse ração livre."

    },

    {
        titulo: "Paladar limitado, olfato exigente 🐱",
        descricao: "Os gatos possuem apenas cerca de 470 papilas gustativas (contra 9.000 dos humanos). Em compensação, o apetite deles é totalmente guiado pelo olfato: se o gato estiver com o nariz entupido, ele simplesmente recusa a comida."
    },

    {
        titulo: "Comedores de petiscos 🐱",
        descricao: "O estômago de um gato é do tamanho de uma bola de pingue-pongue. Na natureza, eles caçam várias pequenas presas ao dia, e por isso preferem comer pequenas porções de 10 a 20 vezes ao longo do dia e da noite."

    },

    {
        titulo: "Mastigar é opcional 🐕",
        descricao: " Os cães têm dentes feitos para rasgar e triturar, mas o sistema digestivo deles foi projetado para engolir grandes pedaços de uma vez. O estômago canino possui um ácido altamente concentrado capaz de dissolver pedaços grandes de comida e até ossos adequados rapidamente."
    },


];

const botao = document.querySelector("#botao-curiosidade");
const texto = document.querySelector("#curiosidade");

function mostrarCuriosidade() {
    const numeroAleatorio = Math.floor(Math.random() * alimentacao.length);
    const curiosidade = alimentacao[numeroAleatorio];

    texto.innerHTML = `
        <strong>${curiosidade.titulo}</strong>
        <span>${curiosidade.descricao}</span>
    
    `;
}

botao?.addEventListener("click", mostrarCuriosidade);


const botoesFavoritos = document.querySelectorAll(".favorito");

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const listaFavoritos = document.getElementById("lista-favoritos");

function salvarFavoritos() {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function atualizarBotao(botao, estaFavoritado) {
    const texto = botao.querySelector("span");

    texto.textContent = estaFavoritado
        ? "Remover dos favoritos"
        : "Adicione aos Favoritos";

    botao.setAttribute("aria-pressed", estaFavoritado);
}

botoesFavoritos.forEach((botao) => {
    const produto = botao.closest("[data-id]");
    const id = produto.dataset.id;

    const estaFavoritado = () => favoritos.some((item) => item.id === id);

    atualizarBotao(botao, estaFavoritado());

    botao.addEventListener("click", () => {
        if (estaFavoritado()) {
            favoritos = favoritos.filter((item) => item.id !== id);
        } else {
            favoritos.push({
                id: id,
                nome: produto.dataset.nome
                || produto.querySelector("img")?.alt
                || id,
                imagem: produto.querySelector("img")?.getAttribute("src") || ""
            });
        }

        salvarFavoritos();
        atualizarBotao(botao, estaFavoritado());
    });
});

function mostrarFavoritos() {
    listaFavoritos.innerHTML = favoritos.map((f) => `
        <article class="vacina-salva">
            ${f.imagem ? `<img src="${f.imagem}" alt="${f.nome}">` : ""}
            <p>${f.nome}</p>
            <button data-id="${f.id}">Remover</button>
        </article>`).join("") || "Nenhum favorito adicionado ainda.";
}

if (listaFavoritos) {
    mostrarFavoritos();

    listaFavoritos.addEventListener("click", (e) => {
        if (!e.target.matches("button")) return;
        favoritos = favoritos.filter((f) => f.id !== e.target.dataset.id);
        salvarFavoritos();
        mostrarFavoritos();
    });
}
const formVacina = document.querySelector(".formulario");
const listaVacinas = document.getElementById("lista-vacinas");
const vacinas = JSON.parse(localStorage.getItem("vacinas")) || [];

const salvar = () => localStorage.setItem("vacinas", JSON.stringify(vacinas));
const formatarData = (d) => d.split("-").reverse().join("/");

function mostrarVacinas() {
    listaVacinas.innerHTML = vacinas.map((v, i) => `
        <article class="vacina-salva">
            <p>Pet: ${v.nomePet} (${v.especie})</p>
            <p>Vacina: ${v.vacina}</p>
            <p>Aplicação: ${formatarData(v.dataAplicacao)}</p>
            <p>Próxima dose: ${formatarData(v.proximaDose)}</p>
            <button data-indice="${i}">Remover</button>
        </article>`).join("") || "Nenhuma vacina registrada ainda.";
}

formVacina?.addEventListener("submit", (e) => {
    e.preventDefault();
    vacinas.push(Object.fromEntries(new FormData(formVacina)));
    salvar();
    location.href = "favoritos.html";
});

if (listaVacinas) {
    mostrarVacinas();

    listaVacinas.addEventListener("click", (e) => {
        if (!e.target.matches("button")) return;
        vacinas.splice(e.target.dataset.indice, 1);
        salvar();
        mostrarVacinas();
    });
}


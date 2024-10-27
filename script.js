const characters = [
    {
        name: "Darth Vader",
        image: "img/vader.png", // caminho relativo para a imagem de Vader
        bio: "Darth Vader, anteriormente conhecido como Anakin Skywalker, é um dos personagens mais icônicos da saga Star Wars. Ele foi um Jedi que se tornou um Lorde Sith.",
        species: "Humano",
        affiliation: "Império Galáctico"
    },
    {
        name: "Luke Skywalker",
        image: "img/skywalker.png", // caminho relativo para a imagem de Luke
        bio: "Luke Skywalker é um dos principais heróis da saga Star Wars e um dos Jedi mais poderosos. Ele lutou contra o Império Galáctico e se tornou um símbolo da esperança.",
        species: "Humano",
        affiliation: "Aliança Rebelde"
    },
    {
        name: "Leia Organa",
        image: "img/leia.png", // caminho relativo para a imagem de Leia
        bio: "Princesa Leia Organa é uma líder da Aliança Rebelde e irmã de Luke Skywalker. Ela é uma lutadora destemida e uma estrategista habilidosa.",
        species: "Humano",
        affiliation: "Aliança Rebelde"
    }
];

let currentIndex = 0;

function updateCharacter() {
    const character = characters[currentIndex];
    document.getElementById("characterName").innerText = character.name;
    document.getElementById("characterImage").src = character.image;
    document.getElementById("characterBio").innerText = character.bio;
    document.querySelector(".character-info").innerHTML = `
        <p><strong>Espécie:</strong> ${character.species}</p>
        <p><strong>Afilição:</strong> ${character.affiliation}</p>
    `;
    document.getElementById("bio").style.display = 'none';
    document.getElementById("toggleBio").textContent = 'Mostrar Biografia';
}

document.getElementById('toggleBio').addEventListener('click', function() {
    const bio = document.getElementById('bio');
    if (bio.style.display === 'none' || bio.style.display === '') {
        bio.style.display = 'block';
        this.textContent = 'Ocultar Biografia';
    } else {
        bio.style.display = 'none';
        this.textContent = 'Mostrar Biografia';
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacter();
});

document.getElementById('prevButton').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacter();
});

// Atualizar o card com o primeiro personagem ao carregar
updateCharacter();

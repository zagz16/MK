const player1 = {
    name: "vova",
    hp: 6100,
    image: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["лук", "нож", "пистолет"],
    attack: function () {
        console.log(this.name + "Fight");
    }
}
const player2 = {
    name: "petya",
    hp: 90,
    image: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["лук", "нож", "пистолет"],
    attack: function () {
        console.log(this.name + "Fight");
    }
}

function createPlayer(playerClass, playerName) {

    let player = document.createElement("div");
    player.classList.add(playerClass);

    let progressbar = document.createElement("div");
    progressbar.classList.add("progressbar");
    let character = document.createElement("div");
    character.classList.add("character");

    let life = document.createElement("div");
    life.classList.add("life");
    life.style.width = playerName.hp + "%";
    let name = document.createElement("div");
    name.classList.add("name");
    name.innerText = playerName.name;

    let img = document.createElement("img");
    img.src = playerName.image;

    player.appendChild(progressbar);
    player.appendChild(character);

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    character.appendChild(img);
    let arenas = document.querySelector(".arenas");
    arenas.appendChild(player);
};

createPlayer('player1', player1);
createPlayer('player2', player2);

player1.attack();
player2.attack();
player2.attack();
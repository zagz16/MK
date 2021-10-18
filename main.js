const arenas = document.querySelector(".arenas");
const randomButton = document.querySelector(".button");


const player1 = {
    player: 1,
    name: "vova",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["лук", "нож", "пистолет"],
    attack: function () {
        console.log(this.name + "Fight");
    }
}
const player2 = {
    player: 2,
    name: "petya",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["лук", "нож", "пистолет"],
    attack: function () {
        console.log(this.name + "Fight");
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerName) {

    const player = createElement("div", "player" + playerName.player);
    const progressbar = createElement("div", "progressbar");
    const character = createElement("div", "character");
    const life = createElement("div", "life");
    const name = createElement("div", "name");
    const img = createElement("img");

    name.innerText = playerName.name;
    life.style.width = playerName.hp + "%";
    img.src = playerName.image;

    player.appendChild(progressbar);
    player.appendChild(character);

    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);

    return player;
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function changeHP(player) {
    const playerLife = document.querySelector(".player" + player.player + " .life");
    player.hp -= getRandomIntInclusive(1, 20);
    playerLife.style.width = player.hp + "%";


    if (player.hp <= 0) {

        arenas.appendChild(playerWin(player.name));
        randomButton.disabled = true;
    };

}

function playerWin(name) {
    const winTitle = createElement("div", "winTitle");
    winTitle.innerText = name + " Wins";

    return winTitle;
};

randomButton.addEventListener("click", function () {
    changeHP(player1);
    changeHP(player2);
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));



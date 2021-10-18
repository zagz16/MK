const arenas = document.querySelector(".arenas");
const randomButton = document.querySelector(".button");


const player1 = {
    player: 1,
    name: "vova",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["лук", "нож", "пистолет"],
    attack: function () {
        console.log(this.name + "Fight")
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
    getRandomInt: getRandomInt,
    randomButton: randomButton,
    createReloadButton: createReloadButton
}

const player2 = {
    player: 2,
    name: "petya",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["лук", "нож", "пистолет"],
    attack: function () {
        console.log(this.name + "Fight");
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
    getRandomInt: getRandomInt,
    randomButton: randomButton,
    createReloadButton: createReloadButton
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются

}

function changeHP() {

    this.hp -= this.getRandomInt(1, 20);

    if (this.hp <= 0) {
        this.hp = 0;
    };

    return this.hp;
}

function elHP() {
    const playerLife = document.querySelector(".player" + this.player + " .life");

    return playerLife;
}

function renderHP() {

    return this.elHP().style.width = this.changeHP() + "%";
}


function playerWins(name) {
    const winTitle = createElement("div", "winTitle");
    if (name) {
        winTitle.innerText = name + " Wins";
    } else {
        winTitle.innerText = "draw";
    }

    return winTitle;
};

randomButton.addEventListener("click", function () {
    player1.changeHP(getRandomInt());
    player1.renderHP();
    player2.changeHP(getRandomInt());
    player2.renderHP();


    if (player1.hp === 0 || player2.hp === 0) {
        randomButton.disabled = true;
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        arenas.appendChild(playerWins(player1.name));
    } else if (player2.hp === 0 && player1.hp === 0) {
        arenas.appendChild(playerWins());
    }


});

function createReloadButton() {
    const reloadWrap = createElement("div", "reloadWrap");
    const button = createElement("button", "button");
    button.innerText = "Restart";
    reloadWrap.appendChild(button);
    arenas.appendChild(reloadWrap);

    button.addEventListener("click", function () {
        window.location.reload()
    })

}



arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
arenas.appendChild(createReloadButton());

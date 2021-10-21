const arenas = document.querySelector(".arenas");
/* const randomButton = document.querySelector(".button"); */

const formFight = document.querySelector(".control");

const HIT = {
    head: 30,
    body: 25,
    foot: 20
}

const ATTACK = ["head", "body", "foot"];

const player1 = {
    player: 1,
    name: "vova",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    attack,
    changeHP,
    elHP,
    renderHP,
    getRoundResult
}

const player2 = {
    player: 2,
    name: "petya",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    attack,
    changeHP,
    elHP,
    renderHP,
    getRoundResult
}

function attack() {
    console.log(this.name + " " + "Fight...")
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

/* function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются

}
 */
function getRandomInt(num) {
    return Math.ceil(Math.random() * num)
}

function changeHP(num) {
    this.hp -= num

    if (this.hp <= 0) {
        this.hp = 0;
    };

    return this.hp;
}

function elHP() {
    return document.querySelector(".player" + this.player + " .life");
}

function renderHP() {

    this.elHP().style.width = this.hp + "%";
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

/* randomButton.addEventListener("click", function () {
    player1.changeHP(getRandomInt());
    player1.renderHP();
    player2.changeHP(getRandomInt());
    player2.renderHP();


    if (player1.hp === 0 || player2.hp === 0) {
        randomButton.disabled = true;
        createReloadButton()
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        arenas.appendChild(playerWins(player1.name));
    } else if (player2.hp === 0 && player1.hp === 0) {
        arenas.appendChild(playerWins());
    }


}); */

function createReloadButton() {
    const reloadWrap = createElement("div", "reloadWrap");
    const reloadButton = createElement("button", "button");
    reloadButton.innerText = "Restart";

    reloadWrap.appendChild(reloadButton);
    arenas.appendChild(reloadWrap);

    reloadButton.addEventListener("click", function () {
        window.location.reload()
    })

}

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

function enemyAttack() {
    const hit = ATTACK[getRandomInt(3) - 1];
    const defence = ATTACK[getRandomInt(3) - 1];

    return {
        value: getRandomInt(HIT[hit]),
        hit,
        defence
    }
}

 

    formFight.addEventListener("submit", function (e) {
        e.preventDefault();
        const enemy = enemyAttack();
        const attack = {};
        
        for (let item of formFight) {
            if (item.checked && item.name === "hit") {
                attack.value = getRandomInt(HIT[item.value]);
                attack.hit = item.value;
                
            }
    
            if (item.checked && item.name === "hit") {
                attack.value = getRandomInt(HIT[item.value]);
                attack.defence = item.value;
            }
            item.checked = false;
        }
        getRoundResult(attack,enemy)      
    })

function getRoundResult(enemy,attack) {
    if(attack.hit!=enemy.defence) {
        this.changeHP(attack.value)
    }
    if (enemy.hit != attack.defence) {
        this.changeHP(enemy.value);
        this.renderHP();
        
    }
}

/* player1.getRoundResult(enemy,attack);
player2.getRoundResult(attack,enemy); */
    /*     player1.changeHP(getRandomInt());
        player1.renderHP();
        player2.changeHP(getRandomInt());
        player2.renderHP();
    
    
        if (player1.hp === 0 || player2.hp === 0) {
            randomButton.disabled = true;
            createReloadButton()
        }
    
        if (player1.hp === 0 && player1.hp < player2.hp) {
            arenas.appendChild(playerWins(player2.name));
        } else if (player2.hp === 0 && player2.hp < player1.hp) {
            arenas.appendChild(playerWins(player1.name));
        } else if (player2.hp === 0 && player1.hp === 0) {
            arenas.appendChild(playerWins());
        }
     */



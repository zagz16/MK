import { arrLength } from "./length.js";
import { logs } from "./logs.js";
import { player1, player2 } from "./player.js";
import { createElement, getRandomInt } from "./util.js";
import { timeLogFight } from "./time.js";
import { createReloadButton, showResult, playerWins } from "./finalActions.js";
import { arenas, formFight, chat } from "./findElem.js";
import { HIT, ATTACK, playerAttack, enemyAttack } from "./attackAction.js";



const createPlayer = (playerName) => {

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

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

const startLogFight = (type, player1, player2) => {
    const startLog = logs[type].replace("[time]", timeLogFight()).replace("[player2]", player2.name).replace("[player1]", player1.name)
    const el = `<p>${startLog}</p>`
    chat.insertAdjacentHTML("afterbegin", el);
}
startLogFight("start", player1, player2);

const generateLogs = (type, player1, player2, enemy, player) => {
    let text;
    if (player1) {
        text = timeLogFight() + " " + logs[type][getRandomInt(arrLength(type))].replace("[playerKick]", player1.name).replace("[playerDefence]", player2.name) + " " + (-enemy.value) + " " + player2.hp + '/' + '100';
    } else if (player2) {
        text = timeLogFight() + " " + logs[type][getRandomInt(arrLength(type))].replace("[playerKick]", player2.name).replace("[playerDefence]", player1.name) + " " + (-player.value) + " " + player1.hp + '/' + '100';
    }
    console.log(text);
    const el = `<p>${text}</p>`
    chat.insertAdjacentHTML("afterbegin", el);
}

/* function endLogFight(type, player1, player2) {
    const arrLength = logs[type].length - 1;
    if (player1.hp === 0) {
        const textEnd = logs[type][getRandomInt(arrLength)].replace("[playerWins]", player2.name).replace("[playerLose]", player1.name)
        const el = `<p>${textEnd}</p>`
        chat.insertAdjacentHTML("afterbegin", el);
    } else if (player2.hp === 0) {
        const textEnd = logs[type][getRandomInt(arrLength)].replace("[playerWins]", player1.name).replace("[playerLose]", player2.name)
        const el = `<p>${textEnd}</p>`
        chat.insertAdjacentHTML("afterbegin", el);
    }
}
endLogFight("end", player1, player2) */

formFight.addEventListener("submit", function (e) {
    e.preventDefault();
    const player = playerAttack();
    console.log(player);
    const enemy = enemyAttack();
    console.log(enemy);

    if (player.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1, enemy);
    }
    if (enemy.defence !== player.hit) {
        player2.changeHP(player.value);
        player2.renderHP();
        generateLogs('hit', player1, player2, player);
    }

    showResult();
})





import { player1, player2 } from "./player.js";
import { formFight, arenas } from "./findElem.js";
import { createElement } from "./util.js";

export const createReloadButton = () => {
    const reloadWrap = createElement("div", "reloadWrap");
    const reloadButton = createElement("button", "button");
    reloadButton.innerText = "Restart";

    reloadWrap.appendChild(reloadButton);
    arenas.appendChild(reloadWrap);

    reloadButton.addEventListener("click", function () {
        window.location.reload()
    })

}

export const showResult = () => {
    if (player1.hp === 0 || player2.hp === 0) {
        formFight.disabled = true;
        createReloadButton()
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        arenas.appendChild(playerWins(player2.name));

    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        arenas.appendChild(playerWins(player1.name));
    } else if (player2.hp === 0 && player1.hp === 0) {
        arenas.appendChild(playerWins());
    }
}

export const playerWins = (name) => {
    const winTitle = createElement("div", "winTitle");
    if (name) {
        winTitle.innerText = name + " Wins";
    } else {
        winTitle.innerText = "draw";
    }

    return winTitle;
};
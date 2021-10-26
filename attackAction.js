import { getRandomInt } from "./util.js";
import { formFight } from "./findElem.js";

export const HIT = {
    head: 30,
    body: 25,
    foot: 20
}
export const ATTACK = ["head", "body", "foot"];

export const playerAttack = () => {
    const attack = {};

    for (let item of formFight) {
        if (item.checked && item.name === "hit") {
            attack.value = getRandomInt(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === "defence") {
            /* attack.value = getRandomInt(HIT[item.value]); */
            attack.defence = item.value;

        }
        item.checked = false;
    }

    return attack;
}

export const enemyAttack = () => {
    const hit = ATTACK[getRandomInt(3) - 1];
    const defence = ATTACK[getRandomInt(3) - 1];

    return {
        value: getRandomInt(HIT[hit]),
        hit,
        defence
    }
}

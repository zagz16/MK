

export const player1 = {
    player: 1,
    name: "vova",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    attack,
    changeHP,
    elHP,
    renderHP
};


export const player2 = {
    player: 2,
    name: "petya",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    attack,
    changeHP,
    elHP,
    renderHP
};


export function changeHP(num) {

    if (this.hp < 0) {
        this.hp = 0;
    } else {
        this.hp -= num;
    };
    console.log(this.hp)
    return this.hp;
}

export function elHP() {
    console.log(document.querySelector(".player" + this.player + " .life"))
    return document.querySelector(".player" + this.player + " .life");
}

export function renderHP() {

    this.elHP().style.width = this.hp + "%";
}

export function attack() {
    console.log(this.name + " " + "Fight...")
}

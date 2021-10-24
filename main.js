const arenas = document.querySelector(".arenas");
const formFight = document.querySelector(".control");
const chat = document.querySelector(".chat");

const HIT = {
    head: 30,
    body: 25,
    foot: 20
}

const ATTACK = ["head", "body", "foot"];

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const player1 = {
    player: 1,
    name: "vova",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    attack,
    changeHP,
    elHP,
    renderHP
}

const player2 = {
    player: 2,
    name: "petya",
    hp: 100,
    image: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    attack,
    changeHP,
    elHP,
    renderHP
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

function playerAttack() {
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
    return attack;
}

function showResult() {
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

function timeLogFight() {
    const time = new Date();
    let timeHours = time.getHours();
    let timeMinutes = time.getMinutes();
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    const nowTimes = timeHours + ":" + timeMinutes;
    return nowTimes;
}

function startLogFight(type, player1, player2) {
    const startLog = logs[type].replace("[time]", timeLogFight()).replace("[player2]", player2.name).replace("[player1]", player1.name)
    const el = `<p>${startLog}</p>`
    chat.insertAdjacentHTML("afterbegin", el);
}
startLogFight("start", player1, player2);

function generateLogs(type, player1, player2) {
    const arrLength = logs[type].length - 1;
    const text = timeLogFight() + " " + logs[type][getRandomInt(arrLength)].replace("[playerKick]", player1.name).replace("[playerDefence]", player2.name) + " " + (-enemyAttack().value) + " " + player2.hp + '/' + '100';

    const el = `<p>${text}</p>`
    chat.insertAdjacentHTML("afterbegin", el);
}

function endLogFight() {
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
endLogFight("end", player1, player2)

formFight.addEventListener("submit", function (e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();

    if (player.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1);
    }
    if (enemy.defence !== player.hit) {
        player2.changeHP(player.value);
        player2.renderHP();
        generateLogs('hit', player1, player2);
    }

    showResult();
})





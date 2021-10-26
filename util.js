export const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

export const getRandomInt = (num) => {
    return Math.ceil(Math.random() * num)
}
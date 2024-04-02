let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 4000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let btnStart = document.querySelector("#btnStart");
    btnStart.addEventListener("click", start);

    let target = document.querySelector("#target");
    let nieuwGetal = Math.random() * 4;
    target.setAttribute("src", global.IMAGE_PATH_PREFIX + Math.round(nieuwGetal) + global.IMAGE_PATH_SUFFIX);
};
const start = () =>  {
    let btnstart = document.querySelector("#btnStart");
    btnstart.remove();
    cycle();
}

const cycle = () => {
    let target = document.querySelector("#target");
    if(target.getAttribute("src") === global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX)
    {
        global.timeoutId = setTimeout(cycle, global.MOVE_DELAY);
        verplaatsAfbeelding();
    }
    else
    {
        global.timeoutId = setTimeout(cycle, global.MOVE_DELAY);
        target.addEventListener("click", geklikt);
    }
}

const geklikt = () => {
    let target = document.querySelector("#target");
    if (target.getAttribute("src") !== global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX)
    {
        global.score += 1;
        let counter = document.querySelector("#counter");
        counter.textContent = global.score;

        clearInterval(global.timeoutId);
        global.timeoutId = setInterval(verplaatsAfbeelding, global.MOVE_DELAY);
        verplaatsAfbeelding();
    }
    else
    {
        window.alert("GAME OVER");
        clearInterval(global.timeoutId);
        clearTimeout(start);
    }
}
const verplaatsAfbeelding = () => {
    let target = document.getElementById("target");
    let nieuwGetal = Math.random() * 4;
    target.setAttribute("src", global.IMAGE_PATH_PREFIX + Math.round(nieuwGetal) + global.IMAGE_PATH_SUFFIX);
    target.style.top = Math.round(Math.random() * (800-target.offsetHeight)) + "px";
    target.style.left = Math.round(Math.random() * (600-target.offsetLeft)) + "px";
}

window.addEventListener("load", setup);
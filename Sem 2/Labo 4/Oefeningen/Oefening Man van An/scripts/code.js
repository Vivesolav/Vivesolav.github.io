const setup = () => {
    document.getElementById("btnBereken").addEventListener("click",bereken)
}

const bereken = () => {
    let text = document.getElementById("txtInput").value;
    let zoek =document.getElementById("txtZoektekst").value;
    let positie = 0;
    let aantal = 0;
    text.toLowerCase();
    while (positie > -1) {
        positie = text.indexOf(zoek);
        text = text.substring((positie+2), text.length)
        aantal ++;
    }
    console.log(aantal);
}

window.addEventListener('load', setup);
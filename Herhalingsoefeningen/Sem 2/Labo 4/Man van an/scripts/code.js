const setup = () => {
    document.getElementById("btnZoek").addEventListener("click",uitvoeren);

}

const uitvoeren =() => {
    let text = document.getElementById("txtInput").value;
    let zoek = document.getElementById("txtZoektekst").value;
    let positie;

    text.toLowerCase();
    zoek.toLowerCase().trim();
    while(gevonden =-1){
        positie= text.indexOf(zoek)
        text.
    }

}
window.addEventListener("load", setup);
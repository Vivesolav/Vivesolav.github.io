const setup = () => {
    document.getElementById("btnBereken").addEventListener("click",bereken)
}
const bereken = () =>{
    let text = document.getElementById("txtInput").value;
    text = text.toLowerCase();
    let woordenVerzameling = text.split(" ");
    for (let i = 0; i < woordenVerzameling.length; i++) {
        if (woordenVerzameling.at(i) === "de"){
            woordenVerzameling[i] = "het";
        } else if (woordenVerzameling.at(i) === "het") {
            woordenVerzameling[i] = "de";
        }
    }
    document.getElementById("lstOutput").innerHTML = woordenVerzameling.join(" ");
}
window.addEventListener("load", setup);
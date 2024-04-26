const setup = () => {
    document.getElementById("btnKnop").addEventListener("click", uitvoeren);
}
const uitvoeren = () => {
    let woord = document.getElementById("txtWoord").value;
    let getal1 = parseInt(document.getElementById("txtGetal1").value);
    let getal2 = parseInt(document.getElementById("txtGetal2").value);
    let sub;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        sub = woord.substring(getal1, getal2);
    } else {
        sub = "Ongeldige invoer voor getallen.";
    }

    document.getElementById("txtOutput").innerHTML = sub;
    console.log(sub);
}

window.addEventListener("load", setup);
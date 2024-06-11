const setup = () => {
    document.getElementById("btnResultaat").addEventListener("click",resultaat);
}
const resultaat =()  =>{
    let roker = document.querySelector("#chkSmoking").checked;
    if (roker === true) {
        roker = "Is roker";
    } else {
        roker = "Is geen roker";
    }
    console.log(roker);


    let moedertaal = "moedertaal is ";
    let moedertalen = document.getElementsByName("taal");
    let found = false;
    let i = 0;
    while (!found) {
        if (moedertalen.item(i).checked){
            moedertaal += moedertalen.item(i).value;
            found = true;
        }
        i++;
    }
    console.log(moedertaal);


    let buurland = "favoriete buurland is ";
    let buurlanden = document.querySelector("#favBuurland").options;
    i = buurlanden.selectedIndex;
    buurland += buurlanden.item(i).value;
    console.log(buurland);


    let bestelling = "bestelling bestaat uit ";
    let mogelijkheden = document.querySelector("#bestelling").options;
    i = 0;
    for (i; i < mogelijkheden.length; i++){
        if (mogelijkheden.item(i).selected){
            bestelling += mogelijkheden.item(i).text + " ";
        }
    }
    if (bestelling === "bestelling bestaat uit "){
        bestelling += "niets";
    }
    console.log(bestelling);

}


window.addEventListener("load", setup);
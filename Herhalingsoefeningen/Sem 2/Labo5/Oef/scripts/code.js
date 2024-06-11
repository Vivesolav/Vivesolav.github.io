const setup = () => {
    document.getElementById("btnFrom").addEventListener("click",uitwerken);

}

const uitwerken =() => {
    let keuzeRoker = document.getElementById("chkRoker")
    if(keuzeRoker){
        console.log("Is geen roker");
    }
    else{
        console.log("Is roker");
    }

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
    let buurlanden = document.getElementById("food").options;
    buurland += buurlanden.item (buurlanden.selectedIndex).value;
    console.log(buurland);


}
window.addEventListener("load", setup);
let personen = [];

const vulPersoonOpBaisVanUserInterface =(persoon)=>{
   let txtVoornaam = document.getElementById("txtVoornaam");
   persoon.voornaam =txtVoornaam.value.trim();
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    persoon.familienaam =txtFamilienaam.value.trim();
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    persoon.geboorteDatum = new Date(txtGeboorteDatum.value.trim());
    let txtEmail = document.getElementById("txtEmail");
    persoon.email =txtEmail.value.trim();
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    persoon.aantalKinderen =parseInt(txtAantalKinderen.value.trim());
}
const voegPersoonToeLijstInUserInterface =(persoon)=> {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text=persoon.voornaam+ " " +persoon.familienaam;
    option.value=persoon.email;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex=personen.length-1;
}

const bewaarBewerktePersoon = () => {
    let persoon ={};
    if(lstPersonen.selectedIndex==-1){
        vulPersoonOpBaisVanUserInterface(persoon);
        personen.push(persoon);
    }

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let elements = document.getElementsByClassName("invalid");
    if(elements.length==0){
        let persoon={};
        if (lstPersonen.selectedIndex==-1){
            vulPersoonOpBaisVanUserInterface(persoon);
            personen.push(persoon);
            voegPersoonToeLijstInUserInterface(persoon);

        }
        else{
            persoon =personen[lstPersonen.selectedIndex];
            vulPersoonOpBaisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);
        }
    }

 // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex=-1;

    let inputElem = document.querySelectorAll('input[type=text]');

    inputElem.forEach((elem)=>{
        elem.value="";
    });

    clearAllErrors();
};

const vulUserInterfaceOpBasisVanPersoon = (persoon)=>{
    let txtvoornaam =document.getElementById("txtVoornaam");
    txtvoornaam.value=persoon.voornaam;

    let txtFamilienaam =document.getElementById("txtVoornaam");
    txtFamilienaam.value=persoon.voornaam;
    let txtGeboorteDatum =document.getElementById("txtVoornaam");
    txtGeboorteDatum.value=persoon.geboorteDatum.toISOString();

}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);
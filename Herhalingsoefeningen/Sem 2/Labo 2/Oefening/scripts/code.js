const setup = () => {
    let familie = ["ina","vincent","Emma","Olav","test"];

    // lengte van array wegschrijven
    console.log("aantal leden ="+familie.length);

    for(let i=0; i<familie.length;i++){
        if(i%2 ===0){
            console.log("familielid "+(i-1)+" "+familie[i]);
        }
    }

    VoegNaamToe(familie);

    console.log("String familieleden: "+familie.join(" - "))
}

const VoegNaamToe =(familie)=> {
    let extranaam = prompt("Geef een naam in");
    familie.push(extranaam);
    console.log("Extra naam toegevoegd.")

    for(let i=0;i<familie.length;i++){
        console.log(familie[i]);
    }
}
window.addEventListener("load", setup);
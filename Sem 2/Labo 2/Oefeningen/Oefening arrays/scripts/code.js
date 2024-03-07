let  setup = () => {
    let familieLeden = ["Ina", "Vincent", "Geert-jan", "Jonas"];

    console.log (familieLeden.length);

    for (let i = 0; i < familieLeden.length; i=i+2)
    {
        console.log("Familielid " + familieLeden[i] );
    }
    voegNaamToe(familieLeden);

    console.log (familieLeden.join(" - "));
}

const voegNaamToe = (leden) =>
{
    let naam =    prompt("Geef een naam in");
    leden.push(naam);
    for (let i = 0; i < leden.length; i++)
    {
        console.log("Familielid " + leden[i] );
    }
}

window.addEventListener("load", setup);
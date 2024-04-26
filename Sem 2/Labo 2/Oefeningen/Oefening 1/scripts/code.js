const setup = () => {
    let pElement = document.getElementById("txtConfirm");
    let pElement2 = document.getElementById("txtPrompt");

    window.alert("Popup melding");
    var c = window.confirm("Weet u het zeker?");
    var p = window.prompt("Wat is uw naam", "Naam");
    if(c){
        pElement.innerHTML= "confirm = true";
    }
    else{
        pElement.innerHTML= "confirm = false";
    }
    if(p !== "Naam"){
        pElement2.innerHTML= "prompt = true (naam niet gelijk aan 'Naam')";
    }
    else{
        pElement2.innerHTML= "prompt = false";
    }
}

window.addEventListener("load", setup);



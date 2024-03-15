const setup = () => {
    const aantalLijnen =6;
    for(let i =1;i<=aantalLijnen;i++){   //Hoogte
        let boompje= "";
        for(let j =0;j<i;j++){  //breedte
            boompje+="*";
        }
        console.log(boompje);
        console.log()
    }
}
window.addEventListener("load", setup);
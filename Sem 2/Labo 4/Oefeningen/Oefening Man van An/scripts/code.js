const setup = () => {
    let btnZoek = document.getElementById("btnZoek");
    btnZoek.addEventListener("click",setup);
}

const setup = () => {
    let txtInput =document.getElementById("txtInput");
    let tekst =txtInput.value;
    let txtZoektekst =document.getElementById("txtZoektekst");
    let zoektekst=txtZoektekst.value;

    let aantal=-1;

    let txtAantal=telVoorkomens(tekst,zoektekst);
    txtAantal.textContent=aantal;
}

const  telVoorkomens =(tekst,zoektekst)=>{
    let result =0;
    let idx=tekst.indexOf(zoektekst);
    while(idx!==-1){
        result++;
        idx=tekst.indexOf(zoektekst,idx+zoektekst.length)
    }
    return result;
}
window.addEventListener("load", setup);
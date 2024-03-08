const setup = () => {
    let btnKnop=document.getElementById("btnKnop");
    btnKnop.addEventListener("click",change);
}
const change =() =>{
    let txtInput=document.getElementById("txtInput");
    let tekst =txtInput.value;
    let tekstMetSpaties="";

    for(let i=0;i<tekst.length;i++){
        tekstMetSpaties+=tekst.charAt(i) ;
        tekstMetSpaties+=" ";
    }
    console.log(tekstMetSpaties)
}
window.addEventListener("load", setup);
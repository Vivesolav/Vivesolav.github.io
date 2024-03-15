const setup = () => {
    document.getElementById("btnTrigram").addEventListener("click",bereken)

}
const bereken =()=>{
    let woord = document.getElementById("txtInput").value;
    for(let i = 0; i< woord.length-2;i++){
        document.getElementById("lstTrigrams").innerHTML+=woord.slice(i,i+3)+"<br>";
    }
}
window.addEventListener("load", setup);
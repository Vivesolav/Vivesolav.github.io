const setup = () => {
    //let lstPar = document.getElementsByClassName("color");
    let lstParDiv = document.querySelectorAll("#myDiv>.color")



    for (let i=0;i<lstParDiv.length;i++){
        lstParDiv[i].addEventListener("click",change)  //2 elem -> click
    }

}
const change =(e) =>{
    e.target.className ="colorParDiv"
}
window.addEventListener("load", setup);
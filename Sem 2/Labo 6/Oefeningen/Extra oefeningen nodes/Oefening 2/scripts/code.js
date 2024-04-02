const setup = () => {

    let liNodelist = document.querySelectorAll("li");
    for (let i = 0; i < liNodelist.length; i++) {
        liNodelist[i].setAttribute("class", "listitem")
    }

    let img = document.createElement("img");
    img.setAttribute("src", "Images/DSC_0328.jpg");
    document.body.appendChild(img);
}
window.addEventListener("load", setup);
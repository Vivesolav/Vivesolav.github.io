const setup = () => {
    let imgPhoto = document.getElementById("imgPhoto");
    imgPhoto.addEventListener("mouseover",change);
}

const change =() =>{

    let photo = document.getElementById("imgPhoto");
    photo.src = "./image/CatFoto.jpg";
    photo.alt="cat";
    photo.className="sizePhoto";

    let txtText = document.getElementById("txtText");
    txtText.innerHTML="School of cats";
}

window.addEventListener("load", setup);
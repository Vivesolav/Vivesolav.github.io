const setup = () => {
    document.getElementById("btnKnop").addEventListener("click", spaties);

}
const spaties = () => {
    let text = document.getElementById("txtInput").value;
    console.log(maakMetSpaties(text));
}

const maakMetSpaties = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += text[i] + " ";
    }
    return result;
}
window.addEventListener("load", setup);
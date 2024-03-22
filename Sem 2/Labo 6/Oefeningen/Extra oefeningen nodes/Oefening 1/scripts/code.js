const setup = () => {
    let element = document.querySelectorAll("p");
    element[0].textContent = "Good Job!";
}
window.addEventListener("load", setup);
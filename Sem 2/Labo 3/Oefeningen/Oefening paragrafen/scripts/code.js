const setup = () => {

    window.addEventListener("load", setup);
}

document.addEventListener("DOMContentLoaded", function() {
    var belangrijkeElementen = document.querySelectorAll(".belangrijk");

    belangrijkeElementen.forEach(function(element) {
        element.classList.add("opvallend");
    });
});

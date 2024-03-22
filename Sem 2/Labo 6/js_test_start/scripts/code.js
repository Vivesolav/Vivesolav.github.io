const setup = () => {
    let statusSelect = document.querySelector('select[name="kip"]');

    statusSelect.addEventListener('change', function() {
        let selectedStatus = statusSelect.value;
        change(selectedStatus);
    });

    document.getElementById("txtText").addEventListener("input", bereken);
}

const change = (selectedStatus) => {
    let imgPhoto = document.getElementById("imgPhoto");
    let resultaat = "";
    if (selectedStatus === "WithEgg") {
        imgPhoto.src = "with-egg.png";
        imgPhoto.alt = "with";
        resultaat = "Hierboven een kip met een ei";
    } else if (selectedStatus === "WithoutEgg") {
        imgPhoto.src = "without-egg.png";
        imgPhoto.alt = "without";
        resultaat = "Hierboven een kip zonder een ei";
    }
    document.getElementById("txtOutput").innerHTML = resultaat;
}

const bereken = () => {
    let zoek = document.getElementById("txtText").value.toLowerCase();
    let text = document.getElementById("txtOutput").textContent.toLowerCase();
    let positie = 0;
    let aantal = 0;

    while (positie > -1) {
        positie = text.indexOf(zoek, positie);
        if (positie > -1) {
            positie++;
            aantal++;
        }
    }
    let resultaatText = "Letter '" + zoek + "' komt " + aantal + " keer voor in bovenstaande zin.";
    document.getElementById("txtOutputZin").innerHTML = resultaatText;
}

window.addEventListener("load", setup);

const storeSliderValues = (red, green, blue) => {
    let settings = {};
    let settingsColorJSON;

    settings.red = parseInt(document.getElementById("sldRed").value);
    settings.green = parseInt(document.getElementById("sldGreen").value);
    settings.blue = parseInt(document.getElementById("sldBlue").value);

    settingsColorJSON = JSON.stringify(settings);
    localStorage.setItem("colorPicker_Pro.be.settingsSliders", settingsColorJSON);
};

const restoreSliderValues = () => {
    let settings;
    let settingsColorJSON = localStorage.getItem("colorPicker_Pro.be.settingsSliders");

    if (settingsColorJSON == undefined) {
        settings = {
            red: 0,
            green: 0,
            blue: 0
        };
    } else {
        settings = JSON.parse(settingsColorJSON);
    }

    document.getElementById("sldRed").value = settings.red;
    document.getElementById("sldGreen").value = settings.green;
    document.getElementById("sldBlue").value = settings.blue;
};

const storeSwatches = (red, green, blue) => {
    let rgbColors =[];
    let settingsSwatch = document.getElementById("swatch");

    for(let i =1;i<settingsSwatch.length;i++){
        let rgb = {
            red: settingsSwatch[i].getAttribute("data-red"),
            green: settingsSwatch[i].getAttribute("data-green"),
            blue: settingsSwatch[i].getAttribute("data-blue")
        };
        rgbColors.push(rgb);
    }
    let settingsSwatchJSON = JSON.stringify(rgbColors);
    localStorage.setItem("colorPicker_Pro.be.settingsSwatches", settingsSwatchJSON);
};

const restoreSwatches = () => {
    let settingsSwatchJSON = localStorage.getItem("colorPicker_Pro.be.settingsSwatches");

    if (settingsSwatchJSON != null) {
        let rgbColors  = JSON.parse(settingsSwatchJSON);
        for (let i = 0; i < rgbColors.length; i++) {
            let rgb = rgbColors[i]
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);
        }
    }
};


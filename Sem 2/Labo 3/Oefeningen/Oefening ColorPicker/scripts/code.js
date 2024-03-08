const setup = () => {

	let sliders = document.getElementsByClassName("slider");
	let sliderRed = document.getElementById("sliderRed");
	let sliderGreen = document.getElementById("sliderGreen");
	let sliderBlue = document.getElementById("sliderBlue");

	sliderRed.addEventListener("change", update);
	sliderRed.addEventListener("input", update);
	sliderGreen.addEventListener("change", update);
	sliderGreen.addEventListener("input", update);
	sliderBlue.addEventListener("change", update);
	sliderBlue.addEventListener("input", update);


}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let valueRed=sliders[0].value;
	let valueGreen=sliders[1].value;
	let valueBlue=sliders[2].value;
	console.log("de waarde van de rode slider is momenteel : "+valueRed);
	console.log("de waarde van de groene slider is momenteel : "+valueGreen);
	console.log("de waarde van de blauwe slider is momenteel : "+valueBlue);
	colorDemos[0].style.backgroundColor="rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";
	let red = document.getElementById("Red");
	let green = document.getElementById("Green");
	let blue = document.getElementById("Blue");
	red.textContent = "Red " + valueRed;
	green.textContent = "Green " + valueGreen;
	blue.textContent = "Blue " + valueBlue;
}

window.addEventListener("load", setup);
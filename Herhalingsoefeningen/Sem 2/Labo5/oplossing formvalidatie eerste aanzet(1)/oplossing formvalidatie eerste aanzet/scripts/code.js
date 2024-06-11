const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerAchternaam();
	valideerEmail();
	valideerKinderen();
	valideerGeboortedatum();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};

const  valideerAchternaam = () => {
	let txtAchternaam  = document.getElementById("txtFamilienaam");
	let errAchternaam = document.getElementById("errFamilienaam");
	let achternaam  = txtAchternaam.value.trim();
	if(achternaam.length > 50){
		txtAchternaam.className="invalid";
		errAchternaam.innerHTML = "max. 50 karakters";
	}
	else if(achternaam.length === 0){
		txtAchternaam.className="invalid";
		errAchternaam.innerHTML = "verplicht veld";
	}
	else{
		txtAchternaam.className=""; // alle classes verwijderen
		errAchternaam.innerHTML = "";
	}
}

const valideerGeboortedatum = () =>{
	let txtBirth = document.getElementById("dateBirth");
	let errBirthEmpty = document.getElementById("errBirthEmpty");
	let errBirthWrong = document.getElementById("errBirthWrong");
	let date = txtBirth.value.trim();
	if (date.length > 0) {
		date = date.substring(4,5) + date.substring(7,8) + date.length;
		console.log(date);
	}
	if (date === "") {
		txtBirth.className="invalid";
		errBirthEmpty.innerHTML = "verplicht veld";
		errBirthWrong.innerHTML = "";
	} else if (date !== "--10") {
		txtBirth.className="invalid";
		errBirthEmpty.innerHTML = "";
		errBirthWrong.innerHTML = "formaat is niet jjjj-mm-dd";
	} else {
		txtBirth.className="";
		errBirthEmpty.innerHTML = "";
		errBirthWrong.innerHTML = "";
	}
}

const valideerEmail = () =>  {
	let txtEmail = document.getElementById("txtEmail");
	let email = txtEmail.value.trim();
	let errEmail = document.getElementById("errEmail");

	if (email.length === 0){
		txtEmail.className="invalid";
		errEmail.innerHTML = "verplicht veld";

	}
	else {
		let positieAd = email.indexOf("@");
		//controle 2de @
		let subEmail = email.substring(positieAd+1,email.length);
		console.log(subEmail)
		if(subEmail.indexOf("@") > -1){
			txtEmail.className="invalid";
			errEmail.innerHTML="Geen geldig email adres";
			console.log("mis hier")
		}
		else if (positieAd === 0&& positieAd === email.length) {
			txtEmail.className="invalid";
			errEmail.innerHTML="Geen geldig email adres";
			console.log("hier")
		}
		else{
			txtEmail.className=""; // alle classes verwijderen
			errEmail.innerHTML = "";
		}
	}
}



const valideerKinderen = () =>{
	let txtKinderen = document.getElementById("txtKinderen");
	let kinderen = txtKinderen.value.trim();
	let errKinderen = document.getElementById("errKinderen");
	if (kinderen < 0){
		txtKinderen.className="invalid";
		errKinderen.innerHTML="Geen positef getal";
	}
	else if (kinderen >99){
		txtKinderen.className="invalid";
		errKinderen.innerHTML="Te vruchtbaar";
	}
	else {
		txtKinderen.className=""; // alle classes verwijderen
		errKinderen.innerHTML = "";
	}
}

window.addEventListener("load", setup);
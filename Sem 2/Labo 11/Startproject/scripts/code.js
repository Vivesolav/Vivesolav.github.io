let global = {
    woorden : ['vives','stoel','tafel','hotel','olijf'],
    gok:"",
    tijd: null,
    aantalKarakters:5,
    highscore:0,

    maanden : ["Januari", "Februari","Maart","April","Mei","Juni","Juli","Augustus","September", "Oktober","November",  "December"]
}

let beurt= {
    naam: "",
    gokken:0,
    date:null,
}

const startup =() =>{
    document.getElementById("nieuw").addEventListener("click",startPrompt);
    document.getElementById("go").addEventListener("click",vergelijk);
    restore();
}

const kiesWoord =() =>{
    let i = Math.floor(Math.random()*global.woorden.length-1);
    return global.woorden[i];
}

const startPrompt =() => {
    console.log("test");
    while (!beurt.naam) {
        beurt.naam = window.prompt("Wat is uw naam?");
    }
     document.getElementById("nieuw").classList.add("hidden");
    beurt.gokken = 0;
}

const vergelijk =() =>{
    if(beurt.naam === ""){
        startPrompt();
    }
    beurt.gokken++;
    let gok = document.getElementById("gok").value.trim();
    let lettersArray = gok.split("");
    let woordLettersArray = kiesWoord().split("");
    let div = document.createElement("div");
    let letterDiv;
    let aantalJuisteLetters = 0;
    console.log(woordLettersArray);
    for(let i=0; i<=lettersArray.length;i++){
        if(lettersArray[i]===woordLettersArray[i]){
            letterDiv = createLetter(lettersArray[i],"juist");
            aantalJuisteLetters++;
        }
        else if (woordLettersArray.indexOf(lettersArray[i]) !== -1){
            letterDiv = createLetter(lettersArray[i],"bevat");
        }
        else{
            letterDiv = createLetter(lettersArray[i],"fout");
        }
        div.appendChild(letterDiv);
        document.getElementById("gokken").appendChild(div);

    }
}
const createLetter=(letter,aanwezigheid)=>{
    console.log("createLetter");
    let div =document.createElement("div");
    div.classList.add(aanwezigheid);
    letter = letter.toUpperCase();
    let text = document.createTextNode(letter);
    div.appendChild(text);
    div.addEventListener("click",help);
    return div;
}

const help =() =>{

}

const gewonnen = () =>{
    document.getElementById("go").classList.add("hidden");
    document.getElementById("nieuw").classList.remove("hidden");
    beurt.date = new Date();
    global.highscore.push(beurt);
    global.highscore.sort(compare);
    highscoreString = JSON.stringify(global.highscore);
    localStorage.setItem("highscores",highscoreString);
    maakScoreboard(global.highscore);
}
const compare = (a,b)=>{
    return a.gokken -b.gokken;
}

const restore  =()=>{

}


window.addEventListener("load",startup);
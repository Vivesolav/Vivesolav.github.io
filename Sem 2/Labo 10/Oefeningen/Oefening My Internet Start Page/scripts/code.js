const setup = () => {
    restoreStorage();
    document.getElementById("btnGo").addEventListener("click", valideer );

}

const valideer = () => {
    let commando = document.getElementById("txtZoekopdracht").value.trim();
    let regex= commando.match("\/[a-z]{1} [a-z]*")
    if (regex != null) {
        let site =commando.slice(0,2);
        if(site==='/g'){
            google(commando.slice(3));
            console.log(1);
        }
        if(site==='/x'){
            x(commando.slice(3));
            console.log(1);
        }
        if(site==='/y'){
            youtube(commando.slice(3));
            console.log(1);
        }
        if(site==='/i'){
            instagram(commando.slice(3));
            console.log(1);
        }
    } else {
        alert("Invald command");
    }
};

const google = (commandosuffix)=>{
    let url = "https://www.google.com/search?q=" +  commandosuffix;
    window.open(url,'_blank');
    createCardAndAppend('Google', commandosuffix,url);
    saveLocalStorage('Google', commandosuffix,url);
}
const youtube = (commandosuffix)=>{

    let url = "https://www.youtube.com/" +  commandosuffix;
    window.open(url,'_blank');
    createCardAndAppend('Youtube', commandosuffix,url);
    saveLocalStorage('Youtube', commandosuffix,url);
}
const x = (commandosuffix)=>{

    let url = "https://twitter.com/home?lang=nl" +  commandosuffix;
    window.open(url,'_blank');
    createCardAndAppend('X', commandosuffix,url);
    saveLocalStorage('X', commandosuffix,url);
}
const instagram = (commandosuffix)=>{

    let url = "https://www.instagram.com/explore/tags/" +  commandosuffix;
    window.open(url,'_blank');
    createCardAndAppend('Instagram', commandosuffix,url);
    saveLocalStorage('Instagram', commandosuffix,url);
}

const createCardAndAppend = (site , commandosuffix , url) => {

    let col4 = createElementWithClassName("div","col-4");
    let card = createElementWithClassName("div","card");
    console.log(site);
    card.classList.add(site.toLowerCase() +"-card");
    let cardBody = createElementWithClassName("div","card-body");
    let cardTitle = createElementWithClassNameAndText("h5","card-title",site);
    let cardText = createElementWithClassNameAndText("p","card-text",commandosuffix);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(site.toLowerCase()+"-button");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row =document.querySelector("#resultContainer>.row");
    let firstChild = row.firstChild;
    row.insertBefore(col4,firstChild);

};
const createLinkButton = (url)=>{
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href",url);
    linkGo.setAttribute("target","_blank");
    linkGo.setAttribute("class","btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go !"));
    return linkGo;
}

const createElementWithClassName =(element,className)=>{
    let e = document.createElement(element);
    e.setAttribute("class",className);
    return e;
}
const createElementWithClassNameAndText =(element,className, text)=>{
    let e = createElementWithClassName(element,className);
    e.appendChild(document.createTextNode(text));
    return e;
}
const saveLocalStorage =(site,commandosuffix,url)=>{
    let history ;
    let historyObject={
        site:site,
        text: commandosuffix,
        url:url
    };
    history=JSON.parse(localStorage.getItem("My_internet_page.be.history"));
    if (!history){
        history = [];
    }
    history.push(historyObject);
    localStorage.setItem("My_internet_page.be.history", JSON.stringify(history));

}
const restoreStorage = () => {
    let history = localStorage.getItem("My_internet_page.be.history");
    if (history) {
        for (let i =0; i<history.length;i++){
            console.log(i)
            createCardAndAppend(history[i].site,history[i].text,history[i].url);
        }
    }
};

window.addEventListener("load", setup);
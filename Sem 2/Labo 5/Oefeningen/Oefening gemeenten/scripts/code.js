const setup = () => {
    bereken();
}

const bereken =() =>{
    let gemeente = "";
    let gemeenten = [];
    while (gemeente.toLowerCase() !== "stop"){
        gemeente = window.prompt("Gemeente:");
        console.log(gemeente);
        if (gemeente !== "stop"){
            gemeenten.push(gemeente);
        }
    }
    gemeenten = gemeenten.sort(compare);
    console.log(gemeenten);

    for (let i = 0; i < gemeenten.length; i++) {
        let output = document.getElementById("output")
        output.innerHTML += "<option value=\"" + gemeenten[i] + "\" \>" + gemeenten[i] + "</option>";
    }
}
const compare = (a, b) => {
    return a.localeCompare(b);
}


window.addEventListener('load', setup);

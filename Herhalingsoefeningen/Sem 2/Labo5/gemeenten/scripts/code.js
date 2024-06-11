const setup = () => {
    let gemeente = "";
    let gemeenten = [];

    while(gemeente.toLowerCase() !== "stop"){
        gemeente=window.prompt("Gemeente:")
        console.log(gemeente)
        if(gemeente !== "stop"){
            gemeenten.push(gemeente);
        }
    }
    gemeenten = gemeenten.sort(compare)


}
const compare = (a, b) => {
    return a.localeCompare(b);
}

window.addEventListener("load", setup);
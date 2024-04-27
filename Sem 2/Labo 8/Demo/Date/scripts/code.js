const setup = () => {
    let start = new Date();
    console.log(start);

    //dag van de week
    console.log((start.getDay()))

    //maand
    console.log(start.getMonth()+1);

    //jaar
    console.log(start.getFullYear());

    //dag
    console.log(start.getDate());

    console.log(start.getDate()+ "-"
    + (start.getMonth()+1)+"-"
    +start.getFullYear()+" "+start.getHours()
    +":"+start.getMinutes() +":" +start.getSeconds());


    let datum =new Date(2024,0,1);
    console.log(datum);

    let event= new Date()

    console.log("toString "+event.toString());

    //Iso het eerder een notatieconventie voor het weergeven van tijdstippen
    console.log("toISOString "+datum.toISOString());
    console.log("toDateString "+event.toDateString());
    console.log("toTimeString "+event.toTimeString());


    let geboortedatum = new Date(2005,9,6);
    let systeemtijd = new Date();

    console.log((systeemtijd.getTime()-geboortedatum)/1000/60/60/24);
    console.log("geboortedatum was een "+geboortedatum.getDay());
}
window.addEventListener("load", setup);
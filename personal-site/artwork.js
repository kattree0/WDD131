//localStorage.clear();

//makes it so objects get turned into string
function setLocalStorage(key,data){
return localStorage.setItem(key,JSON.stringify(data));
}

function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

//here's to hoping this class works,, I havent written a class in about 3 years
class NewArtwork{
    constructor(title, link, alt, date,time,program,desc ) {
        this.title = title;
        this.link = link;
        this.alt = alt;
        this.date = date;
        this.time = time;
        this.program = program;
        this.desc = desc;
    }
}

const form = document.querySelector("#artwork-form");

//let z = new NewArtwork(form.name.value, form.artLink.value, form, form.date.value, form.time.value, form.program.value, form.desc.value);
//localStorage.clear(); //remove later pls

z = new NewArtwork("test","link","alt","date","time","program","yourmom");

function storeNewArtwork(){
    let newArt = new NewArtwork(form.name.value, form.artLink.value, form, form.date.value, form.time.value, form.program.value, form.desc.value);
    setLocalStorage("artwork_"+newArt.title, newArt);

}


function artworkHTML(name,link,alt,date,time,program,desc){
    return `
            <h2>${name}</h2>
            <img src="${link}" alt="${alt}">
            <p>${desc}</p>
            <h3>Completed: ${date}. Time taken: ${time}. Drawn in ${program}</h3>
        `;
}


function renderArtworks(artworks){
    artworks.forEach(function(artwork,index){
       let art = artworkHTML(artwork.title, artwork.link, artwork.alt, artwork.date, artwork.time, artwork.program, artwork.desc);
       let artDiv = document.createElement('div');
       artDiv.innerHTML = art; 
       if (document.querySelector(".artworks")){
       document.querySelector(".artworks").appendChild(artDiv);}
    });
}


//come back and understand FULLY how this works pls
function getArtworks(){
    let artworks = [];

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i); 
        let value = localStorage.getItem(key);

        if (/^artwork/.test(key)) {
            value = getLocalStorage(key, value);
            
            artworks.push(value);
        }
    }

    console.log("this ran :L")
    console.log(artworks);
    return artworks;
}


if (form){
form.addEventListener('submit', storeNewArtwork);}
renderArtworks(getArtworks());


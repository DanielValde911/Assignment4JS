//Make "generate button" output the fun fact
document.querySelector("#generate").onclick = function(){
    const p = document.querySelector("#fact");
    getFact(p);
    getImage()
    
}
function getFact(p){
    //Connection to cat fact generator api 
    fetch('https://catfact.ninja/fact')
    .then(res => {return res.json();})
    .then(data => {
        //console.log(data)
        p.innerText = JSON.stringify(data.fact);
    })
    .catch(error => console.log(error));
}
//Here we get the images 
function getImage(){
let client_id = "pPgTpYbpF1vsPRQyncP1tmuMxo5rjn2IUx6bkeFfwkc"
let endPoint = `https://api.unsplash.com/photos/random?query=cat&client_id=${client_id}`;

let imageElement = document.querySelector("#catImage");
let creator = document.querySelector("#creator");

fetch(endPoint)
.then(res => {return res.json();})
.then(data => {
    //console.log(data)
    imageElement.src = data.urls.regular;
    
    creator.innerText = data.user.name;
    creator.setAttribute("href", data.links.html);
})
.catch(error => console.log(error))
}


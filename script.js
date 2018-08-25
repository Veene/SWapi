
// node.nodeValue="new value";


function generateSW() {
    let climate = document.getElementById("climate");
    let population = document.getElementById("population");
    let name = document.getElementById("name");
    let x = Math.floor(Math.random() * 60 + 1)
    let url = `https://swapi.co/api/planets/${x}/`

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(swapi) {
        console.log(url);
        console.log(swapi.name);
        console.log(swapi.climate);
        console.log(swapi.population);
        name.innerText=`${swapi.name}`
        climate.innerText=`${swapi.climate}`
        population.innerText=`${swapi.population}`
    }).catch (function(err) {
        console.log("error", err)
        })
    
    
    }
let button = document.getElementById("button");    

button.addEventListener("click", generateSW);
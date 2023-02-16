let dataArray = [];

// Use the jQuery $.ajax() function to load the data from the JSON file

let body = document.getElementById("indexBody")

const displayDetail = function (id){

}

$(document).ready(function(){
    $.ajax({
        url: "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
        dataType: "json",
        success: function(data) {
            // If the request was successful, store the loaded data into the array
            dataArray = data;
            dataArray.pokemon.forEach(curr => {
                currImg = curr.img
                const pokemonCard =  document.createElement('div')
                pokemonCard.id = "pokemonCard"
                pokemonCard.setAttribute("class","pokemonCard")
                const image = document.createElement('img')
                image.src = currImg

                let currNum = "#"  + curr.num
                let disNum = document.createElement('span')
                disNum.style.fontSize = "1.5vw"
                disNum.innerHTML = currNum

                let pokeName = curr.name;
                let disPokeName = document.createElement('span')
                disPokeName.setAttribute("class" ,"left-align")
                disPokeName.setAttribute("id", "pokeName")
                disPokeName.innerHTML = pokeName
                pokemonCard.append(image)
                pokemonCard.append(disNum)
                pokemonCard.append(disPokeName)
                pokemonCard.setAttribute("id", curr.num)
                pokemonCard.setAttribute("onClick", "displayDetail(id)")
                //gets the type and displays for each Pokemon
                let types = []
                let i = 0;
                curr.type.forEach(currType =>{
                    let disType = document.createElement('div')
                    disType.setAttribute("class", "typeBox")
                    disType.innerHTML = currType.toString()
                    if(currType == "Grass"){
                        disType.style.backgroundColor = "green"
                    }
                    if(currType == "Poison"){
                        disType.style.backgroundColor = "purple"
                    }
                    if(currType == "Fire"){
                        disType.style.backgroundColor = "Orange"
                    }
                    if(currType == "Water"){
                        disType.style.backgroundColor = "Blue"
                    }
                    if(currType == "Electric"){
                        disType.style.backgroundColor = "Yellow"
                    }
                    if(currType == "Normal"){
                        disType.style.backgroundColor = "lightgray"
                    }
                    if(currType == "Ghost"){
                        disType.style.backgroundColor = "mediumpurple"
                    }
                    if(currType == "Flying"){
                        disType.style.backgroundColor = "skyblue"
                    }
                    if(currType == "Fighting"){
                        disType.style.backgroundColor = "Red"
                    }
                    if(currType == "Ground"){
                        disType.style.backgroundColor = "Brown"
                    }
                    if(currType == "Rock"){
                        disType.style.backgroundColor = "saddlebrown"
                    }
                    if(currType == "Psychic"){
                        disType.style.backgroundColor = "rebeccapurple"
                    }
                    if(currType == "Ice"){
                        disType.style.backgroundColor = "lightskyblue"
                    }
                    if(currType == "Bug"){
                        disType.style.backgroundColor = "darkgreen"
                    }
                    if(currType == "Steel"){
                        disType.style.backgroundColor = "slategray"
                    }
                    if(currType == "Dragon"){
                        disType.style.backgroundColor = "dodgerblue"
                    }
                    if(currType == "Dark"){
                        disType.style.backgroundColor = "darkslateblue"
                    }
                    if(currType == "Fairy"){
                        disType.style.backgroundColor = "pink"
                    }
                    pokemonCard.appendChild((disType))
                })
                document.getElementById("indexBody").append(pokemonCard)
            })
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
        }
    });
})

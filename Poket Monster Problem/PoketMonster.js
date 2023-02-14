let dataArray = [];

// Use the jQuery $.ajax() function to load the data from the JSON file

let body = document.getElementById("indexBody")

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

                let pokeName = curr.name;
                let disPokeName = document.createElement('span')
                disPokeName.setAttribute("class" ,"left-align")
                disPokeName.setAttribute("id", "pokeName")
                disPokeName.innerHTML = pokeName


                pokemonCard.append(image)
                pokemonCard.append(disPokeName)
                document.getElementById("indexBody").append(pokemonCard)
            })
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
        }
    });
})

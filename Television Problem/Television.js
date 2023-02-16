window.onload = () => {
    window.setTimeout(doIt, 1500);
    console.log("done")
}

function disSeason(id){
    console.log(id)
    document.getElementById("searchResults").style.visibility = "hidden"
    document.getElementById("seasonRes").style.visibility = "visible"

    fetch(" https://api.tvmaze.com/shows/" + id + "/seasons")
        .then(response => response.json())
        .then(data =>{
            data.forEach(currSeason =>{
                let newOption = document.createElement("option")
                newOption.setAttribute("id", "show" + id)
                newOption.innerHTML = "Season " + currSeason.number
                document.getElementById("selectedSeason").append(newOption)
            })
            document.getElementById("selectedSeason").setAttribute("onchange", "showSelectedSeason(" + id + ")");
        })


}



function showSelectedSeason(id){
    console.log(id)
    document.getElementById("seasonRes").style.visibility = "visible"
    let number = document.getElementById("selectedSeason").value.toString().substring(7)
    let season = 1;
    fetch(" https://api.tvmaze.com/shows/" + id + "/seasons")
        .then(response => response.json())
        .then(data =>{
            data.forEach(currSeason =>{
               if(currSeason.number == number){
                   season = currSeason.id
                   fetch("https://api.tvmaze.com/seasons/" + season +"/episodes")
                       .then(response => response.json())
                       .then(shows =>{
                           document.getElementById("disShows").innerHTML = " "
                           console.log(shows)
                           shows.forEach(currShow =>{
                               let disShow = document.createElement("div")
                               let showImg = document.createElement("img")

                               let epName = document.createElement("p")
                               epName.innerHTML = "Season " + currShow.season + ", Episode " + currShow.number + ", " + currShow.name
                               epName.style.webkitTextFillColor = "white"
                               disShow.append(epName)

                               showImg.src = currShow.image.medium
                               showImg.style.height = "400px";
                               showImg.style.width = "600px"
                               disShow.append(showImg)

                               let showSum = document.createElement("p")
                               showSum.innerHTML = currShow.summary;
                               showSum.style.webkitTextFillColor = "white"
                               disShow.append(showSum)
                               disShow.style.border = "solid white 5px"
                               disShow.style.marginTop = "10px"


                               document.getElementById("disShows").append(disShow)
                           })

                       })
               }
            })
        })


}

function showSearch(){
    let search = document.getElementById("searchShow").value
    document.getElementById("allShows").style.visibility = "hidden"

    fetch("https://api.tvmaze.com/search/shows?q=" + search)
        .then(response => response.json())
        .then(data => {
            data.forEach(currShow => {
                console.log(currShow)
                let showName = currShow.show.name
                let disShow = document.createElement('div')
                disShow.setAttribute("class", "netShow")

                let img = document.createElement('img')
                img.src = currShow.show.image.medium

                let showNameDis = document.createElement('p1')
                showNameDis.innerHTML = currShow.show.name

                disShow.setAttribute("id", currShow.show.id)
                disShow.append(img)
                disShow.append(showNameDis)
                disShow.setAttribute("onClick", "disSeason(id)")
                document.getElementById("searchResults").append(disShow)
            })
        })
}


doIt = () => {
    fetch("http://api.tvmaze.com/shows")
        .then(response => response.json())
        .then(data => {
            console.log(data); // example: log the data to the console
            // do something with the data
            data.forEach(currShow =>{
                let nameCat = currShow.name.toString().substring(0, 1).toLowerCase()
                console.log(nameCat)
                //let rightCat = document.getElementById(nameCat + "Movies")
                let disShow = document.createElement('div')
                disShow.setAttribute("class", "netShow")

                let img = document.createElement('img')
                img.src = currShow.image.medium

                let showName = document.createElement('p1')
                showName.innerHTML = currShow.name

                disShow.append(img)
                disShow.appendChild(showName)
                document.getElementById(nameCat + "Movies").append(disShow)
            })

        })
        .catch(error => {
            console.error(error); // handle the error
        });
};
window.onload = () => {
    window.setTimeout(doIt, 1500);
    console.log("done")
}

function showSearch(){

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
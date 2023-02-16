
let bodyDiv = document.getElementById("content")

let users = []
function filterName(){
    let inputSearch = document.getElementById("filter").value
    console.log(users)
    document.getElementById("content").innerHTML = " "
    users.forEach(currUser => {
        let searchFirstName = currUser.name.first.toString()
        if(searchFirstName.includes(inputSearch)){
            console.log("HITS")
            let userCard = document.createElement('div')
            userCard.setAttribute("class", "card")

            //Sets their username
            let userUsername = currUser.login.username
            let disUsername = document.createElement('h4')
            disUsername.setAttribute("class", "center-align")
            disUsername.innerHTML = userUsername

            //sets the user's email
            let userEmail = currUser.email
            let disUserEmail = document.createElement('p1')
            disUserEmail.setAttribute("class", "center-align")
            disUserEmail.innerHTML = userEmail

            //Sets the Image for the card
            let userImg = currUser.picture.large;
            let cardImg = document.createElement('div')
            let img = document.createElement('img')
            img.setAttribute("class", "card-image valign-wrapper")

            //Sets the Name for the card
            let userRealName = currUser.name.title + " " + currUser.name.first + " " + currUser.name.last;
            let cardContent = document.createElement('div')
            cardContent.setAttribute("class", "card-content")
            let name = document.createElement('span')
            name.setAttribute("class", "card-title")
            name.innerHTML = userRealName
            cardContent.append(name)

            //sets the user's DOB
            let userDOB = "Date of Birth: " + currUser.dob.age + " " + currUser.dob.date
            let disDOB = document.createElement('span')
            disDOB.setAttribute("class", "left-align")
            disDOB.innerHTML = userDOB;
            cardContent.append(disDOB)

            //sets the user's location
            let userLoc = currUser.location.city + ", " + currUser.location.state + " " + currUser.location.country
            let disLoc = document.createElement('div')
            disLoc.setAttribute("class", "dispLocation center-align")
            disLoc.innerHTML = userLoc

            //appends all elements into the card
            img.src = userImg;
            userCard.append(disUsername)
            userCard.append(disUserEmail)
            userCard.append(disLoc)
            userCard.append(img)
            userCard.append(cardContent)
            document.getElementById("content").append(userCard)
        }
    })
}


doIt = () => {
    $.ajax({
        url: 'https://randomuser.me/api/?results=500',
        dataType: 'json',
        success: function(data) {
            let i =0;
            data.results.forEach(currUser =>{
                let userCard = document.createElement('div')
                userCard.setAttribute("class", "card")

                //Sets their username
                let userUsername = currUser.login.username
                let disUsername = document.createElement('h4')
                disUsername.setAttribute("class", "center-align")
                disUsername.innerHTML = userUsername

                //sets the user's email
                let userEmail = currUser.email
                let disUserEmail = document.createElement('p1')
                disUserEmail.setAttribute("class", "center-align")
                disUserEmail.innerHTML = userEmail

                //Sets the Image for the card
                let userImg = currUser.picture.large;
                let cardImg = document.createElement('div')
                let img = document.createElement('img')
                img.setAttribute("class", "card-image valign-wrapper")

                //Sets the Name for the card
                let userRealName = currUser.name.title + " " + currUser.name.first + " " + currUser.name.last;
                let cardContent = document.createElement('div')
                cardContent.setAttribute("class", "card-content")
                let name = document.createElement('span')
                name.setAttribute("class", "card-title")
                name.innerHTML = userRealName
                cardContent.append(name)

                //sets the user's DOB
                let userDOB = "Date of Birth: " + currUser.dob.age + " " + currUser.dob.date
                let disDOB = document.createElement('span')
                disDOB.setAttribute("class", "left-align")
                disDOB.innerHTML = userDOB;
                cardContent.append(disDOB)

                //sets the user's location
                let userLoc = currUser.location.city + ", " + currUser.location.state + " " + currUser.location.country
                let disLoc = document.createElement('div')
                disLoc.setAttribute("class", "dispLocation center-align")
                disLoc.innerHTML = userLoc

                //appends all elements into the card
                img.src = userImg;
                userCard.append(disUsername)
                userCard.append(disUserEmail)
                userCard.append(disLoc)
                userCard.append(img)
                userCard.append(cardContent)
                document.getElementById("content").append(userCard)
                users[i] = currUser
                i++;
            })
        },
        error: function (){
            console.log("error")
        }
    });
};

window.onload = () => {
    window.setTimeout(doIt, 1500);
    console.log("done")
}
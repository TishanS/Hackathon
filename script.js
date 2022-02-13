document.querySelector("#api").addEventListener("click", getData)
function getData() {
    fetch("https://api.openbrewerydb.org/breweries")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let ul = document.querySelector("#ul-list")
            data.forEach(element => {
                let li = document.createElement("li")
                li.innerText = `Name: ${element.name}, Type: ${element.brewery_type}, 
                Address: ${element.street},${element.city}, ${element.state}, ${element.country} 
                Website: ${element.website_url}
                Phone: ${element.phone}`
                ul.append(li);

            })
        })
}
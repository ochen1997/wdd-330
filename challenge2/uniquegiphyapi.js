let APIKEY = "vf9ICCGbLNLJRy3N5wmXQto18nUTjbUj"
document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("button").addEventListener("click", (ev) => {
        const search = document.querySelector("#search").value

        // prevent the form from loading
        ev.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=${APIKEY}`
       
        // get url using the api to fetch to turn data into json 
        fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data)
            let fig = document.createElement("figure")
            fig.classList.add("fig")

            let img = document.createElement("img")
            let fc = document.createElement("figcaption")
            fc.classList.add("fc");
            
            img.src = content.data[0].images.downsized.url
            img.alt = content.data[0].title
            fc.textContent = content.data[0].title 
            fig.appendChild(img)
            fig.appendChild(fc)
            let out = document.querySelector(".out")
            out.insertAdjacentElement("afterbegin", fig)
            document.querySelector("#search").value = ""
            

            
        })

        .catch(err =>{
            console.log(err)
        })
    });
}
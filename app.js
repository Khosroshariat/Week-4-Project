
const url = `https://www.omdbapi.com/?apikey=4d3b95cb&s=fast`
const movieListEl = document.querySelector('.movie__loading')
    
async function main(filter){
    
    const data = await fetch(url)
    const movieData = await data.json()
    const movieArray = movieData.Search.slice(0, 6)
    
    if(filter === 'NEW_TO_OLD') {
         movieArray.sort((a, b) => b.Year - a.Year)
    }
    if(filter === 'OLD_TO_NEW') {
         movieArray.sort((a, b) => a.Year - b.Year)
    }

    movieListEl.innerHTML = movieArray.map((user) => getMovies(user)).join("")
}

function filterMovies(event) {
    main(event.target.value)
}

setTimeout (() => {
    main()
}, 1000)


function getMovies(user) {
    return `<div class="movies_lists">               
    <div class="movie__detail">
    <img class="movie__img" src="${user.Poster}" alt="">
    <h4 class="movie__details"> ${user.Title} </h4>
    <h5 class="movie__details">Year: <span> ${user.Year} </span></h5>
    <h5 class="movie__details">Type: <span> ${user.Type} </span></h5>
    </div>
    </div>`
}

async function search(event){
    event.preventDefault()
    const title = document.querySelector('.search__input').value
    const data = await fetch(`https://www.omdbapi.com/?apikey=4d3b95cb&s=${title || ""}`)
    const movieData = await data.json()
    const movieArray = movieData.Search.slice(0, 6)
    movieListEl.innerHTML = movieArray.map((user) => getMovies(user)).join("")
}



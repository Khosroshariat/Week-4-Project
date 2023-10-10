
const url = `https://www.omdbapi.com/?apikey=4d3b95cb&s=fast`
const movieListEl = document.querySelector('.movie__loading')
    
async function main(filter){

    const data = await fetch(url)
    const movieData = await data.json()
    const movieArray = movieData.Search
    movieListEl.innerHTML = movieArray.map((user) => getMovies(user)).join("")
    
    if(filter === 'NEW_TO_OLD') {
        console.log(filter)
        const filterMoviess = movieArray.sort((a, b) => b.Year - a.Year)
        console.log(filterMoviess)
    }
    if(filter === 'OLD_TO_NEW') {
        console.log(filter)
        const filterMoviess = movieArray.sort((a, b) => a.Year - b.Year)
        console.log(filterMoviess)
    }
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
      <h4 class="movie__details">Movie title: ${user.Title} </h4>
      <h4 class="movie__details">Year: <span> ${user.Year} </span></h4>
      <h4 class="movie__details">Type: <span> ${user.Type} </span></h4>
   </div>
</div>`
}

async function search(event){
    const title = event.target.value
    const data = await fetch(`https://www.omdbapi.com/?apikey=4d3b95cb&s=${title || ""}`)
    const movieData = await data.json()
    const movieArray = movieData.Search.slice(0,6)
    movieListEl.innerHTML = movieArray
    .map((user) => getMovies(user)).join("")
}


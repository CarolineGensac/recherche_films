
// Utilisez getElementById pour sélectionner les éléments avec un ID
const searchInput = document.getElementById("inputText");
const searchButton = document.getElementById("buttonToSearch");
const searchResult = document.getElementById("results");

async function getMovies() {

  const searchTerm = searchInput.value
  const res = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=aa77933b`);
  
  const data = await res.json();
  displayMovies(data.Search);
}

// Appelez la fonction getMovies lorsque le bouton est cliqué
searchButton.addEventListener("click", getMovies);



// btnSearch.addEventlistener("click", () => {
//   let prompt = inputText.value;
//   getMovies(prompt);
// })


function displayMovies(movies) {
  searchResult.innerHTML = ""; // Efface le contenu précédent avant d'afficher les nouveaux résultats

  if (!movies || movies.length === 0) {
    searchResult.innerHTML = "Aucun résultat trouvé.";
    return;
  }


  movies.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie"); // ajoute la classe CSS "movie" à l'élément div 

    const titleElement = document.createElement("h2");
    titleElement.textContent = movie.Title;

    const posterElement = document.createElement("img");
    posterElement.src = movie.Poster;

    const yearElement = document.createElement("p");
    yearElement.textContent = `Year: ${movie.Year}`;

    movieElement.appendChild(titleElement);
    movieElement.appendChild(posterElement);
    movieElement.appendChild(yearElement);

    searchResult.appendChild(movieElement);
  });
}


let content = document.querySelector(".movieContent");
let posters = document.querySelector("#poster");
let movieName = document.querySelector("#name");
let description = document.querySelector("#description");
let heart = document.getElementById("heart");

let posters1 = document.querySelector("#poster1");
let movieName1 = document.querySelector("#name1");

//array for storing searched movies
let moviesList = [];

//array for storing favorite movies
let favoriteMovies = [];

// input value handler in search bar
const getInputValue = () => {
  var currentMovie = document.querySelector("#searchInputBox").value;

  getMovies(currentMovie).then((data) => {
    if (data.Response === "False") {
      console.log("error");
    } else {
      movieName.innerHTML = `${data.Title}`;
      description.innerHTML = `${data.Plot}`;

      let html = `<img src="${data.Poster}"/>`;
      posters.innerHTML = html;

      moviesList.push(data);
      heart.style.color = "green";
      localStorage.setItem("search", JSON.stringify(moviesList));
    }
  });

  return currentMovie;
};

//adding click functionality to search btn
let searchBtn = document
  .getElementById("searchBtn")
  .addEventListener("click", getInputValue);

let movie = getInputValue();
async function getMovies(movie) {
  const response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=7ff267b9&t=${movie}`
  );

  if (response) {
    const data = await response.json();
    return data;
  } else {
    console.log("error loading movies");
  }
}

//heart icon handler
function handleHeart() {
  if (heart.style.color === "green") {
    heart.style.color = "red";
    favoriteMovies.push(moviesList[moviesList.length - 1]);
    localStorage.setItem("favorite", JSON.stringify(favoriteMovies));
  } else {
    heart.style.color = "green";
  }
  console.log("heart");
}

document.getElementById("heart").addEventListener("click", handleHeart);

console.log(moviesList);

//tooltip over heart icon
var tooltip = document.getElementById("tooltip");
heart.addEventListener(
  "mouseover",
  () => {
    tooltip.style.display = "block";
    tooltip.style.opacity = "1";
  },
  false
);
heart.addEventListener(
  "mouseleave",
  () => {
    tooltip.style.display = "none";
    tooltip.style.opacity = "0";
  },
  false
);

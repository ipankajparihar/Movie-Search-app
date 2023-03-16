//taking value from locally stored array
var moviesL = localStorage.getItem("search");
var moviesList = JSON.parse(moviesL);
var favoriteM = localStorage.getItem("favorite");
var favoriteMovies = JSON.parse(favoriteM);
console.log(moviesList.length);
console.log(favoriteMovies.length);

let content1 = document.querySelector(".movieContent1");
let posters1 = document.querySelector("#poster1");
let movieName1 = document.querySelector("#name1");
let description1 = document.querySelector("#plot1");
let actor1 = document.querySelector("#actor1");
let duration1 = document.querySelector("#duration1");
let release1 = document.querySelector("#releseDate1");
let rating1 = document.querySelector("#rating1");
let awards1 = document.querySelector("#awards1");
let director1 = document.querySelector("#director1");
let writer1 = document.querySelector("#writer1");

var data = moviesList[moviesList.length - 1];

//writing in html elements in movie page
movieName1.innerHTML = `${data.Title}`;
description1.innerHTML = `${data.Plot}`;

let html = `<img id="posterImg" src="${data.Poster}"/>`;
posters1.innerHTML = html;

duration1.innerHTML = `Duration ${data.Runtime}`;
actor1.innerHTML = `Actors: ${data.Actors}`;
release1.innerHTML = `Released: ${data.Released}`;
rating1.innerHTML = `IMDB rating: <span>${data.imdbRating}</span>`;
awards1.innerHTML = `Awards: ${data.Awards}`;
writer1.innerHTML = `Writer: ${data.Writer}`;

//taking access of locally stored movie list array
var moviesL = localStorage.getItem("search");
var moviesList = JSON.parse(moviesL);
var favoriteM = localStorage.getItem("favorite");
var favoriteMovies = JSON.parse(favoriteM);
console.log(moviesList.length);
console.log(favoriteMovies.length);
var item;

var listOfMovies = document.getElementById("listOfMovies");

var list = document.createElement("ul");

//making list from favorite movie list
function listMaking() {
  for (var i = 0; i < favoriteMovies.length; i++) {
    var listItem = document.createElement("li");

    var poster = document.createElement("div");
    let html = `<img src="${favoriteMovies[i].Poster}"/>`;
    poster.innerHTML = html;

    var name1 = document.createElement("span");
    name1.innerHTML = `${favoriteMovies[i].Title}`;

    var rating = document.createElement("span");
    rating.innerHTML = `${favoriteMovies[i].imdbRating}`;

    var rmBtn = document.createElement("i");
    rmBtn.setAttribute("class", "fa fa-light fa-trash removeBtn");
    rmBtn.setAttribute("value", `${favoriteMovies[i].Title}`);

    listItem.appendChild(poster);
    listItem.appendChild(name1);
    listItem.appendChild(rmBtn);

    list.appendChild(listItem);
  }

  listOfMovies.appendChild(list);
}

listMaking();

// adding remove btn event listner to every list item

let removeBtn = document.getElementsByClassName("removeBtn");

for (i = 0; i < favoriteMovies.length; i++) {
  removeBtn[i].addEventListener("click", function () {
    console.log(this.getAttribute("value"));

    removeItem1(this.getAttribute("value"));
    window.location.reload();
  });
}

//to remove movie from favorite list
function removeItem1(item) {
  var newArray = favoriteMovies.filter((i) => item !== i.Title);
  localStorage.setItem("favorite", JSON.stringify(newArray));
}

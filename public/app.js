// var app = function(){
//
// // create new parent ul.
// let newCat = document.createElement("ul");
//   newCat.classList.add("cat");
//   //create first child of ul, li with cat name
//
//   let catName = document.createElement("li");
//     catName.innerText = "Name: Boba";
//   // create second child of ul, li with favouriteFood.
//   let favouriteFood = document.createElement("li");
//     favouriteFood.innerText = "Favourite food: Sock fluff" ;
//     // create image tag within the third li element.
//   let imageLi = document.createElement("li");
//     imageLi.innerHTML = "<img width= 500 src=/http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg>";
//
//     // append li elements to the parent element.
//     newCat.appendChild(catName);
//     newCat.appendChild(favouriteFood);
//     newCat.appendChild(imageLi);
//     let cats = document.querySelector("#cats");
//     cats.appendChild(newCat);
// };
//
// window.onload = app;

var cats_array = [
  { name: "Boba", favFood: "Sock Fluff", image: "<img width=500 src=http://buildingontheword.org/wp-content/uploads/2016/08/cat.jpg>" },
  { name: "Barnaby", favFood: "Tuna", image: "<img width=500 src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4w4rsxwalg9pL1uPmfwvucBrnIYCbxg8H7s0Vkz2_ukBfkD_>" },
  { name: "Max", favFood: "Whiskas Temptations", image: "<img width=500 src=https://i.pinimg.com/originals/e6/6d/db/e66ddbe6925551552200514fe8d114bc.jpg>" }
];

var app = function(){
  for (var cats of cats_array) {
    addCat(cats.name, cats.favFood, cats.image);
  }
}

var addCat = function(name, favFood, image) {
var newCat = createUl();
var catName = createNameLi(name);
var catFood = createFoodLi(favFood);
var imageLi = createImageli(image);

appendElements(newCat, catName, catFood, imageLi);
}

    const appendElements = function(newCat, catName, favouriteFood, imageLi){
    // append li elements to the parent element.
    let cats = document.querySelector("#cats");
    cats.appendChild(newCat);
    newCat.appendChild(catName);
    newCat.appendChild(favouriteFood);
    newCat.appendChild(imageLi);
  };

const createUl = function(){
let newCat = document.createElement("ul");
  newCat.classList.add("cat");
  newCat.style.listStyle = "none";
  return newCat;
};

const createNameLi = function(name){
  let catName = document.createElement("li");
    catName.innerText = "Name: " + name;
    return catName;
  };

  const createFoodLi = function(food){
  let favouriteFood = document.createElement("li");
    favouriteFood.innerText = "Favourite food: " + food;
    return favouriteFood;
  };

const createImageli = function(image){
  let imageLi = document.createElement("li");
    imageLi.innerHTML = image;
    return imageLi;
  };

window.onload = app;

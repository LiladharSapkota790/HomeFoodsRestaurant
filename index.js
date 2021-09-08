

function myfunction(){
const element = document.getElementById("breakfast-menu");
document.getElementById("breakfast-menu-show").innerHTML =  element.innerHTML;

}

function mydinner(){
const mydinner= document.getElementById('dinner-menu');
document.getElementById("breakfast-menu-show").innerHTML= mydinner.innerHTML;
document.getElementById("breakfast-menu").style.addClass("hidden");

}

function mylunch(){
const mylunch= document.getElementById("lunch-menu");
document.getElementById("breakfast-menu-show").innerHTML = mylunch.innerHTML;
}



function mydrink() {
const drinks= document.getElementById("drinks-menu");
document.getElementById("breakfast-menu-show").innerHTML =  drinks.innerHTML;
}

function dessert(){

const mydessert= document.getElementById("dessert-menu");
document.getElementById("breakfast-menu-show").innerHTML = mydessert.innerHTML;
}

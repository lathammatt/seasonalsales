"use strict";

var season = document.getElementById("seasons");
var prods = new XMLHttpRequest();
var sales = new XMLHttpRequest();

prods.addEventListener("load", loadedFile);
sales.addEventListener("load", loadedFile);

prods.open("GET", "products.json");
prods.send();
sales.open("GET", "categories.json");
sales.send();

var mainlist = 0;
var adjustments;
function loadedFile(){
	mainlist = JSON.parse(prods.responseText);
	adjustments = JSON.parse(sales.responseText);
	applyDom(mainlist, adjustments);
};

function applyDom (thing, obj2){
	for (var i = 0; i < thing.products.length; i++) {
		var change = adjustments.categories
		var mainMenu = document.createElement("div");
		mainMenu.className = "menu";
		document.getElementById("output").appendChild(mainMenu);
		mainMenu.appendChild(document.createTextNode(thing.products[i].name));
		var dept = document.createElement("div");
		dept.className = "dept";
		mainMenu.appendChild(dept);
		if (thing.products[i].category_id === 1){
			dept.appendChild(document.createTextNode("Department: " + change[0].name));
		} else if (thing.products[i].category_id === 2){
			dept.appendChild(document.createTextNode("Department: " + change[1].name));
		} else {
			dept.appendChild(document.createTextNode("Department: " + change[2].name))
		};
		var price = document.createElement("div");
		price.className = "price";
		price.classList.add(`${thing.products[i].category_id}`);
		dept.appendChild(price);
		price.appendChild(document.createTextNode((thing.products[i].price).toFixed(2)));
	};
};


function doDiscount(whichSeason, object, adjustments) {
	var main = document.getElementById("output");
	// because doing "var newPrices = object" still causes memory to refer to original memory to refer to object each time, we must take the original object make it into a string and then make it into a whole new object with no references to the previous here:
	var newPrices = (JSON.parse(JSON.stringify(object)));
	main.innerHTML = '';
	if (whichSeason === "winter"){
		for (var i = 0; i < object.products.length; i++){
			if (object.products[i].category_id === 1){
				var round = object.products[i].price - (object.products[i].price * adjustments.categories[0].discount);
				newPrices.products[i].price = round;

			};
		};
	} else if (whichSeason === "autumn"){
		for (var i = 0; i < object.products.length; i++){
			if (object.products[i].category_id === 2){
				var round = object.products[i].price - (object.products[i].price * adjustments.categories[1].discount);
				newPrices.products[i].price = round;

			};
		};
	} else if (whichSeason === "spring"){
		for (var i = 0; i < object.products.length; i++){
			if (object.products[i].category_id === 3){
				var round = object.products[i].price - (object.products[i].price * adjustments.categories[2].discount);
				newPrices.products[i].price = round;
			};
		};
	};
	applyDom(newPrices, adjustments)
};

season.addEventListener("change", function(event){
	if (season.value === "winter"){
		doDiscount("winter", mainlist, adjustments)
	} 
	else if (season.value === "autumn"){
		doDiscount("autumn", mainlist, adjustments)
	} 
	else if (season.value === "spring"){
		doDiscount("spring", mainlist, adjustments)
	} 
	else {
		var main = document.getElementById("output");
		main.innerHTML = '';
		applyDom(mainlist, adjustments)};
});


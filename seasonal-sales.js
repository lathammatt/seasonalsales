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
	console.log("test", mainlist);
	console.log("adjust", adjustments);
};

function applyDom (object, obj2){
	for (var i = 0; i < object.products.length; i++) {
		var firstPart = mainlist.products[i];
		var change = adjustments.categories
		console.log("change", adjustments);
		var mainMenu = document.createElement("div");
		mainMenu.className = "menu";
		document.getElementById("output").appendChild(mainMenu);
		mainMenu.appendChild(document.createTextNode(firstPart.name));
		var dept = document.createElement("div");
		dept.className = "dept";
		mainMenu.appendChild(dept);
		if (firstPart.category_id === 1){
			dept.appendChild(document.createTextNode("Department: " + change[0].name));
		} else if (firstPart.category_id === 2){
			dept.appendChild(document.createTextNode("Department: " + change[1].name));
		} else {
			dept.appendChild(document.createTextNode("Department: " + change[2].name))
		};
		var price = document.createElement("div");
		price.className = "price";
		dept.appendChild(price);
		price.appendChild(document.createTextNode(firstPart.price));
		// season.addEventListener("change", function(event){
		// 	if (season.value === "winter" && firstpart.category_id === 1){
		// 		price.appendChild(document.createTextNode(change[0].discount * firstpart.price));
		// 	}
		// });


	console.log("reaching", object);
	};

};

// for category-id of blank, display category
// if index.value === 1
// if select is blank, then all products in blank should be reduced by blank
// 
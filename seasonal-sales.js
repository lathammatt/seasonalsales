"use strict";
// pull from json files
// prodcuts, department, price
//
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
		mainMenu.appendChild(dept);
		if (firstPart.category_id === 1){
			dept.appendChild(document.createTextNode(adjustments.categories[0].name))
		}
	console.log("reaching", object);
	};

};

// for category-id of blank, display category
// if index.value === 1
// if select is blank, then all products in blank should be reduced by blank
// 
"use strict";
// pull from json files
// prodcuts, department, price
//
var season = document.getElementById("seasons");
var prods = new XMLHttpRequest();
var sales = new XMLHttpRequest();

prods.addEventListener("load", loadedFile);
sales.addEventListener("load", loaded2File);

prods.open("GET", "products.json");
prods.send();
sales.open("GET", "categories.json");
sales.send();

var mainlist = 0;
var adjustments = 0;
function loadedFile(){
	mainlist = JSON.parse(prods.responseText);
	applyDom(mainlist);
	console.log("test", mainlist);
};

function loaded2File(){
	adjustments = JSON.parse(sales.responseText);
	console.log("adj", adjustments);
};



function applyDom (object){
	for (var i = 0; i < object.products.length; i++) {
		var firstPart = mainlist.products[i];
		var mainMenu = document.createElement("div");
		mainMenu.className = "menu";
		document.getElementById("output").appendChild(mainMenu);
		mainMenu.appendChild(document.createTextNode(firstPart.name));
		var dept = document.createElement("div");
		mainMenu.appendChild(dept);
		if (firstPart.category_id === 1){
			
		}
	console.log("reaching", object);
	};

};

// for category-id of blank, display category
// if index.value === 1
// if select is blank, then all products in blank should be reduced by blank
// 
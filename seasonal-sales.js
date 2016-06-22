"use strict";
// pull from json files
// prodcuts, department, price
//

var prods = new XMLHttpRequest();
var sales = new XMLHttpRequest();

prods.addEventListener("load", loadedFile);
sales.addEventListener("load", );

prods.open("GET", "products.json");
prods.send();
sales.open("GET", "categories.json");
sales.send();

var mainlist;
function loadedFile(){
	mainlist = JSON.parse(prods.responsetext);
	applyDom(mainlist);
};


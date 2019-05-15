var strona = "";

var i1 = "img src=\"imgs/img1.jpg\" onclick=\"photo(i1)\""
var i2 = "img src=\"imgs/img2.jpg\" onclick=\"photo(i2)\""
var i3 = "img src=\"imgs/img3.jpg\" onclick=\"photo(i3)\""
var i4 = "img src=\"imgs/img4.jpg\" onclick=\"photo(i4)\""

function galeria() {
    strona = document.getElementById("all").innerHTML;
    document.getElementById("all").innerHTML = "<div class=\"pojemnik\"><div class=\"meni\" id = \"menue\" ><div id=\"img_main\"><" + i1 + "></img></div><div id=\"img_min\"><" + i1 + "></img><" + i2 + "></img><" + i3 + "></img><" + i4 +"></img></div><button type=\"button\" class=\"menu\" onclick=\"js:wroc()\">Powrót</button></div></div>";
}

var ip1 = "img src=\"../imgs/img1.jpg\" onclick=\"photo(ip1)\""
var ip2 = "img src=\"../imgs/img2.jpg\" onclick=\"photo(ip2)\""
var ip3 = "img src=\"../imgs/img3.jpg\" onclick=\"photo(ip3)\""
var ip4 = "img src=\"../imgs/img4.jpg\" onclick=\"photo(ip4)\""

function galeria_pod() {
    strona = document.getElementById("all").innerHTML;
    document.getElementById("all").innerHTML = "<div class=\"pojemnik\"><div class=\"meni\" id = \"menue\" ><div id=\"img_main\"><" + ip1 + "></img></div><div id=\"img_min\"><" + ip1 + "></img><" + ip2 + "></img><" + ip3 + "></img><" + ip4 + "></img></div><button type=\"button\" class=\"menu\" onclick=\"js:wroc()\">Powrót</button></div></div>";
}

function wroc() {
    document.getElementById("all").innerHTML = strona;
}

function photo(id) {
    duration: 10000;
    document.getElementById("img_main").innerHTML = "<"+id+">";
}

function ankieta() {
    document.getElementById("forms").innerHTML = "<p>Dziękujemy za wypełnienie ankiety!</p>";
}

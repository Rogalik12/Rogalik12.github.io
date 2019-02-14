var plec = 0;
var odp1= 0;
var odp2= 0;
var odp3= 0;
var odp4= 0;
var odp5= 0;
var odp6= 0;
var odp7= 0;
var odp8= 0;
var odp9= 0;
var odp10= 0;

function un()
{
    plec = 0;
    document.getElementById("k").innerHTML = "<a class=\"button is-light\" onclick=\"k()\"> K </a>";
    document.getElementById("m").innerHTML = "<a class=\"button is-light\" onclick=\"m()\"> M </a>";
    document.getElementById("un").innerHTML = "<a class=\"button is-success\" onclick=\"un()\"> ? </a>";
}

function k()
{
    plec = 1;
    document.getElementById("k").innerHTML = "<a class=\"button is-danger\" onclick=\"k()\"> K </a>";
    document.getElementById("m").innerHTML = "<a class=\"button is-light\" onclick=\"m()\"> M </a>";
    document.getElementById("un").innerHTML = "<a class=\"button is-light\" onclick=\"un()\"> ? </a>";
}

function m()
{
    plec = 2;
    document.getElementById("k").innerHTML = "<a class=\"button is-light\" onclick=\"k()\"> K </a>";
    document.getElementById("m").innerHTML = "<a class=\"button is-info\" onclick=\"m()\"> M </a>";
    document.getElementById("un").innerHTML = "<a class=\"button is-light\" onclick=\"un()\"> ? </a>";
}

function q1y()
{
    odp1 = 0;
    document.getElementById("q1y").innerHTML = "<a class=\"button is-light\" onclick=\"k()\"> K </a>";
    document.getElementById("q1u").innerHTML = "<a class=\"button is-light\" onclick=\"m()\"> M </a>";
    document.getElementById("q1n").innerHTML = "<a class=\"button is-success\" onclick=\"un()\"> ? </a>";
}

function q1u()
{
    odp1 = 1;
    document.getElementById("q1y").innerHTML = "<a class=\"button is-light\" onclick=\"k()\"> K </a>";
    document.getElementById("q1u").innerHTML = "<a class=\"button is-light\" onclick=\"m()\"> M </a>";
    document.getElementById("q1n").innerHTML = "<a class=\"button is-success\" onclick=\"un()\"> ? </a>";
}

function q1n()
{
    odp1 = 2;
    document.getElementById("q1y").innerHTML = "<a class=\"button is-light\" onclick=\"q1y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q1u").innerHTML = "<a class=\"button is-light\" onclick=\"q1y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q1n").innerHTML = "<a class=\"button is-danger\" onclick=\"q1n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}
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
    document.getElementById("q1y").innerHTML = "<a class=\"button is-success\" onclick=\"q1y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q1u").innerHTML = "<a class=\"button is-light\" onclick=\"q1u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q1n").innerHTML = "<a class=\"button is-light\" onclick=\"q1n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q1u()
{
    odp1 = 1;
    document.getElementById("q1y").innerHTML = "<a class=\"button is-light\" onclick=\"q1y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q1u").innerHTML = "<a class=\"button is-info\" onclick=\"q1u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q1n").innerHTML = "<a class=\"button is-light\" onclick=\"q1n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q1n()
{
    odp1 = 2;
    document.getElementById("q1y").innerHTML = "<a class=\"button is-light\" onclick=\"q1y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q1u").innerHTML = "<a class=\"button is-light\" onclick=\"q1u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q1n").innerHTML = "<a class=\"button is-danger\" onclick=\"q1n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q2y()
{
    odp2 = 0;
    document.getElementById("q2y").innerHTML = "<a class=\"button is-success\" onclick=\"q2y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q2u").innerHTML = "<a class=\"button is-light\" onclick=\"q2u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q2n").innerHTML = "<a class=\"button is-light\" onclick=\"q2n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q2u()
{
    odp2 = 1;
    document.getElementById("q2y").innerHTML = "<a class=\"button is-light\" onclick=\"q2y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q2u").innerHTML = "<a class=\"button is-info\" onclick=\"q2u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q2n").innerHTML = "<a class=\"button is-light\" onclick=\"q2n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q2n()
{
    odp2 = 2;
    document.getElementById("q2y").innerHTML = "<a class=\"button is-light\" onclick=\"q2y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q2u").innerHTML = "<a class=\"button is-light\" onclick=\"q2u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q2n").innerHTML = "<a class=\"button is-danger\" onclick=\"q2n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q3y()
{
    odp3 = 0;
    document.getElementById("q3y").innerHTML = "<a class=\"button is-success\" onclick=\"q3y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q3u").innerHTML = "<a class=\"button is-light\" onclick=\"q3u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q3n").innerHTML = "<a class=\"button is-light\" onclick=\"q3n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q3u()
{
    odp3 = 1;
    document.getElementById("q3y").innerHTML = "<a class=\"button is-light\" onclick=\"q3y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q3u").innerHTML = "<a class=\"button is-info\" onclick=\"q3u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q3n").innerHTML = "<a class=\"button is-light\" onclick=\"q3n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q3n()
{
    odp3 = 2;
    document.getElementById("q3y").innerHTML = "<a class=\"button is-light\" onclick=\"q3y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q3u").innerHTML = "<a class=\"button is-light\" onclick=\"q3u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q3n").innerHTML = "<a class=\"button is-danger\" onclick=\"q3n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q4y()
{
    odp4 = 0;
    document.getElementById("q4y").innerHTML = "<a class=\"button is-success\" onclick=\"q4y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q4u").innerHTML = "<a class=\"button is-light\" onclick=\"q4u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q4n").innerHTML = "<a class=\"button is-light\" onclick=\"q4n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q4u()
{
    odp4 = 1;
    document.getElementById("q4y").innerHTML = "<a class=\"button is-light\" onclick=\"q4y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q4u").innerHTML = "<a class=\"button is-info\" onclick=\"q4u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q4n").innerHTML = "<a class=\"button is-light\" onclick=\"q4n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q4n()
{
    odp4 = 2;
    document.getElementById("q4y").innerHTML = "<a class=\"button is-light\" onclick=\"q4y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q4u").innerHTML = "<a class=\"button is-light\" onclick=\"q4u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q4n").innerHTML = "<a class=\"button is-danger\" onclick=\"q4n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q5y()
{
    odp5 = 0;
    document.getElementById("q5y").innerHTML = "<a class=\"button is-success\" onclick=\"q5y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q5u").innerHTML = "<a class=\"button is-light\" onclick=\"q5u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q5n").innerHTML = "<a class=\"button is-light\" onclick=\"q5n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q5u()
{
    odp5 = 1;
    document.getElementById("q5y").innerHTML = "<a class=\"button is-light\" onclick=\"q5y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q5u").innerHTML = "<a class=\"button is-info\" onclick=\"q5u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q5n").innerHTML = "<a class=\"button is-light\" onclick=\"q5n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q5n()
{
    odp5 = 2;
    document.getElementById("q5y").innerHTML = "<a class=\"button is-light\" onclick=\"q5y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q5u").innerHTML = "<a class=\"button is-light\" onclick=\"q5u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q5n").innerHTML = "<a class=\"button is-danger\" onclick=\"q5n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q6y()
{
    odp6 = 0;
    document.getElementById("q6y").innerHTML = "<a class=\"button is-success\" onclick=\"q6y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q6u").innerHTML = "<a class=\"button is-light\" onclick=\"q6u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q6n").innerHTML = "<a class=\"button is-light\" onclick=\"q6n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q6u()
{
    odp6 = 1;
    document.getElementById("q6y").innerHTML = "<a class=\"button is-light\" onclick=\"q6y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q6u").innerHTML = "<a class=\"button is-info\" onclick=\"q6u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q6n").innerHTML = "<a class=\"button is-light\" onclick=\"q6n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q6n()
{
    odp6 = 2;
    document.getElementById("q6y").innerHTML = "<a class=\"button is-light\" onclick=\"q6y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q6u").innerHTML = "<a class=\"button is-light\" onclick=\"q6u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q6n").innerHTML = "<a class=\"button is-danger\" onclick=\"q6n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q7y()
{
    odp7 = 0;
    document.getElementById("q7y").innerHTML = "<a class=\"button is-success\" onclick=\"q7y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q7u").innerHTML = "<a class=\"button is-light\" onclick=\"q7u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q7n").innerHTML = "<a class=\"button is-light\" onclick=\"q7n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q7u()
{
    odp7 = 1;
    document.getElementById("q7y").innerHTML = "<a class=\"button is-light\" onclick=\"q7y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q7u").innerHTML = "<a class=\"button is-info\" onclick=\"q7u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q7n").innerHTML = "<a class=\"button is-light\" onclick=\"q7n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q7n()
{
    odp7 = 2;
    document.getElementById("q7y").innerHTML = "<a class=\"button is-light\" onclick=\"q7y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q7u").innerHTML = "<a class=\"button is-light\" onclick=\"q7u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q7n").innerHTML = "<a class=\"button is-danger\" onclick=\"q7n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q8y()
{
    odp8 = 0;
    document.getElementById("q8y").innerHTML = "<a class=\"button is-success\" onclick=\"q8y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q8u").innerHTML = "<a class=\"button is-light\" onclick=\"q8u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q8n").innerHTML = "<a class=\"button is-light\" onclick=\"q8n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q8u()
{
    odp8 = 1;
    document.getElementById("q8y").innerHTML = "<a class=\"button is-light\" onclick=\"q8y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q8u").innerHTML = "<a class=\"button is-info\" onclick=\"q8u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q8n").innerHTML = "<a class=\"button is-light\" onclick=\"q8n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q8n()
{
    odp8 = 2;
    document.getElementById("q8y").innerHTML = "<a class=\"button is-light\" onclick=\"q8y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q8u").innerHTML = "<a class=\"button is-light\" onclick=\"q8u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q8n").innerHTML = "<a class=\"button is-danger\" onclick=\"q8n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q9y()
{
    odp9 = 0;
    document.getElementById("q9y").innerHTML = "<a class=\"button is-success\" onclick=\"q9y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q9u").innerHTML = "<a class=\"button is-light\" onclick=\"q9u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q9n").innerHTML = "<a class=\"button is-light\" onclick=\"q9n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q9u()
{
    odp9 = 1;
    document.getElementById("q9y").innerHTML = "<a class=\"button is-light\" onclick=\"q9y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q9u").innerHTML = "<a class=\"button is-info\" onclick=\"q9u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q9n").innerHTML = "<a class=\"button is-light\" onclick=\"q9n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q9n()
{
    odp9 = 2;
    document.getElementById("q9y").innerHTML = "<a class=\"button is-light\" onclick=\"q9y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q9u").innerHTML = "<a class=\"button is-light\" onclick=\"q9u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q9n").innerHTML = "<a class=\"button is-danger\" onclick=\"q9n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q10y()
{
    odp10 = 0;
    document.getElementById("q10y").innerHTML = "<a class=\"button is-success\" onclick=\"q10y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q10u").innerHTML = "<a class=\"button is-light\" onclick=\"q10u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q10n").innerHTML = "<a class=\"button is-light\" onclick=\"q10n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q10u()
{
    odp10 = 1;
    document.getElementById("q10y").innerHTML = "<a class=\"button is-light\" onclick=\"q10y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q10u").innerHTML = "<a class=\"button is-info\" onclick=\"q10u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q10n").innerHTML = "<a class=\"button is-light\" onclick=\"q10n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}

function q10n()
{
    odp10 = 2;
    document.getElementById("q10y").innerHTML = "<a class=\"button is-light\" onclick=\"q10y()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-check\"></i></span></a>";
    document.getElementById("q10u").innerHTML = "<a class=\"button is-light\" onclick=\"q10u()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-question\"></i></span></a>";
    document.getElementById("q10n").innerHTML = "<a class=\"button is-danger\" onclick=\"q10n()\"><span class=\"icon is-small is-left\"><i class=\"fas fa-times\"></i></span></a>";
}
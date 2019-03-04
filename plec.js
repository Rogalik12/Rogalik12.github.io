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

function answer (odp,ans){ // odp - odpowiedź użytkownika || ans - numer pytania

    let a = ans[0] + ans[1] + ans[2];

    if(odp == "y")
    {
        document.getElementById(a+"1_i").className = "button is-success";
        document.getElementById(a+"2_i").className = "button is-light";
        document.getElementById(a+"3_i").className = "button is-light";
        
        switch(ans[1])
        {
            case "1" : odp1 = 1; break;
            case "2" : odp2 = 1; break;
            case "3" : odp3 = 1; break;
            case "4" : odp4 = 1; break;
            case "5" : odp5 = 1; break;
            case "6" : odp6 = 1; break;
            case "7" : odp7 = 1; break;
            case "8" : odp8 = 1; break;
            case "9" : odp9 = 1; break;
            case "0" : odp10 = 1;
        }
    }

    if(odp == "u")
    {
        document.getElementById(a+"1_i").className = "button is-light";
        document.getElementById(a+"2_i").className = "button is-info";
        document.getElementById(a+"3_i").className = "button is-light";

        switch(ans[1])
        {
            case "1" : odp1 = 2; break;
            case "2" : odp2 = 2; break;
            case "3" : odp3 = 2; break;
            case "4" : odp4 = 2; break;
            case "5" : odp5 = 2; break;
            case "6" : odp6 = 2; break;
            case "7" : odp7 = 2; break;
            case "8" : odp8 = 2; break;
            case "9" : odp9 = 2; break;
            case "0" : odp10 = 2;
        }
    }

    if(odp == "n")
    {
        document.getElementById(a+"1_i").className = "button is-light";
        document.getElementById(a+"2_i").className = "button is-light";
        document.getElementById(a+"3_i").className = "button is-danger";

        switch(ans[1])
        {
            case "1" : odp1 = 3; break;
            case "2" : odp2 = 3; break;
            case "3" : odp3 = 3; break;
            case "4" : odp4 = 3; break;
            case "5" : odp5 = 3; break;
            case "6" : odp6 = 3; break;
            case "7" : odp7 = 3; break;
            case "8" : odp8 = 3; break;
            case "9" : odp9 = 3; break;
            case "0" : odp10 = 3; break;
        }
    }

    
}
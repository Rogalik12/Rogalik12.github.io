var plec = 0;

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

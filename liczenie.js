function policz() {
  var answer = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < answer.length; i++) {
    if (answer[i].checked) {
      txt = txt + answer[i].value + " ";
    }
  }
  document.getElementById("rezultat").value = " " + txt;
}
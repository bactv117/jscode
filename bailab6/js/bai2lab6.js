var flag = true;
var count = 0;
function mark(index) {
  var but = document.getElementsByTagName("button")[index];
  but.innerText = flag ? "X" : "O";
  but.style.backgroundColor = flag ? "aqua" : "yellow";
  but.setAttribute("disabled", "true");
  flag = !flag;
  count++;
  if (count == 8) {
    alert("GAME OVER!");
    location.reload();
  }
}

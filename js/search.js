document.getElementById("searchBar").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById('searchBar');
  x.value = x.value.toLowerCase();
}
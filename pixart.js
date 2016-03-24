var button = document.querySelector("#set-color");


button.addEventListener ("click",changeTheme)

function changeTheme() {
  var themeClass = this.className;
  document.body.className= themeClass;
}

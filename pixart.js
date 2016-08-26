document.getElementById('set-color').addEventListener("click", function () {
  document.querySelector(".brush").style.background = document.getElementById('color-field').value
})

for (var i = 0; i < 8000; i++) {
  let div = document.createElement("div")
  div.className = "square"
  document.body.appendChild(div)
}

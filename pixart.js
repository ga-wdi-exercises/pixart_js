
var form = document.querySelector('#form')
var button = document.querySelector('#set-color')
var field = document.querySelector('#color-field')
var brush = document.querySelector('.brush')


button.addEventListener("click", function (event){
  event.preventDefault();
  console.log(brush.style.background)

  brush.style.background = field.value
  console.log(brush.style.background)


})

var divs = []

for ( i = 0; i < 8000; i ++){
  var div = document.createElement("div");
  div.setAttribute("class", "square");
  document.body.appendChild(div);
  divs.push(div);

};

for (i = 0; i < divs.length;  i++){
  divs[i].addEventListener("mouseover", function (event){
    // event.preventDefault();
    this.style.background = field.value
  })
}

//
// var color_selector = document.querySelector("#color-field")
//
// userSelectedcolor = color_selector.value
//
//
// var to_change_box_color = document.getElementsByTagName("div")[1]
// to_change_box_color.setAttribute("class" = "brush_black");
//
//
// document.getElementsByTagName("div")

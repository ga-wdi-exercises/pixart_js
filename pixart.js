var color_field = $("#color-field")
var submit = $("#set-color")
var brush = $(".brush")
var body = $("body")
var colors = ["", "", "", ""]
var recentBox = $(".colors div")
var currentColor = colors[0]


var setColor = function(e){
  e.preventDefault()
  colors.unshift(color_field.val())
  brush.css("background", colors[0])
  currentColor = colors[0]
  unactivateColor()
  brush.addClass("activeColor")
  fourColorsCheck()
  setRecentColors()
}

submit.on("click", setColor)
recentBox.on("click", activateColor)
recentBox.on("click", updateCurrentColor)
//submit.on(13, setColor)


for (var i = 0; i < 8000; i++) {
  var square = $("<div></div>")
  square.addClass("square")
  body.append(square)
}

$(".square").on("mouseover", function(){
  $(this).css("background",currentColor)
})

function fourColorsCheck(){
  if (colors.length == 5){
    colors.pop()
  }
}

function setRecentColors(){
  $(".recent-one").css("background", colors[1])
  $(".recent-two").css("background", colors[2])
  $(".recent-three").css("background", colors[3])
}

function updateCurrentColor(){
  currentColor = $(this).css("background")
}

function activateColor(){
  unactivateColor()
  $(this).addClass("activeColor")
}

function unactivateColor(){
  brush.removeClass("activeColor")
  $(".recent-one").removeClass("activeColor")
  $(".recent-two").removeClass("activeColor")
  $(".recent-three").removeClass("activeColor")
}

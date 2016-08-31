$("#form")[0].addEventListener("submit", function(event){
  event.preventDefault()
  $(".brush").css("background",$("#color-field").val())
})

for( var i = 0; i < 8000; i++ ){
  $("body").append($("<div class='square'/>"))
}

document.body.addEventListener("mouseover", function(event){
  if(event.target.classList.contains("square")){
    $(event.target).css("background",$("#color-field").val())
  }
})

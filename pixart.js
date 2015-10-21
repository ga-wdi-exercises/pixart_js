

//1
   $("button").click(function(event){ //gets button and sets function when clicked
     $(".brush").css("background" , "pink") //gets brush and sets background color
     event.preventDefault() //stops the blue default from showing
   })

//2
$("input[type='text']").keyup(function(event){
  $(".brush").css("background" , "pink") //gets same background when enter is pushed in the input section
})

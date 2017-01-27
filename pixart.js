var button = $("button");
$("button").click(function(event){
    event.preventDefault();
});
button.click(function(){
  $(".brush").css("background", $("input:color-field").val()));
})
button.click(function(){
  console.log($("input:color-field").val());
}
)

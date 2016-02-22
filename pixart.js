var button = document.querySelector("button");
var input = document.querySelector("input");

$("button")[0].addEventListener("click", grabInputInfo);

//I want to pull information from input.
function grabInputInfo(){
  console.log(input);
  return input;
}

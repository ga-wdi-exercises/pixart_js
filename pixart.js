$(document).ready(function(){ //need this to make sure the page is loaded before the other jQuery's. since we are drawing 8000 blocks, this may be necessary.

    $("button").on("click", function(evt){
        evt.preventDefault() //prevents the button from sending the information to a form (default action)
        $(".brush").css("background", $("#color-field").val()); //taking the value of the field and storing it into the "brush" which is in the colorfield tag
    });
});

i = 0;
while (i < 8000){
    $("body").append("<div class='square'></div>")  //creating the grid, i found out that you can write the actual HTML inside the append(), use '' because it is inside hte "" quotes. We are selecting the body (where the grid will go)
    i++;
}

$(".square").on("mouseover", function(){  //value (color) of square on the mouseover
    $(this).css("background",$("#color-field").val()); //changing the css background of the "brush" (color-field class) to THIS (which is the block that is being mouseovered)
});

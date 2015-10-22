//set colors for brush and hisory and sets on click
$(document).ready(function(){
  $('#set-color').on('click', function(e){
    e.preventDefault();
    $('.brush').css('background-color', $('#color-field').val())
    var firstBrush = $('.brush').css('background-color')
    var secondBrush = $('#firstHistory').css('background-color')
    var thirdBrush = $('#secondHistory').css('background-color')
    $('#firstHistory').css('background-color', firstBrush)
    $('#secondHistory').css('background-color', secondBrush)
    $('#thirdHistory').css('background-color', thirdBrush)
  })
})
//First History Selector
$(document).ready(function(){
  $('#firstHistory').on('click', function(){
    var firstHistorySelector = $('#firstHistory').css('background-color')
    $('.brush').css('background-color', firstHistorySelector)
  })
})
//Second History Selector
$(document).ready(function(){
  $('#secondHistory').on('click', function(){
    var secondHistorySelector = $('#secondHistory').css('background-color')
    $('.brush').css('background-color', secondHistorySelector)
  })
})

//Third History Selector
$(document).ready(function(){
  $('#thirdHistory').on('click', function(){
    var thirdHistorySelector = $('#thirdHistory').css('background-color')
    $('.brush').css('background-color', thirdHistorySelector)
  })
})

$(document).ready(function(){
    for (i = 0; i < 8000; i++){
      $('body').append("<div class='colorme'></div>")
    }
  })

$(document).ready(function(){
  $('.colorme').css({ "display" : "block", "height" : "10px", "width" : "10px"})
})


$(document).ready(function(){
    $('.colorme').on('click', function(){
    $(this).css('background-color', $('.brush').css('background-color'))
    })
  })


$('#set-color').on('click', function (n) {
   ent.preventDefault()
   var color = $('#color-field').val()
   $('.brush').css('background', color)
 })

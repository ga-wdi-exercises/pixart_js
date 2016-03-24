
var button = document.getElementById('set-color');

// button.addEventListener('click',function(){
//   event.preventDefault();
//   [].forEach.call(document.getElementsByClassName('brush'), function(x,index,a) {
//   x.style.backgroundColor=document.getElementById("color-field").value;
// });
// });


document.addEventListener('mouseover', function(x,index){
  event.preventDefault();

  console.log(this);

  [].forEach.call(document.getElementsByClassName('box'), function(x,index,a) {
    for (var i = 0; i < document.getElementsByClassName('brush').length; i++) {
        document.getElementsByClassName('brush')[i].style.backgroundColor= document.getElementById("color-field").value;
    }
      });



});


function colorChange() {
  console.log(this);

  if(this.className==="controls"){
  } else if (this.className.indexOf('brush')===-1){
  this.className = this.className + " brush";
    }
}

for (var i = 0; i < document.getElementsByClassName('box').length; i++) {
    document.getElementsByTagName('div')[i].addEventListener('mouseover', colorChange, false);
}


document.onmousemove = handleMouseMove;

  function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    if (event.pageX === null && event.clientX !== null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    // Add a dot to follow the cursor
  if(event.pageY>170){
    dot = document.createElement('div');
    dot.className = "box brush";
    dot.style.left = event.pageX + "px";
    dot.style.top = event.pageY + "px";
    document.body.appendChild(dot);
  }

  }

  // document.getElementById('body').append('<div class="brush"></div></div>');

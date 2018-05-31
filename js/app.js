let color = $('.selected').css('background-color');
let $canvas = $('canvas');
let context = $("canvas")[0].getContext("2d");
let lastEvent;
let mouseDown = false;

function changeColor() {
  let r = $('#red').val();
  let g = $('#green').val();
  let b = $('#blue').val();
  let rgb = 'rgb('+r+','+g+','+b+')';
  $("#newColor").css("background-color", rgb);
}


$('.controls').on("click", 'li', function(){
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected');
  color = $(this).css("background-color");
  console.log($('ul').children().length);
});
  
  
  
$('#revealColorSelect').click(function(){
  changeColor();
  $('#colorSelect').toggle();
});

$('input[type=range]').on("input", changeColor);

$('#addNewColor').click(function(){
  let $newColor = $('<li></li>');
  $newColor.css('background-color', $('#newColor').css('background-color'));
  $('.controls ul').append($newColor);
});

$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;  
}).mousemove(function(e){
if(mouseDown){
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX,e.offsetY);
  context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
}  
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});;
console.log('Loaded!');
//Change the text of main text
var element = document.getElementById('main-text');
element.innerHTML='A new Value';
var img=document.getElementById('pic');
var marginLeft=0;
function moveRight(){
   marginLeft=marginLeft+'0.5';
   img.style.marginLeft=marginLeft+'px';
}
img.onclick = function() {
var interval=setInterval(moveRight,50);
};
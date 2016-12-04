console.log('Loaded!');
//Change the text of main text
var element = document.getElementById('main-text');
element.innerHTML='A new Value';
var img=document.getElementById('pic');
img.onclick = function() {
img.style.marginLeft='100px';
};


$(function() {
 
 var fontArray = ["OCR A Std","new alphabet","digi_grotesk_bold_condensedRg","chicago","Lucida","Blur","Arial","Verdana","Georgia"],  
    selectFont = fontArray[Math.floor(Math.random() * fontArray.length)];

[].forEach.call( document.getElementsByTagName('h1'), function(el) {
  el.style.fontFamily = selectFont;
});
 var fontArray = ["OCR A Std","new alphabet","digi_grotesk_bold_condensedRg","chicago","Lucida","Blur","Arial","Verdana","Georgia"],  
    selectFont = fontArray[Math.floor(Math.random() * fontArray.length)];

[].forEach.call( document.getElementsByTagName('h2'), function(el) {
  el.style.fontFamily = selectFont;
});
});
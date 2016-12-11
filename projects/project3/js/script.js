
$(function() {
 $('#navigation > li').hover(
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
  },
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-270px'},200);
  }
 );
 });




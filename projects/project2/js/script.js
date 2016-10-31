// $(document).ready(function() {

//   $("div").hover(
//     //on mouseover
//     function() {
//       $(this).animate({
//         height: '+=20' //adds 250px
        
//         }, 'slow' //sets animation speed to slow
//       );
//     },
//     //on mouseout
//     function() {
//       $(this).animate({
        
//         height: '+=20px' //substracts 250px
//         }, 'slow'
//       );
//     }
//   );

// });

$(document).ready(function() {

$('div').resizable({
    handles: 'n,s,e',
    minWidth: 200,
    maxWidth: 400
});

});



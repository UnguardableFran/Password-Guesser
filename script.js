// var secretword = "Hello";
// $("button").click(function() {
// if ("the secretword is Hello") {
//   $("h1").appear("congradulations");
// }
// });

$(document).ready(function(){
 var secretword = "Hello";
 
$("button").click(function() {


if (secretword === $("#input").val()){
  $("h1").append("congratulations");
}
//var name = $("#input").val();
});
});
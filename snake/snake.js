$(document).ready(function() {
var sec = 0;
var min = 0;
var myClock = setInterval(function(){
   if(sec<59){
       sec += 1;
   }else{
       min += 1;
       sec -= 59;
   }
    $("#clock").html(min+":"+sec);
},1000);
});
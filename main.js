
function convertvalue(){
    var dollar=document.getElementById("dollar").value;
    var result=document.getElementById("result");

   if(dollar==""){
    result.innerHTML="Enter Value";
   }else if(isNaN(dollar)){
    result.innerHTML="Enter Namber Not Text";
   }else if(dollar<0){
    result.innerHTML="Enter Postive Namber";
   }else if(dollar==0){
    result.innerHTML="Enter Namber Rathe Than Zero";
   }else{
    result.innerHTML=dollar *50 +"Egypion Pound";
   }

   return false;
}
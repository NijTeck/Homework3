//generate random password
var min;
var max; 

function generate(){

  //set password length/complexity
  let complexity = document.getElementById("slider").value;

  //possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  let password = "";

  //create for loop to choose password characters
  for(var i = 0; i <= complexity; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //add password to textbox/display area
  document.getElementById("display").value = password;

  //add password to previously generated passwords section

  document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length display of 25
prompt("PWDLenght");
document.getElementById("PWDLenght").innerHTML = "PWDLenght: ";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

  if(document.getElementById("slider").value > 8){
      document.getElementById("PWDLenght").innerHTML = "PWDLenght" + document.getElementById("slider").value;
  }
  else{
      document.getElementById("PWDLenght").innerHTML = "PWDLenght: 8";
  }

}

//function to copy password to clipboard
function copyPassword(){

  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard!");

}
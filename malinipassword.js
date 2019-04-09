//var email = document.getElementById('email').value
//var pwd =  document.getElementById('psw').value
function validate(){
var email = document.getElementById('email').value.trim()
var pwd =  document.getElementById('psw').value.trim()
    
if (email===""){
    document.getElementById('email').focus();
    alert("Please enter an email id");
    return false;
}
if (pwd === ""){
    document.getElementById('psw').focus();
    alert("Password cannot be empty");
    return false;
}
var emailPattern= new RegExp("[^]+@[^]+[.][a-z]{2,100}$");
 
 if(!emailPattern.test(email))
 {
     alert("User Name should be in format like example@gmail.com..");
     return false;
 }
 var pword= new RegExp ("^[a-zA-Z0-9][@$,<>#:?_*&;]{4,100}$")
   if (pword.test(pwd)) { 
      return true
   }
   else {
      alert("Incorrect Password or Username");
      return false
   }
 
  return false;
}

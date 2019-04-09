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

 
 if (email == "user@gmail.com" && pwd == "123456") {
    alert("validation succeeded");
    return true;
  } else {
    alert("User Name or Password Validation failed");
    return false;
  }
  return false;
}

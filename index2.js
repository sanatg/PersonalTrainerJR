

// 

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("bmi-div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("registrationForm").style.display = "none";
      document.getElementById("nav-div").style.display = "block";
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("bmi-div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("registrationForm").style.display = "none";
      document.getElementById("nav-div").style.display = "none";
    }
  });
  
  function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then((user) => {
      // Signed in 
      notifyMe();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Qual.errord("error",errorMessage);
    });
  
  
  }
  
  
  function logout(){
    Qual.confirmd("Are you sure you want to continue ", 
    "you would be logged out",war,"OK", "Cancel",
    "logout2","stopped"); 
    
  }
  function logout2(){
    firebase.auth().signOut()
    .then((user) => {
      // Signed in 
      Qual.successd("success","user logged out");
    })
    localStorage.removeItem("bmi");
    localStorage.removeItem("suggestion");
    localStorage.removeItem("suggestion2");
    }
  function stopped(){
    //alert("action was stopped")
    Qual.successd("Action stopped successfully");
  }
  function signupscreen(){
    document.getElementById("bmi-div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("nav-div").style.display = "none";
  
  
  }
  function signup(){
    var registeremail = document.getElementById("InputEmail1").value;
    var registerpassword = document.getElementById("InputPassword1").value;
  
    firebase.auth().createUserWithEmailAndPassword(registeremail, registerpassword)
    .then((user) => {
      // Signed in 
    Qual.successd("success","User created successfully");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Qual.errordb("Error",errorMessage);
    });
  }
  function backButton() {
    document.getElementById("bmi-div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "none";
  }
  function home() {
    document.getElementById("bmi-div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "block";
  }
  function bmi() {
    document.getElementById("bmi-div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "block";
  }
  function deleteuser(){
    Qual.confirmd("Are you sure you want to continue ", 
  "your all data will be deleted from our database",war,"OK", "Cancel",
  "deleteAccount","stopped2"); 
  
    } 
     
    
  
  function deleteAccount() {
    var user = firebase.auth().currentUser;
    user.delete().then(function() {
      // User deleted.
      Qual.successd("Personel trainer.jr","user deleted");
    })
    .catch(function(error) {
      // An error happened.
      Qual.errord("Error",error);
    });
    document.getElementById("bmi-div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "none";
  }
  function stopped2() {
    Qual.successd("Action stopped successfully");
  }
  
var overlay = document.getElementById("overlay");

function toggleOverlay() {
  overlay.classList.toggle("active");
}

function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
   toggleOverlay()
 // console.log(localStorage.getItem("bmi"))

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  toggleOverlay()

}
  
  function getBMI(){
    var height =  document.getElementById("inputheight").value;
     var kilo = document.getElementById("inputkilo").value;
      var metreconvert = height/100;
     var result = kilo / (metreconvert *metreconvert);
     console.log(result);
     Qual.successd("Well done","You have an awsome BMI try to keep it up by eating lots of veges and doing exercises.Your BMI score: "+result);
     localStorage.setItem("suggestion","You have an awsome BMI try to keep it up by eating lots of veges and doing exercises");
     if(result<18.5)
     {
      Qual.warningd("Oh! no you are underweight you should try some weight gain recipies.","BMI calculated: "+result+" kg/m2");
      localStorage.setItem("suggestion","Oh! no you are underweight you should weight gain recipies.");
     }
     if(result>29.9)
     {
      Qual.warningd("Oh! no you are overweight you should try some weight loss recipies.","BMI calculated: "+result+" kg/m2");
      localStorage.setItem("suggestion","Oh! no you are overweight you should try some weight loss recipies.");
      //Qual.confirm("Are you sure you want to continue ", 
      ///"Click Ok button to continue and Cancel to Close",succ,"OK", "Cancel",
       //"Ok_btn_function","Cancel_btn_function"); 
    }
    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("bmi",result+" kg/m2");
    } else {
      console.log("Sorry, your browser does not support Web Storage...");
    }
 }
     
 function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
     var notificationBody = "Hi there Champ this is your Personal Trainer.jr.I welcome you in this program.Which will help you shape your body according to you.To know you better please fill the user details form you can navigate there through the hamburger menu if,you have aldready filled the form kindly you can ignore this notification later if you want to update the settings later you can do the same through there.";
    var notification = new Notification(notificationBody);
  
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
 var notificationBody = "Hi there Champ this is your Personal Trainer.jr.I welcome you in this program.Which will help you shape your body according to you.To know you better please fill the user details form you can navigate there through the hamburger menu if,you have aldready filled the form kindly you can ignore this notification later if you want to update the settings later you can do the same through there.";
        var notification = new Notification(notificationBody);
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}
function registerLocalStorage() {
  var firstname = document.getElementById("FirstName").value;
  var lastname = document.getElementById("LastName1").value;
  var age = document.getElementById("FormControlSelect1").value;
  var weight = document.getElementById("InputWeight").value;
  localStorage.setItem("Firstname", firstname);
  localStorage.setItem("Lastname", lastname);
  localStorage.setItem("age",age);
  localStorage.setItem("weight", weight);
  console.log(localStorage.getItem("age"));
}

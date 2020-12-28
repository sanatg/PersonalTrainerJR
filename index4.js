

// 

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("choose-div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("registrationForm").style.display = "none";
      document.getElementById("nav-div").style.display = "block";
      document.getElementById("heightbuilding-div").style.display = "none";
      document.getElementById("weightgain-div").style.display = "none";
      document.getElementById("weightloss-div").style.display = "none";
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("choose-div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("registrationForm").style.display = "none";
      document.getElementById("nav-div").style.display = "none";
      document.getElementById("heightbuilding-div").style.display = "none";
      document.getElementById("weightgain-div").style.display = "none";
      document.getElementById("weightloss-div").style.display = "none";
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
  Qual.successd("Action stopped successfully");
}

  function signupscreen(){
    document.getElementById("choose-div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("nav-div").style.display = "none";
    document.getElementById("heightbuilding-div").style.display = "none";
    document.getElementById("weightgain-div").style.display = "none";
    document.getElementById("weightloss-div").style.display = "none";
  
  }
  function signup(){
    var registeremail = document.getElementById("InputEmail1").value;
    var registerpassword = document.getElementById("InputPassword1").value;
  
    firebase.auth().createUserWithEmailAndPassword(registeremail, registerpassword)
    .then((user) => {
      // Signed in 
      window.alert("user created");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Qual.errordb("Error",errorMessage);
    });
  }
  function backButton() {
    document.getElementById("choose-div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "none";
    document.getElementById("heightbuilding-div").style.display = "none";
    document.getElementById("weightgain-div").style.display = "none";
    document.getElementById("weightloss-div").style.display = "none";
  }
  function home() {
    document.getElementById("choose-div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "block";
    document.getElementById("heightbuilding-div").style.display = "none";
    document.getElementById("weightgain-div").style.display = "none";
    document.getElementById("weightloss-div").style.display = "none";
  }
function bmi() {
    document.getElementById("choose-div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "block";
    document.getElementById("heightbuilding-div").style.display = "none";
    document.getElementById("weightgain-div").style.display = "none";
    document.getElementById("weightloss-div").style.display = "none";
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
    document.getElementById("choose-div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "none";
    document.getElementById("heightbuilding-div").style.display = "none";
    document.getElementById("weightgain-div").style.display = "none";
    document.getElementById("weightloss-div").style.display = "none";
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

  function showHeightexercises() {
    document.getElementById("choose-div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "block";
    document.getElementById("heightbuilding-div").style.display = "block";
    document.getElementById("weightgain-div").style.display = "none";
    document.getElementById("weightloss-div").style.display = "none";
  }

  function showeightgainexercises() {
    document.getElementById("choose-div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "block";
    document.getElementById("heightbuilding-div").style.display = "none";
    document.getElementById("weightgain-div").style.display = "block";
    document.getElementById("weightloss-div").style.display = "none";
  }
  function showeightlossexercises() {
    document.getElementById("choose-div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("nav-div").style.display = "block";
    document.getElementById("heightbuilding-div").style.display = "none";
    document.getElementById("weightgain-div").style.display = "none";
    document.getElementById("weightloss-div").style.display = "block";
  }
  function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
 var notificationBody = "Hi there Champ this is you Personal Trainer.jr.I welcome you in this program.Which will help you shape your body according to you.To know you better please fill the user details form you can navigate there through the hamburger menu if,you have aldready filled the form kindly you can ignore this notification later if you want to update the settings later you can do the same through there.";
      var notification = new Notification(notificationBody);
    
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
 var notificationBody = "Hi there Champ this is you Personal Trainer.jr.I welcome you in this program.Which will help you shape your body according to you.To know you better please fill the user details form you can navigate there through the hamburger menu if,you have aldready filled the form kindly you can ignore this notification later if you want to update the settings later you can do the same through there.";
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
      function customwindowprint(){
    var printbutton1 = document.getElementById("print-bt").innerHTML = "Personal Trainer.jr";
     var printbutton2 = document.getElementById("print-bt2").innerHTML = "Personal Trainer.jr";
    var printbutton3 = document.getElementById("print-bt3").innerHTML = "Personal Trainer.jr";
    window.print();
    var printbutton4 = document.getElementById("print-bt").innerHTML = "Print Diet Plan";
     var printbutton5 = document.getElementById("print-bt2").innerHTML = "Print Diet Plan";
     var printbutton6 = document.getElementById("print-bt3").innerHTML = "Print Diet Plan";
  }
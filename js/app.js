// **************************** chek your is login or not *******************************************************
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.href = "./home/allpost.html"
  } else {

    window.location.href = "./log-in/login.html"

  }

});
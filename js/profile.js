// ******************** Side nav bar *****************************************
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// ************************** Render to new page ****************************************************
document.getElementById("post").addEventListener('click', () => {
  window.location.href = "./../post-car/postcar.html"
})

document.getElementById("all").addEventListener('click', () => {
  window.location.href = "./all.html"
})

document.getElementById("myPost").addEventListener('click', () => {
  window.location.href = "./mypost.html"
})
// ************************** Sign Up data Get ****************************************************

var userData = localStorage.getItem("userData")
userData = JSON.parse(userData);
console.log(userData)

// ************************************** Current Usres Data **********************************************
document.getElementById("userName").innerHTML = userData.fullName.toUpperCase();
document.getElementById("userEmail").innerHTML = userData.email;
document.getElementById("mobNum").innerHTML = userData.contact;

// ************************************** Current Usres Log Out **********************************************
function logout() {
  // **************************sweet alert  ****************************************************

  swal({
    title: "Are you sure?",
    text: "You LogOut from the Home page !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        swal("Successfully LogOut From the Home Page", {
          icon: "success",
        });
        firebase.auth().signOut().then(() => {
          window.location.assign("./../log-in/login.html");
          localStorage.removeItem("userData")
        })
      } else {
        swal("You not LogOut form the Home Page !");
      }
    });


}
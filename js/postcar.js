
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
document.getElementById("all").addEventListener('click', () => {
  window.location.href = "./../home/allpost.html"
})

document.getElementById("post").addEventListener('click', () => {
  window.location.href = "./../post-car/postcar.html"
})

document.getElementById("myPost").addEventListener('click', () => {
  window.location.href = "./../home/mypost.html"
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
// ******************************* Get datat from user ***********************************
let CarName = document.getElementById("CarName");
let carModel = document.getElementById("carModel");
let carPrice = document.getElementById("carPrice");
let carNo = document.getElementById("carNo");
// let contactNumber = document.getElementById("contactNumber");
// let emailAddress = document.getElementById("emailAddress");
let description = document.getElementById("description");
let submitbtn = document.getElementById("submitbtn");
let fileToUpload = document.getElementById("fileToUpload");
const dataBase = firebase.database().ref(`/`);
submitbtn.addEventListener('click', () => {
  let userDataObj = {
    CarName: CarName.value,
    carModel: carModel.value,
    carPrice: carPrice.value,
    carNo: carNo.value,
    contactNumber: userData.contact,
    emailAddress: userData.email,
    description: description.value,
    fileToUpload: fileToUpload.value,
    fullName: userData.fullName,
    postId: userData.id
  }
  console.log(userDataObj);
  dataBase.child("Post").push(userDataObj);
})


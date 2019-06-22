
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
  window.location.href = "./allpost.html"
})

document.getElementById("myPost").addEventListener('click', () => {
  window.location.href = "./mypost.html"
})
// ************************** Sign Up data Get ****************************************************

var userData = localStorage.getItem("userData")
userData = JSON.parse(userData);
console.log(userData)

const dataBase = firebase.database().ref(`/`);
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
// ************************** Post content get from firebase ****************************************************
dataBase.child("Post").on(`child_added`, (snap) => {
  var data = snap.val();
  data.id = snap.key;
  console.log(data)
  // *****************All Users data *********************************
  let allDataShow = document.getElementById("allDataShow");
  let card = document.createElement("div");
  card.setAttribute("class", "card")
  allDataShow.appendChild(card);
  let img = document.createElement("img");
  img.setAttribute("src", data.fileToUpload.slice(12));
  img.setAttribute("id", "imageUpload1")
  card.appendChild(img);
  let h1 = document.createElement('h1');
  card.appendChild(h1);
  h1.innerHTML = data.CarName;
  let carprice = document.createElement("p");
  carprice.setAttribute("class", "title");
  card.appendChild(carprice);
  carprice.innerHTML = data.carModel;
  let sellerp = document.createElement("p");
  card.appendChild(sellerp);
  sellerp.innerHTML = data.fullName;
  let btnP = document.createElement("p");
  card.appendChild(btnP);
  let detailBTn = document.createElement("input");
  detailBTn.setAttribute("type", "button");
  detailBTn.setAttribute("value", "More Detail");
  detailBTn.setAttribute("class", "moreDetailBtn");
  detailBTn.setAttribute("id", data.id);
  btnP.appendChild(detailBTn)


  detailBTn.addEventListener('click', function () {
    window.location.href = "./moredetail.html"
    var detailBtnId = this.id;
    console.log(detailBtnId);
    localStorage.setItem('detailBtnId', JSON.stringify(detailBtnId))
  })
})


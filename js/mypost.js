


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
  window.location.href = "./allpost.html"
})

document.getElementById("myPost").addEventListener('click', () => {
  window.location.href = "./mypost.html"
})


document.getElementById("post").addEventListener('click', () => {
  window.location.href = "./../post-car/postcar.html"
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
//*********************** My all post ************************** */
firebase.database().ref(`/`).child(`Post`).on(`child_added`, (snap) => {
  let x = snap.val();
  console.log(x)
  if (userData.id === x.postId) {
    let showMyPosts = document.getElementById("showMyPosts");
    let div = document.createElement("div");
    div.setAttribute("id", "showMyP");
    showMyPosts.appendChild(div);

    let tr1Img = document.createElement("p");
    div.appendChild(tr1Img);
    let img = document.createElement("img");
    img.setAttribute("id", "postImage");
    img.setAttribute("src", x.fileToUpload.slice(12));
    tr1Img.appendChild(img);
    let tr1 = document.createElement("tr");
    div.appendChild(tr1);
    let th1 = document.createElement("th");
    th1.setAttribute("class", "th1");
    th1.innerHTML = "<b>" + "Car Name : " + "</b>";
    tr1.appendChild(th1);
    let th12 = document.createElement("th");
    th12.setAttribute("class", "th2");
    th12.innerHTML = x.CarName;
    tr1.appendChild(th12);
    let tr2 = document.createElement("tr");
    div.appendChild(tr2);
    let th2 = document.createElement("th");
    th2.setAttribute("class", "th1");
    th2.innerHTML = "<b>" + "Car Model : " + "</b>";
    tr2.appendChild(th2);
    let th22 = document.createElement("th");
    th22.setAttribute("class", "th2");
    th22.innerHTML = x.carModel;
    tr2.appendChild(th22);
    let tr3 = document.createElement("tr");
    div.appendChild(tr3);
    let th3 = document.createElement("th");
    th3.setAttribute("class", "th1");
    th3.innerHTML = "<b>" + "Car Price : " + "</b>";
    tr3.appendChild(th3);
    let th32 = document.createElement("th");
    th32.setAttribute("class", "th2");
    th32.innerHTML = x.carPrice;
    tr3.appendChild(th32);
    let tr4 = document.createElement("tr");
    div.appendChild(tr4);
    let th4 = document.createElement("th");
    th4.setAttribute("class", "th1");
    th4.innerHTML = "<b>" + "Car No : " + "</b>";
    tr4.appendChild(th4);
    let th42 = document.createElement("th");
    th42.setAttribute("class", "th2");
    th42.innerHTML = x.carNo;
    tr4.appendChild(th42);
    let tr5 = document.createElement("tr");
    div.appendChild(tr5);
    let th5 = document.createElement("th");
    th5.setAttribute("class", "th1");
    th5.innerHTML = "<b>" + "Contact :" + "</b>";
    tr5.appendChild(th5);
    let th52 = document.createElement("th");
    th52.setAttribute("class", "th2");
    th52.innerHTML = x.contactNumber;
    tr5.appendChild(th52);
    let tr6 = document.createElement("tr");
    div.appendChild(tr6);
    let th6 = document.createElement("th");
    th6.setAttribute("class", "th1");
    th6.innerHTML = "<b>" + "Email :" + "</b>";
    tr6.appendChild(th6);
    let th62 = document.createElement("th");
    th62.setAttribute("class", "th2");
    th62.innerHTML = x.emailAddress;
    tr6.appendChild(th62);
    let tr8 = document.createElement("tr");
    div.appendChild(tr8);
    let th8 = document.createElement("th");
    th8.setAttribute("class", "th1");
    th8.setAttribute("id", "th8");
    th8.innerHTML = "<b>" + "Seller Name :" + "</b>";
    tr8.appendChild(th8);
    let th82 = document.createElement("th");
    th82.setAttribute("class", "th2");
    th82.innerHTML = x.fullName;;
    tr8.appendChild(th82);
    let tr7 = document.createElement("tr");
    div.appendChild(tr7);
    let th7 = document.createElement("th");
    th7.setAttribute("class", "th1");
    th7.innerHTML = "<b>" + "Description " + "</b>";
    tr7.appendChild(th7);
    let th72 = document.createElement("th");
    th72.setAttribute("class", "th2");
    th72.innerHTML = x.description;
    tr7.appendChild(th72);
  }
})

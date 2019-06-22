// ******************** Side nav bar *****************************************
function openNav() {
  document.getElementById("mySidebar").style.width = "250pdata";
  document.getElementById("main").style.marginLeft = "250pdata";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// ************************** Sign Up data Get ****************************************************

var userData = localStorage.getItem("userData")
userData = JSON.parse(userData);
console.log(userData)

const dataBase = firebase.database().ref(`/`);
// ****************** Go back function *****************************
document.getElementById("goBack").addEventListener('click', () => {
  window.location.href = "./allpost.html"
})
// ************************************** Current Usres Data **********************************************
document.getElementById("userName").innerHTML = userData.fullName.toUpperCase();
document.getElementById("userEmail").innerHTML = userData.email;
document.getElementById("mobNum").innerHTML = userData.contact;

// ************************************** Current Usres Log Out **********************************************
function logout() {
  // **************************sweet alert  ****************************************************

  swal({
    title: "Are you sure?",
    tedatat: "You LogOut from the Home page !",
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
// ********************** post id get from lacalstorage *******************
let btnId = localStorage.getItem("detailBtnId");
btnId = JSON.parse(btnId);
console.log(btnId)
// ************************** Post content get from firebase ****************************************************

dataBase.child(`Post/${btnId}`).on(`value`, (snap) => {
  var data = snap.val();
  data.id = snap.key;
  console.log(data)

  let ShowDetalCard = document.getElementById("ShowDetalCard");
  let div = document.createElement("div");
  div.setAttribute("id", "showMyP");
  ShowDetalCard.appendChild(div);

  let tr1Img = document.createElement("p");
  div.appendChild(tr1Img);
  let img = document.createElement("img");
  img.setAttribute("id", "postImage");
  img.setAttribute("src", data.fileToUpload.slice(12));
  tr1Img.appendChild(img);
  let tr1 = document.createElement("tr");
  div.appendChild(tr1);
  let th1 = document.createElement("th");
  th1.setAttribute("class", "th1");
  th1.innerHTML = "<b>" + "Car Name : " + "</b>";
  tr1.appendChild(th1);
  let th12 = document.createElement("th");
  th12.setAttribute("class", "th2");
  th12.innerHTML = data.CarName;
  tr1.appendChild(th12);
  let tr2 = document.createElement("tr");
  div.appendChild(tr2);
  let th2 = document.createElement("th");
  th2.setAttribute("class", "th1");
  th2.innerHTML = "<b>" + "Car Model : " + "</b>";
  tr2.appendChild(th2);
  let th22 = document.createElement("th");
  th22.setAttribute("class", "th2");
  th22.innerHTML = data.carModel;
  tr2.appendChild(th22);
  let tr3 = document.createElement("tr");
  div.appendChild(tr3);
  let th3 = document.createElement("th");
  th3.setAttribute("class", "th1");
  th3.innerHTML = "<b>" + "Car Price : " + "</b>";
  tr3.appendChild(th3);
  let th32 = document.createElement("th");
  th32.setAttribute("class", "th2");
  th32.innerHTML = data.carPrice;
  tr3.appendChild(th32);
  let tr4 = document.createElement("tr");
  div.appendChild(tr4);
  let th4 = document.createElement("th");
  th4.setAttribute("class", "th1");
  th4.innerHTML = "<b>" + "Car No : " + "</b>";
  tr4.appendChild(th4);
  let th42 = document.createElement("th");
  th42.setAttribute("class", "th2");
  th42.innerHTML = data.carNo;
  tr4.appendChild(th42);
  let tr5 = document.createElement("tr");
  div.appendChild(tr5);
  let th5 = document.createElement("th");
  th5.setAttribute("class", "th1");
  th5.innerHTML = "<b>" + "Contact :" + "</b>";
  tr5.appendChild(th5);
  let th52 = document.createElement("th");
  th52.setAttribute("class", "th2");
  th52.innerHTML = data.contactNumber;
  tr5.appendChild(th52);
  let tr8 = document.createElement("tr");
  div.appendChild(tr8);
  let th8 = document.createElement("th");
  th8.setAttribute("class", "th1");
  th8.setAttribute("id", "th8");
  th8.innerHTML = "<b>" + "Seller Name :" + "</b>";
  tr8.appendChild(th8);
  let th82 = document.createElement("th");
  th82.setAttribute("class", "th2");
  th82.innerHTML = data.fullName;;
  tr8.appendChild(th82);
  let tr6 = document.createElement("tr");
  div.appendChild(tr6);
  let th6 = document.createElement("th");
  th6.setAttribute("class", "th1");
  th6.innerHTML = "<b>" + "Email :" + "</b>";
  tr6.appendChild(th6);
  let th62 = document.createElement("th");
  th62.setAttribute("class", "th2");
  th62.innerHTML = data.emailAddress;
  tr6.appendChild(th62);
  let tr7 = document.createElement("tr");
  div.appendChild(tr7);
  let th7 = document.createElement("th");
  th7.setAttribute("class", "th1");
  th7.innerHTML = "<b>" + "Description " + "</b>";
  tr7.appendChild(th7);
  let th72 = document.createElement("th");
  th72.setAttribute("class", "th2");
  th72.innerHTML = data.description;
  tr7.appendChild(th72);
  let buyBtn = document.createElement("input");
  buyBtn.setAttribute("type", "button");
  buyBtn.setAttribute("id", data.id);

  buyBtn.setAttribute("value", "Buy Now");
  buyBtn.setAttribute("class", "btn btn-primary btn-block");
  div.appendChild(buyBtn);
  let goBackBtn = document.createElement("input");
  goBackBtn.setAttribute("type", "button");
  goBackBtn.setAttribute("value", "Go Back");
  goBackBtn.setAttribute("class", "btn btn-primary btn-block");
  div.appendChild(goBackBtn)

  buyBtn.addEventListener("click", function () {

    console.log(`this`, this.id)
    if (data.emailAddress === userData.email) {
      alert(`sorry`)
    }

    else {
      let x = localStorage.getItem(`detailBtnId`);
      x = JSON.parse(x)
      console.log(`x`, x)

      dataBase.child(`Post/${this.id}/`).on(`value`, (data1) => {

        let y = {

          CarName: data1.val().CarName,
          carModel: data1.val().carModel,
          carNo: data1.val().carNo,
          carPrice: data1.val().carPrice,
          contactNumber: userData.contact,
          description: data1.val().description,
          emailAddress: userData.email,
          fileToUpload: data1.val().fileToUpload,
          fullName: userData.fullName,
          postId: userData.id,
        }

        console.log(y)



        dataBase.child(`Post/${x}`).set(y)


      })


    }



  })
  goBackBtn.addEventListener("click",()=>{
    window.location.href = "./allpost.html"
  
  })
})

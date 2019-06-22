// **************************** get data from user *******************************************************

let fullName = document.getElementById("fullName");
let contact = document.getElementById("contact");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("signup");
let showError = document.getElementById("showError");


const dataBase = firebase.database().ref(`/`);
// **************************** data submit button *******************************************************

signup.addEventListener('click', () => {
    let obj = {
        fullName: fullName.value,
        contact: contact.value,
        email: email.value,
        password: password.value

    }
    console.log(obj)
    // **************************** user email save in firebase authentication *******************************************************

    firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
        .then((res) => {
            obj.id = res.user.uid
            dataBase.child(`CurrentUser/${res.user.uid}`).set(obj);

            window.location.href = './../log-in/login.html';

            console.log(res);
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            showError.innerHTML = "Please Enter Correct Email & Password"

        });

}
)

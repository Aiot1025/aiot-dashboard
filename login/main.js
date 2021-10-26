const myId = document.getElementById("myId");
const myPasswd = document.getElementById("myPasswd");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () =>{
    console.log("myId:", myId.value);
    console.log("myPasswd:", myPasswd.value);
});

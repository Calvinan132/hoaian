var usernameID = document.getElementById("username");
var passwordID = document.getElementById("password");

var listAccount = [{ username: "an", password: "an" }];
var islogin = false;
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let checklogin = listAccount.find(
    (value) =>
      value.username === usernameID.value && value.password === passwordID.value
  );
  if (!checklogin) {
    alert("Sai mật khẩu rồi ku =)))) ");
  } else {
    window.location.href = "./index.html";
    alert("đúng rồi");
  }
}

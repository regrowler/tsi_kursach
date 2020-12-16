function validate() {

  document.getElementById("wrong name").setAttribute("style", "display: none")
  document.getElementById("wrong email").setAttribute("style", "display: none")
  document.getElementById("wrong password").setAttribute("style", "display: none")
  document.getElementById("wrong confirm").setAttribute("style", "display: none")
  document.getElementById("wrong phone").setAttribute("style", "display: none")
  if (document.getElementById("name").value.trim() === "") {
    document.getElementById("wrong name").setAttribute("style", "display: block; color: red")
    document.getElementById("name").focus();

  }
  if (document.getElementById("email").value.trim() === "") {
    document.getElementById("wrong email").setAttribute("style", "display: block; color: red")
    document.getElementById("email").focus();

  }
  if (document.getElementById("password").value.trim() === "") {
    document.getElementById("wrong password").setAttribute("style", "display: block; color: red")
    document.getElementById("password").focus();

  }
  if (document.getElementById("confirm").value.trim() === "") {
    document.getElementById("wrong confirm").setAttribute("style", "display: block; color: red")
    document.getElementById("confirm").focus();

  }
  if (!isLetter(document.getElementById("email").value.charAt(0)))
    document.getElementById("wrong email").setAttribute("style", "display: block; color: red")

  var exp = /^[\w-.]+@[\w-]+.[a-z]{2,4}$/i;
  if (!exp.test(document.getElementById("email").value)) {
    document.getElementById("wrong email").setAttribute("style", "display: block; color: red")
    document.getElementById("email").focus();

  }
  exp = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm
  if (!exp.test(document.getElementById("phone").value)) {
    document.getElementById("wrong phone").setAttribute("style", "display: block; color: red")
    document.getElementById("phone").focus();

  }
  if (document.getElementById("confirm").value.trim() !== document.getElementById("password").value.trim()) {
    document.getElementById("wrong confirm").setAttribute("style", "display: block; color: red")
    document.getElementById("confirm").focus();

  }
  return true;
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function register() {
  if (validate()) {
    var body = {
      login: document.getElementById("name").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
    };
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:4004/users', false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(body));
    if (xhr.status !== 200) {
      alert(xhr.responseText);
    } else {
      window.open("/tsi_kursach/login.html","_self");
    }
  }
}

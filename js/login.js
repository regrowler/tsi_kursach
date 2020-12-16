function openLogin() {
  return window.open("/tsi_kursach/login.html?_ijt=qd7b5vbl0sn9r69ftprhcq4b0t", "Auth", 'width=480,height=560')
}

function validate() {

  document.getElementById("wrong name").setAttribute("style", "display: none");
  document.getElementById("wrong password").setAttribute("style", "display: none");
  if (document.getElementById("name").value.trim() === "") {
    document.getElementById("wrong name").setAttribute("style", "display: block; color: red");
    document.getElementById("name").focus();

  }
  if (document.getElementById("password").value.trim() === "") {
    document.getElementById("wrong password").setAttribute("style", "display: block; color: red");
    document.getElementById("password").focus();
  }
  return true;
}

function login() {
  if (validate()) {
    var body = {
      login: document.getElementById("name").value,
      password: document.getElementById("password").value
    };
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:4004/users', false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(body));
    if (xhr.status !== 200) {
      alert(xhr.responseText);
    } else {
      document.cookie = xhr.responseText;
      window.close()
    }
  }
}

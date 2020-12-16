if (document.cookie === "") {
  const defUser = {
    id: -1,
    login: "",
    password: "",
    email: "",
    phone: ""
  };
  document.cookie = JSON.stringify(defUser);
}

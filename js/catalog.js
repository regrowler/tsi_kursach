var cars;

function showCars() {
  document.getElementById("asdId").innerHTML = '';
  cars.forEach(function (car, index) {
    const rowItem = document.createElement("div");
    rowItem.setAttribute("class", "catalog-item");
    // rowItem.onclick = click1;
    const number = document.createElement("div");
    number.textContent = (index + 1).toString();
    number.setAttribute("class", "index");
    rowItem.appendChild(number);

    const model = document.createElement("div");
    model.setAttribute("class", "model");
    model.textContent = car.model;
    rowItem.appendChild(model);

    const about = document.createElement("div");
    about.setAttribute("class", "about");
    about.innerHTML = car.about;
    rowItem.appendChild(about);

    const price = document.createElement("div");
    price.setAttribute("class", "price");
    price.textContent = car.price;
    rowItem.appendChild(price);

    const book = document.createElement("div");
    book.setAttribute("class", "book");

    const button = document.createElement("div");
    const user = JSON.parse(document.cookie);
    if (car.bookedBy === -1 && user.id > 0) {
      button.setAttribute("class", "book-button");
      button.textContent = "Забронировать";
      button.onclick = function f() {
        setCarBooked(car.id, true)
      }
    } else if (car.bookedBy !== user.id) {
      button.setAttribute("class", "book-button-booked-by-stranger");
      button.textContent = "Недоступно";
    }
    if (car.bookedBy=== user.id && user.id > 0) {
      button.setAttribute("class", "book-button-booked-by-user");
      button.textContent = "Забронировано";
      button.onclick = function f() {
        var result = confirm("Вы действительно хотите отменить бронирование?");
        if (result) setCarBooked(car.id, false)

      }
    }

    book.appendChild(button);
    rowItem.appendChild(book);
    document.getElementById("asdId").appendChild(rowItem)
  });
}

function book1(index) {
  document.location.reload(true)
}

function click1() {
  alert(document.cookie)
}

function setCarBooked(carId, booked) {
  const user = JSON.parse(document.cookie);
  var body = {
    carId: carId,
    userId: user.id,
    booked: booked
  };
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:4004/cars', false);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(body));
  if (xhr.status !== 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    fetchCars()
  }
}

function fetchCars() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:4004/cars', false);
  xhr.send();
  if (xhr.status !== 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    cars = JSON.parse(xhr.responseText);
    showCars()
  }
}

function openLoginWithCallback() {
  var win = openLogin();
  var timer = setInterval(function () {
    if (win.closed) {
      clearInterval(timer);
      fetchCars()
    }
  }, 1000);
}

fetchCars();

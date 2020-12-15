let rotateAngle = 90;

function rotate(image) {
  image.setAttribute("style", "margin: auto;display: block;transform: rotate(" + rotateAngle + "deg)");
  rotateAngle = rotateAngle + 90;
}

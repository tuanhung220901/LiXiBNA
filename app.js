//music
var tieng_click = document.getElementById("Tieng-click");
var tieng_phao_hoa = document.getElementById("Tieng-phao-hoa")
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   tieng_click.play();
//   tieng_phao_hoa.play();
//   modal.style.display = "block";

// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  tieng_click.play();
  tieng_phao_hoa.pause();
  tieng_phao_hoa.currentTime = 0;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    tieng_phao_hoa.pause();
    tieng_phao_hoa.currentTime = 0;
  }
}
// random
money = [6868, 2022, 8888, 6666]
var number1,number2,number3,number4;
function RandomMoney(){
  number1 = Math.floor(Math.random() * 4);
  // console.log(number1);
  number2 = Math.floor(Math.random() * 4);
  // console.log(number2);
  number3 = Math.floor(Math.random() * 4);
  // console.log(number3);
  number4 = Math.floor(Math.random() * 4);
  // console.log(number4);
}
RandomMoney();
// console.log(money[number1]);
// console.log(money[number2]);
// console.log(money[number3]);
// console.log(money[number4]);
// truyen money vao
let result = -1;
document.getElementById("check1").onclick = function (event) {
  result = document.getElementById("check1").getAttribute("kq");
  tieng_click.play();
  tieng_phao_hoa.play();
  modal.style.display = "block";
  check();
  RandomMoney();
}
document.getElementById("check2").onclick = function (event) {
  result = document.getElementById("check2").getAttribute("kq");
  tieng_click.play();
  tieng_phao_hoa.play();
  modal.style.display = "block";
  check();
  RandomMoney();
}
document.getElementById("check3").onclick = function (event) {
  result = document.getElementById("check3").getAttribute("kq");
  tieng_click.play();
  tieng_phao_hoa.play();
  modal.style.display = "block";
  check();
  RandomMoney();
}
document.getElementById("check4").onclick = function (event) {
  result = document.getElementById("check4").getAttribute("kq");
  tieng_click.play();
  tieng_phao_hoa.play();
  modal.style.display = "block";
  check()
  RandomMoney();
}
function check() {
  // console.log(result);
  if (result == 1) {
    document.getElementById("money").innerText = money[number1]
  }
  if (result == 2) {
    document.getElementById("money").innerText = money[number2]
  }
  if (result == 3) {
    document.getElementById("money").innerText = money[number3]
  }
  if (result == 4) {
    document.getElementById("money").innerText = money[number4]
  }
}


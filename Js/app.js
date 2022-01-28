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

// random money
money = [6868, 2022, 8888, 6666,6868,8686,1111,22222,3333,9999]
var number1,number2,number3,number4;
function RandomMoney(){
  number1 = Math.floor(Math.random() * 10);
  // console.log(number1);
  number2 = Math.floor(Math.random() * 10);
  // console.log(number2);
  number3 = Math.floor(Math.random() * 10);
  // console.log(number3);
  number4 = Math.floor(Math.random() * 10);
  // console.log(number4);
}
RandomMoney();

// random loi chuc
var loiChuc = ["Niên niên như ý xuân\nTuế tuế bình an nhật","Hoa khai phú quý\nTrúc báo bình an","Xuân an khang thịnh vượng\nNiên phúc thọ miên trường","Ngàn lần như ý\nVạn sự như mơ","Triệu sự bất ngờ\nTỷ lần hạnh phúc","Xuân sang cội phúc sinh nhành lộc\nTết về cây đức trổ thêm hoa","Tân niên nạp dư khánh\nGia tiết hiệu trường xuân","Cạn ly mừng năm qua đắc lộc\nNâng cốc chúc năm mới phát tài","Lộc biếc, mai vàng, xuân hạnh phúc\nĐời vui, sức khỏe, tết an khang","Tết đến gia đình vui sum họp\nXuân về con cháu hưởng bình an","Cát tường như ý\nCung chúc Tân xuân","Phúc lai miên thế trạch\nLộc mãn trấn gia thanh","Trúc bảo bình an, tài lợi tiến\nMai khai phú quý, lộc quyền lai","Cung chúc tân niên\nSức khỏe vô biên","Thành công liên miên\nHạnh phúc triền miên","Túi luôn đầy tiền\nSung sướng như tiên","Cung chúc tân xuân\nVạn sự như ý"]
var loichuc1;
function RandomLoiChuc(){
  loichuc1 = Math.floor(Math.random() *16);
}
//////////////////////////////////////////////////////////////
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
    RandomLoiChuc();
    var s = loiChuc[loichuc1];
    document.getElementById("money").innerText = s
    $("#money").append('<t class = "can-popup">- Lì xì may mắn - </t>')
    $("#money").append(`<t id = "font-money">${money[number1]}   <i class='fas fa-coins' style='font-size:30px;color: #F9C334;' ></i></t>`)
    document.getElementById("modal-content").style.color = "#F73434";
    document.getElementById("modal-content").style.textAlign = "center"
  }
  if (result == 2) {
    RandomLoiChuc();
    var s = loiChuc[loichuc1];
    document.getElementById("money").innerText = s
    $("#money").append('<t class = "can-popup">- Lì xì may mắn - </t>')
    $("#money").append(`<t id = "font-money">${money[number2]}   <i class='fas fa-coins' style='font-size:30px;color: #F9C334;' ></i></t>`)
    document.getElementById("modal-content").style.color = "#F73434";
    document.getElementById("modal-content").style.textAlign = "center"
  }
  if (result == 3) {
    RandomLoiChuc();
    var s = loiChuc[loichuc1];
    document.getElementById("money").innerText = s
    $("#money").append('<t class = "can-popup">- Lì xì may mắn - </t>')
    $("#money").append(`<t id = "font-money">${money[number3]}   <i class='fas fa-coins' style='font-size:30px;color: #F9C334;' ></i></t>`)
    document.getElementById("modal-content").style.color = "#F73434";
    document.getElementById("modal-content").style.textAlign = "center"
  }
  if (result == 4) {
    RandomLoiChuc();
    var s = loiChuc[loichuc1];
    document.getElementById("money").innerText = s
    $("#money").append('<t class = "can-popup">- Lì xì may mắn - </t>')
    $("#money").append(`<t id = "font-money">${money[number4]}   <i class='fas fa-coins' style='font-size:30px;color: #F9C334;' ></i></t>`)
    document.getElementById("modal-content").style.color = "#F73434";
    document.getElementById("modal-content").style.textAlign = "center"
  }
}
// loading
function myFunction() {
  var element = document.getElementById("loader");
  element.style.display = "none"
}
function my() {
  setTimeout(myFunction, 3000);
}
my();



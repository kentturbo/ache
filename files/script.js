/// ----------------------
// prototype: zachem.ne.jp
// author: saikopasu
// tg: @saikopasu
/// ----------------------
const title = "ache.";
const song = "files/song.mp3";
const gif = "files/a.gif";
function $(element) {
  return document.querySelector(element);
}
function $id(element){
  return document.getElementById(element);
}

let currentTime = new Date().getHours() +3;
let change_theme = $("#z2");
let dropbtn = $("#dropbtn");

const z1 = '<i class="fa-brands fa-telegram"></i>';
const l1 = "#";
const z2 = '<i class="fa-solid fa-toggle-on"></i>';
const l2 = "#";
const z3 = '<i class="fa-brands fa-github"></i>';
const l3 = "#";

document.title = title
$('.bh').innerHTML = title;
$("#greeting").innerHTML = currentTime < 10 & currentTime >= 4
  ? "Злое утро"
  : currentTime < 18 & currentTime >= 10
    ? "Злой день"
    : currentTime < 22 & currentTime >= 18
      ? "Злой вечер"
      : "Злой ночи";
$(".link > a:nth-child(1)").innerHTML = z1;
$(".link > a:nth-child(1)").setAttribute("href", l1);
$(".link > a:nth-child(2)").innerHTML = z2;
$(".link > a:nth-child(2)").setAttribute("href", l2);
$(".link > a:nth-child(3)").innerHTML = z3;
$(".link > a:nth-child(3)").setAttribute("href", l3);
$(".img").setAttribute("src", gif);
$("audio").setAttribute("src", song);
document.getElementsByClassName("img").src = gif;

window.onload = function () {
  jQuery("#user-city").text(ymaps.geolocation.city);
  if (localStorage.getItem("theme") === "white-theme") {
    document.documentElement.setAttribute("theme", "white-theme");
  }
};


change_theme.addEventListener("click", (event) => {
  // Выполнение
  if (document.body.hasAttribute("theme")) {
    document.body.removeAttribute("theme");
    localStorage.removeItem("theme");
    const z2 = '<i class="fa-solid fa-toggle-on"></i>';
    $(".link > a:nth-child(2)").innerHTML = z2;
  } else {
    document.body.setAttribute("theme", "white-theme");
    localStorage.setItem("theme", "white-theme"); // сохраняем
    const z2 = '<i class="fa-solid fa-toggle-off"></i>';
    $(".link > a:nth-child(2)").innerHTML = z2;
  }
});

dropbtn.addEventListener("click", (event) => {
  $id("dba").classList.toggle("show");
});

$(".dropbtn").addEventListener("click", function () {
  this.classList.toggle("rotated");
});

// Получаем элементы
const player = $id("player");
const playpausebtn = $id("playpausebtn");

// Обработчик клика по иконке
playpausebtn.addEventListener("click", () => {
  // Проверяем, проигрывается ли аудиофайл
  if (player.paused) {
    // Если не проигрывается, то запускаем воспроизведение
    player.play();
    // Меняем иконку на "паузу"
    playpausebtn.className = "fa-solid fa-circle-pause";
  } else {
    // Если проигрывается, то останавливаем воспроизведение
    player.pause();
    // Меняем иконку на "плей"
    playpausebtn.className = "fa-solid fa-circle-play";
  }
});

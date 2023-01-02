/// ----------------------
// prototype: zachem.ne.jp
// author: saikopasu
// tg: @saikopasu
/// ----------------------
const title = 'ache.';
const song = 'https://programmerbook.ru/examples/multimedia/audio/Rachmaninov_-_The_Garden_of_Eden.mp3';
const gif = 'files/a.gif';

const z1 = '<i class="fa-brands fa-telegram"></i>';
const l1 = '#';
const z2 = '<i class="fa-solid fa-toggle-on"></i>';
const l2 = '#';
const z3 = '<i class="fa-brands fa-github"></i>';
const l3 = '#';



document.querySelector('title').innerHTML = title;
document.querySelector('.bh').innerHTML = title;
document.querySelector('#greeting').innerHTML = getGreeting();
document.querySelector('.link > a:nth-child(1)').innerHTML = z1;
document.querySelector('.link > a:nth-child(1)').setAttribute('href', l1);
document.querySelector('.link > a:nth-child(2)').innerHTML = z2;
document.querySelector('.link > a:nth-child(2)').setAttribute('href', l2);
document.querySelector('.link > a:nth-child(3)').innerHTML = z3;
document.querySelector('.link > a:nth-child(3)').setAttribute('href', l3);
document.getElementsByClassName("img").src = gif; 
document.querySelector('.img').setAttribute('src', gif);
document.querySelector('audio > source').setAttribute('src', song);

function make(event) {
  event.preventDefault();
  alert('This feature is not available yet');
}

window.onload = function () {
  jQuery("#user-city").text(ymaps.geolocation.city);
  if (localStorage.getItem("theme") === "white-theme") {
    document.documentElement.setAttribute("theme", "white-theme");
  }
};

function make(e) {
  if (document.body.hasAttribute("theme")) {
    document.body.removeAttribute("theme");
    localStorage.removeItem("theme");
    const z2 = '<i class="fa-solid fa-toggle-on"></i>';
    document.querySelector('.link > a:nth-child(2)').innerHTML = z2;
  } else {
    document.body.setAttribute("theme", "white-theme");
    localStorage.setItem("theme", "white-theme"); // сохраняем
    const z2 = '<i class="fa-solid fa-toggle-off"></i>';
    document.querySelector('.link > a:nth-child(2)').innerHTML = z2;
  }
}

function getGreeting() {
  var currentTime = new Date().getHours();

  if (currentTime < 10 && currentTime >= 4) {
    return "Злое утро";
  } else if (currentTime < 18 && currentTime >= 10) {
    return "Злой день";
  } else if (currentTime < 22 && currentTime >= 18) {
    return "Злой вечер";
  } else {
    return "Злой ночи";
  }
}

var greeting = getGreeting();
document.getElementById('greeting').innerHTML = greeting;

function myFunction() {
    document.getElementById("dba").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(dropevent) {
    if (!dropevent.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dbc");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
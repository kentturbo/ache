window.onload = function () {
    jQuery("#user-city").text(ymaps.geolocation.city);
    if(localStorage.getItem('theme') === 'white-theme'){
        document.documentElement.setAttribute('theme', 'white-theme');
    }
}

function make(e) {
    if (document.body.hasAttribute('theme')) {
        document.body.removeAttribute('theme');
        localStorage.removeItem('theme');
    } else {
        document.body.setAttribute('theme', 'white-theme');
        localStorage.setItem('theme', 'white-theme'); // сохраняем
    }

}
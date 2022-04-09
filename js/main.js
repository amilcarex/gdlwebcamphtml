
(function(){
    "use strict";

document.addEventListener('DOMContentLoaded', function () {

    eventListeners();

});


function eventListeners() {
    const mobileMenu = document.querySelector('.menu-movil');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion-principal');

    navegacion.classList.toggle('visible');
    }
})();
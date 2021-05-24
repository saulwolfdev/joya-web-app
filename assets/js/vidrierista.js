
const mainNav = require('./main-nav');

document.addEventListener('DOMContentLoaded', function() {
    mainNav.initiateNav();
});

const devHelper = require('./dev-helpers'); //ELIMINAR EN PRODUCCION
devHelper.init();

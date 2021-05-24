
const mainNav = require('./main-nav');
const wizard = require('./solicitud-limpieza');

document.addEventListener('DOMContentLoaded', function() {
    mainNav.initiateNav();
	wizard.default.init();
});

const devHelper = require('./dev-helpers'); //ELIMINAR EN PRODUCCION
devHelper.init();

import { Modal, Dropdown } from 'node_modules/bootstrap';

const mainNav = require('./main-nav');
document.addEventListener('DOMContentLoaded', function() {
    mainNav.initiateNav(true);
});
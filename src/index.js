import {homeDisplay} from "./home.js" ;
import {menuDisplay} from "./menu.js";
import {contactDisplay} from "./contact.js"

homeDisplay();
menuDisplay();
contactDisplay();

const switchingTabs = (() => {
    
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact-us');
    const OnTabChange = ((e) => {
        const activeTab = document.querySelector('.active');
        activeTab.classList.remove('active');

        const newActiveTab = document.getElementsByClassName(e.target.id)[0];
        newActiveTab.classList.add('active');
    })
    homeButton.addEventListener('click', OnTabChange, false);
    menuButton.addEventListener('click', OnTabChange, false);
    contactButton.addEventListener('click', OnTabChange, false);
    
})();


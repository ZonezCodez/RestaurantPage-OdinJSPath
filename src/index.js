import home from './pages/home.js';
import menu from './pages/menu.js';
import contact from './pages/contact.js';
import './styles.css';

// Variables if needed go under this
const homePage = document.getElementById('homePage');
const menuPage = document.getElementById('menuPage');
const contactPage = document.getElementById('contactPage');
const renderBox = document.getElementById('content');

// Functions will go under here for the index page like the event listeners and the function to return a pages data on that.

homePage.addEventListener('click',showHomepage);
menuPage.addEventListener('click',showMenupage);
contactPage.addEventListener('click',showContactpage);

function showHomepage(){
    resetPage();
    Render(home());
    return;
};

function showMenupage(){
    resetPage();
    Render(menu());
    return;
};

function showContactpage(){
    resetPage();
    Render(contact());
    return;
};

function resetPage(){
    renderBox.textContent = '';
}

function Render(p){
    renderBox.appendChild(p);
}

Render(home());
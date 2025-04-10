const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// Toggle between login/register forms
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Open popup when clicking login button
btnPopup.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling to document
    wrapper.classList.add('active-popup');
});

// Close popup when clicking "X" icon
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Close popup when clicking outside the form
document.addEventListener('click', (e) => {
    if (
        !wrapper.contains(e.target) && // Click is outside the form
        e.target !== btnPopup          // Click is not the login button
    ) {
        wrapper.classList.remove('active-popup');
    }
});

// Prevent clicks inside the form from closing it
wrapper.addEventListener('click', (e) => {
    e.stopPropagation();
});
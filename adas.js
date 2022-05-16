let email_icon = document.querySelector('.email_icon');
let email_address = document.querySelector('.email');

email_icon.addEventListener('click', function () {
    email_address.classList.add('animate__bounceInLeft');
    email_address.style.visibility = 'visible';
});
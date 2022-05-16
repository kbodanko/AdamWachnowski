let email_icon = document.querySelector('.email_icon');
let email_address = document.querySelector('.email');
let email_address_visible = false;

setTimeout(() => {
    email_icon.addEventListener('click', switchEmail);
}, 200);
function switchEmail() {
    console.log('switch');
    email_address_visible = !email_address_visible;
    if (email_address_visible === true) {
        email_address.classList.remove('animate__bounceOutLeft');
        email_address.classList.add('animate__bounceInLeft');
        email_address.style.visibility = 'visible';
    }
    else {
        email_address.classList.remove('animate__bounceInLeft');
        email_address.classList.add('animate__bounceOutLeft');
        setTimeout(() => {
            email_address.style.visibility = 'hidden';
        }, 500);
    }

}
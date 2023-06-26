const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopup = document.querySelector('.login-open');
const registerPopup = document.querySelector('.register-open');
const iconClose = document.querySelector('.icon-close');
const box = document.querySelector('.box');

registerLink.addEventListener('click', ()=>{
    // wrapper.classList.remove('active2');
    wrapper.classList.add('active1');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active1');
    // wrapper.classList.add('active2');
});

loginPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active1');
    box.classList.add("box-disappear")
});

registerPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active1');
    box.classList.add("box-disappear")
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    box.classList.remove("box-disappear")
});



// function change() {
//     const ocd = document.querySelector('.ocd');
//     const contender = document.querySelector('.contender');
//     if (ocd.className=="fa-bars") {
//         ocd.classList.remove('fa-bars');
//         ocd.classList.remove('bars');
//         ocd.classList.add('fa-caret-left');
//         contender.classList.add('main');
//     }
//     if (ocd.className=="fa-caret-left") {
//         contender.classList.remove('main');
//         ocd.classList.remove('fa-caret-left');
//         ocd.classList.add('fa-bars');
//         ocd.classList.add('bars');
//     }
// }


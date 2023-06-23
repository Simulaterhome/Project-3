const move = document.querySelector('.move');
const type1 = document.querySelector('.type1');
const type2 = document.querySelector('.type2');
const type3 = document.querySelector('.type3');
const none = document.querySelector('.none');
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');
const background = document.querySelector('.background');

const contender = document.querySelector('.contender');
const ocd = document.querySelector('.ocd');
const a = document.querySelector('.a');

const contender2 = document.querySelector('.contender2');
const odc = document.querySelector('.odc');
const b = document.querySelector('.b');

const menuleft = document.querySelector('.menuLeft');
const fter = document.querySelector('.Fter');

const buttonChoosing1 = document.querySelector('.buttonChoosing1');
const buttonChoosing2 = document.querySelector('.buttonChoosing2');
const buttonChoosing3 = document.querySelector('.buttonChoosing3');

type1.addEventListener('click', () => {
    move.classList.remove('moveNonActive');
    move.classList.add('moveActive');
    none.style.visibility = "hidden";
    background.style.backgroundImage = "url(../Picture/dltn.jpg)";
    // type1.style.backgroundImage = "url(../Picture/Hinghoi.gif)";
    // type1.style.backgroundImage = "url(../Picture/FamousAfraidGrebe-mobile.gif)";
    type1.style.backgroundImage = "url(../Picture/AngelicHollowIslandcanary-mobile.gif)";
    type2.style.backgroundImage = "";
    type3.style.backgroundImage = "";
    para1.style.color = "#e9e9e9";
    para2.style.color = "black";
    para3.style.color = "black";
    buttonChoosing1.style.visibility = "visible";
    buttonChoosing2.style.visibility = "hidden";
    buttonChoosing3.style.visibility = "hidden";
});
type2.addEventListener('click', () => {
    move.classList.remove('moveNonActive');
    move.classList.add('moveActive');
    none.style.visibility = "hidden";
    background.style.backgroundImage = "url(../Picture/dltl.jpg)";
    // type2.style.backgroundImage = "url(../Picture/Hinghoi.gif)";
    // type2.style.backgroundImage = "url(../Picture/FamousAfraidGrebe-mobile.gif)";
    type2.style.backgroundImage = "url(../Picture/AngelicHollowIslandcanary-mobile.gif)";
    type1.style.backgroundImage = "";
    type3.style.backgroundImage = "";
    para1.style.color = "black";
    para2.style.color = "#e9e9e9";
    para3.style.color = "black";
    buttonChoosing1.style.visibility = "hidden";
    buttonChoosing2.style.visibility = "visible";
    buttonChoosing3.style.visibility = "hidden";
});
type3.addEventListener('click', () => {
    move.classList.remove('moveNonActive');
    move.classList.add('moveActive');
    none.style.visibility = "hidden";
    background.style.backgroundImage = "url(../Picture/dlgt.jpg)";
    // type3.style.backgroundImage = "url(../Picture/Hinghoi.gif)";
    // type3.style.backgroundImage = "url(../Picture/FamousAfraidGrebe-mobile.gif)";
    type3.style.backgroundImage = "url(../Picture/AngelicHollowIslandcanary-mobile.gif)";
    type1.style.backgroundImage = "";
    type2.style.backgroundImage = "";
    para1.style.color = "black";
    para2.style.color = "black";
    para3.style.color = "#e9e9e9";
    buttonChoosing1.style.visibility = "hidden";
    buttonChoosing2.style.visibility = "hidden";
    buttonChoosing3.style.visibility = "visible";
});

ocd.addEventListener('click', () => {
    contender.classList.add('main');
    // ocd.classList.add('.disappear');
    ocd.style.visibility = "hidden";
    // a.classList.remove('.disappear');
    a.style.visibility = "visible";

    b.style.visibility = "hidden";
    odc.style.visibility = "visible";
    fter.style.visibility = "hidden";
    menuleft.style.visibility = "visible";
    contender2.classList.remove('main2');
});
a.addEventListener('click', () => {
    // a.classList.add('.disappear');
    a.style.visibility = "hidden";
    // ocd.classList.remove('.disappear');
    ocd.style.visibility = "visible";
    menuleft.style.visibility = "hidden";
    contender.classList.remove('main');
});

// function on() {
//     const ocd = document.querySelector('.ocd');
//     const contender = document.querySelector('.contender');
//     if (ocd.className=="fa-bars") {
//         ocd.classList.remove('fa-bars');
//         ocd.classList.remove('bars');
//         ocd.classList.add('fa-caret-left');
//         contender.classList.add('main');
//     }
//     else {
//         contender.classList.remove('main');
//         ocd.classList.remove('fa-caret-left');
//         ocd.classList.add('fa-bars');
//         ocd.classList.add('bars');
//     }
// }

odc.addEventListener('click', () => {
    contender2.classList.add('main2');
    odc.style.visibility = "hidden";
    b.style.visibility = "visible";

    // a.classList.add('.disappear');
    a.style.visibility = "hidden";
    // ocd.classList.remove('.disappear');
    ocd.style.visibility = "visible";
    fter.style.visibility = "visible";
    menuleft.style.visibility = "hidden";
    contender.classList.remove('main');
});
b.addEventListener('click', () => {
    b.style.visibility = "hidden";
    odc.style.visibility = "visible";
    fter.style.visibility = "hidden";
    contender2.classList.remove('main2');
});

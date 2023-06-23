const contender = document.querySelector('.contender');
const ocd = document.querySelector('.ocd');
const a = document.querySelector('.a');

const contender2 = document.querySelector('.contender2');
const odc = document.querySelector('.odc');
const b = document.querySelector('.b');

const menuleft = document.querySelector('.menuLeft');
const fter = document.querySelector('.Fter');

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

//mini menu
const menu1 = document.querySelector('.menu-1');
const menu2 = document.querySelector('.menu-2');
const menu3 = document.querySelector('.menu-3');
const menu4 = document.querySelector('.menu-4');
const menu5 = document.querySelector('.menu-5');
const menu6 = document.querySelector('.menu-6');

const menu1click = document.querySelector('.mini-1');
const menu2click = document.querySelector('.mini-2');
const menu3click = document.querySelector('.mini-3');
const menu4click = document.querySelector('.mini-4');
const menu5click = document.querySelector('.mini-5');
const menu6click = document.querySelector('.mini-6');

menu1click.addEventListener('click', () => {
    menu1.style.display = "block";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
});
menu2click.addEventListener('click', () => {
    menu1.style.display = "none";
    menu2.style.display = "block";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
});
menu3click.addEventListener('click', () => {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "block";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "none";
});
menu4click.addEventListener('click', () => {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "block";
    menu5.style.display = "none";
    menu6.style.display = "none";
});
menu5click.addEventListener('click', () => {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "block";
    menu6.style.display = "none";
});
menu6click.addEventListener('click', () => {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "none";
    menu6.style.display = "block";
});

// choi dau
const choi01 = document.querySelector('.choi-dau-01');
const choi02 = document.querySelector('.choi-dau-02');
const choi03 = document.querySelector('.choi-dau-03');
const choi04 = document.querySelector('.choi-dau-04');
const choi05 = document.querySelector('.choi-dau-05');
const choi06 = document.querySelector('.choi-dau-06');
const choi07 = document.querySelector('.choi-dau-07');
const choi08 = document.querySelector('.choi-dau-08');
const choi09 = document.querySelector('.choi-dau-09');
const choi10 = document.querySelector('.choi-dau-10');

const choi01Inf = document.querySelector('.choi-dau-01-inf');
const choi02Inf = document.querySelector('.choi-dau-02-inf');
const choi03Inf = document.querySelector('.choi-dau-03-inf');
const choi04Inf = document.querySelector('.choi-dau-04-inf');
const choi05Inf = document.querySelector('.choi-dau-05-inf');
const choi06Inf = document.querySelector('.choi-dau-06-inf');
const choi07Inf = document.querySelector('.choi-dau-07-inf');
const choi08Inf = document.querySelector('.choi-dau-08-inf');
const choi09Inf = document.querySelector('.choi-dau-09-inf');
const choi10Inf = document.querySelector('.choi-dau-10-inf');

choi01.addEventListener('click', () => {
    choi01Inf.style.display = "block";
});
choi01Inf.addEventListener('click', () => {
    choi01Inf.style.display = "none";
});

choi02.addEventListener('click', () => {
    choi02Inf.style.display = "block";
});
choi02Inf.addEventListener('click', () => {
    choi02Inf.style.display = "none";
});

choi03.addEventListener('click', () => {
    choi03Inf.style.display = "block";
});
choi03Inf.addEventListener('click', () => {
    choi03Inf.style.display = "none";
});

choi04.addEventListener('click', () => {
    choi04Inf.style.display = "block";
});
choi04Inf.addEventListener('click', () => {
    choi04Inf.style.display = "none";
});

choi05.addEventListener('click', () => {
    choi05Inf.style.display = "block";
});
choi05Inf.addEventListener('click', () => {
    choi05Inf.style.display = "none";
});

choi06.addEventListener('click', () => {
    choi06Inf.style.display = "block";
});
choi06Inf.addEventListener('click', () => {
    choi06Inf.style.display = "none";
});

choi07.addEventListener('click', () => {
    choi07Inf.style.display = "block";
});
choi07Inf.addEventListener('click', () => {
    choi07Inf.style.display = "none";
});

choi08.addEventListener('click', () => {
    choi08Inf.style.display = "block";
});
choi08Inf.addEventListener('click', () => {
    choi08Inf.style.display = "none";
});

choi09.addEventListener('click', () => {
    choi09Inf.style.display = "block";
});
choi09Inf.addEventListener('click', () => {
    choi09Inf.style.display = "none";
});

choi10.addEventListener('click', () => {
    choi10Inf.style.display = "block";
});
choi10Inf.addEventListener('click', () => {
    choi10Inf.style.display = "none";
});
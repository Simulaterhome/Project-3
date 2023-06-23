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

//search bar
const placeCardTemplate = document.querySelector('[data-place-template]');
const placeCardContainer = document.querySelector('[data-place-cards-container]');
const searchInput = document.querySelector('[data-search]');

let places = [];

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    places.forEach(place => {
        const isVisible = place.name.toLowerCase().includes(value) || place.description.toLowerCase().includes(value) || place.img.toLowerCase().includes(value)
        place.element.classList.toggle('disappearReal', !isVisible)

    })
})

fetch("../json/dltn.json")
    .then(res => res.json())
    .then(data => {
        places = data.map(place => {
            const card = placeCardTemplate.content.cloneNode(true).children[0];
            const img = card.querySelector('[data-img]');
            const header = card.querySelector('[data-header]');
            const body = card.querySelector('[data-body]');
            img.src = place.img;
            img.style.cursor = "pointer";
            img.addEventListener('click', e => {
                window.location = place.hyperlink
            });
            header.textContent = place.name;
            body.textContent = place.description;
            placeCardContainer.append(card);
            return { name: place.name, description: place.description, img: place.img, element: card }
        });
    })
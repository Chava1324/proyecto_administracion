function switch_view(elems) {
    elems.forEach(e => {
        e.classList.toggle('hidden')
    });
};

var li_elems = document.querySelectorAll('li');
li_elems.forEach(element => {
    element.addEventListener('click', () => {
        var divs = document.querySelectorAll('body div');
        switch_view(divs);
    });
});

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

function switch_view(elems, e_index) {
    elems.forEach((elem, index) => {
        if (e_index == index) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    });
};

var nav_lis = document.querySelectorAll('nav ul li');
nav_lis.forEach((element, index) => {
    element.addEventListener('click', () => {
        var divs = document.querySelectorAll('body div');
        switch_view(divs, index);
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

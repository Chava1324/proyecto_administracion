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
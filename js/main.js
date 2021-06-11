const navbar = document.querySelector('.navcontainer');
const hambur = document.querySelector('.hamburmenu');
const icons = document.querySelector('.hamburmenu i');
const cruz = document.querySelector('.fa-times');
const barra = document.querySelector('.fa-bars');
const li1 = document.querySelectorAll('ul li a')[0];
const li2 = document.querySelectorAll('ul li a')[1];
const li3 = document.querySelectorAll('ul li a')[2];
const li4 = document.querySelectorAll('ul li a')[3];
const li5 = document.querySelectorAll('ul li a')[4];
const logo = document.querySelector('.logocontainer .navlogo');



document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 50) {
        //navbar.style.backgroundColor = '#504d4d';
        navbar.style.backgroundColor = 'white';
        navbar.style.marginTop = '-.20in';
        barra.style.filter = 'invert(1)';
        hambur.style.marginTop = '-.22in';
        icons.style.fontSize = '120%';
        cruz.style.marginTop = '-.1in';
        li1.style.color = 'black';
        li2.style.color = 'black';
        li3.style.color = 'black';
        li4.style.color = 'black';
        li5.style.color = 'black';
        logo.style.filter = 'invert(1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.marginTop = '0';
        hambur.style.marginTop = '-.10in';
        barra.style.filter = 'invert(0)';
        icons.style.fontSize = '170%';
        li1.style.color = 'white';
        li2.style.color = 'white';
        li3.style.color = 'white';
        li4.style.color = 'white';
        li5.style.color = 'white';
        logo.style.filter = 'invert(0)';


    }
});
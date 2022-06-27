document.body.style.backgroundImage = "Coca002.jpg";


function imgSlider(anything) {
    document.querySelector('.Coca').src = anything;
}

function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;

}

document.querySelector('h2').innerHTML = '<em>Life</em>'
document.querySelector('p').innerHTML = '<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolores! Nulla suscipit cumque repellat voluptatibus similique minus obcaecati, soluta laborum magnam facere nemo dolor quasi cum architecto debitis iure veniam.</strong>'
document.querySelectorAll('a')[6].setAttribute("href", "https://github.com")
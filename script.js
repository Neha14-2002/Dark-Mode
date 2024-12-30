const btn = document.getElementById('btn');
const body = document.querySelector('#body');
const Container = document.querySelector('.btn-container');

let h1 = document.createElement('h1');
h1.innerText = 'Click on the Toggle Button';
h1.style.fontSize = '4rem';
h1.style.fontWeight = '600';
Container.after(h1);

body.style.backgroundColor = 'white';

btn.addEventListener('click', () => {
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        btn.style.left = '85px';
        h1.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        btn.style.left = '5px';
        h1.style.color = 'black';
    }
});
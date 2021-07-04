let btnRed = document.querySelector('#red');
let btnBlue = document.querySelector('#Blue');
let btnYellow = document.querySelector('#Yellow');

btnRed.addEventListener('click', () => btnPrimary.style.backgroundColor = '#FF0000')
btnBlue.addEventListener('click', () => btnPrimary.style.backgroundColor = '#4169E1')
btnYellow.addEventListener('click', () => btnPrimary.style.backgroundColor = '#FFFF00')
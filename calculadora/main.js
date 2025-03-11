const display = document.querySelector('.display');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        display.textContent += valor;
    });
});
function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    firstValue = '';
}
const botones = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const display = document.querySelector('#display');
const borrar = document.querySelector('#borrar');
const borrarTodo = document.querySelector('#borrarTodo');

borrar.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
})

borrarTodo.addEventListener('click', () => {
    display.value = '';
});

const escribir = (event) => {
    display.value += event.target.textContent;
}

botones.forEach(boton => {
    boton.addEventListener('click', escribir);
});




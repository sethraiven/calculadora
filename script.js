function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function calculate() {
    
        document.getElementById('display').value = eval(document.getElementById('display').value);
    
}
function clearDisplay() {
    document.getElementById('display').value = '';
}



function squareRoot() {
    document.getElementById('display').value = Math.sqrt(document.getElementById('display').value);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
   
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
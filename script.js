function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function calculate() {
    
        document.getElementById('display').value = eval(document.getElementById('display').value);
    
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
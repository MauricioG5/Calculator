const display = document.getElementById("display");
let startText = true;

function clearDisplay(){
    display.textContent = '';
    startText = false;
}
function one() {
    if(startText){
        display.textContent = '1';
    }else{
        display.textContent += '1';
    }
    startText = false;
}
function two() {
    if(startText){
        display.textContent = '2';
    }else{
        display.textContent += '2';
    }
    startText = false;
}
function three() {
    if(startText){
        display.textContent = '3';
    }else{
        display.textContent += '3';
    }
    startText = false;
}
function four() {
    if(startText){
        display.textContent = '4';
    }else{
        display.textContent += '4';
    }
    startText = false;
}
function five() {
    if(startText){
        display.textContent = '5';
    }else{
        display.textContent += '5';
    }
    startText = false;
}
function six() {
    if(startText){
        display.textContent = '6';
    }else{
        display.textContent += '6';
    }
    startText = false;
}
function seven() {
    if(startText){
        display.textContent = '7';
    }else{
        display.textContent += '7';
    }
    startText = false;
}
function eight() {
    if(startText){
        display.textContent = '8';
    }else{
        display.textContent += '8';
    }
    startText = false;
}
function nine() {
    if(startText){
        display.textContent = '9';
    }else{
        display.textContent += '9';
    }
}
function zero() {
    if(startText){
        display.textContent = '0';
    }else{
        display.textContent += '0';
    }
}
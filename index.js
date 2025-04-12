let display = document.getElementById("display");

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

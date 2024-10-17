function clearDisplay() {
    document.getElementById('result').value = '';
}

function appendCharacter(character) {
    const resultField = document.getElementById('result');
    resultField.value += character;
}

function backspace() {
    const resultElement = document.getElementById('result');
    resultElement.value = resultElement.value.slice(0, -1);
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        // Evaluate the expression entered by the user
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

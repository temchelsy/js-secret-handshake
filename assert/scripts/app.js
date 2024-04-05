
function decodeHandshake() {
    const inputNumber = parseInt(document.getElementById('number-input').value)
    const binaryString = (inputNumber >>> 0).toString(2)

    const actions = {
        1: 'wink',
        2: 'double blink',
        4: 'close your eyes',
        8: 'jump',
    }

    const actionsArray = [];
    for (let i = 0; i < binaryString.length; i++) {
        const positionValue = 2 ** i;
        if (binaryString[i] === '1' && actions[positionValue]) {
            actionsArray.push(actions[positionValue])
        }
    }

    if (binaryString.length === 5 && binaryString[4] === '1') {
        actionsArray.reverse()
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Secret Handshake Actions: ${actionsArray.join(', ')}`
}

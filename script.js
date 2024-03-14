

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    generateColors();
});

function generateColors() {
    const colorInput = document.querySelector('.color').value;
    const schemeOptions = document.querySelector('.options').value;
    const apiUrl = `https://www.thecolorapi.com/scheme?hex=${colorInput.substr(1)}&mode=${schemeOptions}&count=5&format=json`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const colorsContainer = document.querySelector('.colors');
        colorsContainer.innerHTML = '';

        data.colors.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.style.backgroundColor = color.hex.value;
            colorBox.classList.add('color-box');
            const colorCode = document.createElement('div');
            colorCode.classList.add('color-code');
            colorCode.textContent = color.hex.value;
            colorBox.appendChild(colorCode);
            colorsContainer.appendChild(colorBox);
        });
    })
    
}
document.addEventListener('DOMContentLoaded', function() {
    generateColors();
});

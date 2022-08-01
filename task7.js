let confirmBtn = document.getElementById('confirmBtn');
let paragraphBlock = document.getElementById('paragraphs');
let inputElement = document.getElementById('inputText')

confirmBtn.addEventListener("click", () => {
    let pLast = document.createElement('p');
    pLast.textContent = document.getElementById('inputText').value;
    paragraphBlock.append(pLast);
}, false)

inputElement.addEventListener('input', () => {
    if (document.getElementById('inputText').value) {
        confirmBtn.classList.remove('hidden')
    }
    else {
        confirmBtn.classList.toggle('hidden')
    }
})
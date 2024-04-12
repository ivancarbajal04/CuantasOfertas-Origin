const dynamicTextElement = document.getElementById('dynamicText');
const words = ['Puto', 'el', 'que', 'lee', 'prueba piloto']; // Define tus palabras aquí
let currentWordIndex = 0;

function animateWordIn(word) {
    dynamicTextElement.innerHTML = word;
    dynamicTextElement.classList.add('animate__animated', 'animate__flipInX');
}

function animateWordOut() {
    dynamicTextElement.classList.remove('animate__flipInX');
    dynamicTextElement.classList.add('animate__animated', 'animate__flipOutX');

    setTimeout(() => {
        dynamicTextElement.classList.remove('animate__flipOutX');
    }, 1000); // Tiempo de espera antes de eliminar la clase de animación
}

function showNextWord() {
    animateWordIn(words[currentWordIndex]);

    setTimeout(() => {
        animateWordOut();

        currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 2000); // Tiempo de espera antes de iniciar la animación de salida

    setTimeout(showNextWord, 3000); // Repetir la animación después de 3 segundos
}

// Iniciar la animación
showNextWord();

// Boton whatsapp
document.getElementById("dropdown-button").addEventListener("click", function() {
    document.getElementById("dropdown-content").classList.toggle("show");
});

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.flyer-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

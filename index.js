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

// Función para obtener el próximo viernes a las 00:00
function getNextFriday() {
    var now = new Date();
    var friday = new Date(now);

    // Si hoy es viernes, sumamos 7 días para obtener el próximo viernes
    if (now.getDay() == 6) {
        friday.setDate(friday.getDate() + 7);
    } else {
        // Si no es viernes, calculamos el número de días hasta el próximo viernes
        var daysUntilFriday = 6 - now.getDay();
        if (daysUntilFriday < 0) {
            daysUntilFriday += 7; // Si ya pasó el viernes actual, ajustamos para el próximo viernes
        }
        friday.setDate(friday.getDate() + daysUntilFriday);
    }

    // Establecemos la hora a las 00:00
    friday.setHours(0, 0, 0, 0);
    return friday;
}

// Función para obtener el próximo lunes a las 00:00
function getNextMonday() {
    var now = new Date();
    var monday = new Date(now);

    // Si hoy es lunes, sumamos 7 días para obtener el próximo lunes
    if (now.getDay() == 1) {
        monday.setDate(monday.getDate() + 7);
    } else {
        // Si no es lunes, calculamos el número de días hasta el próximo lunes
        var daysUntilMonday = 1 - now.getDay();
        if (daysUntilMonday < 0) {
            daysUntilMonday += 7; // Si ya pasó el lunes actual, ajustamos para el próximo lunes
        }
        monday.setDate(monday.getDate() + daysUntilMonday);
    }

    // Establecemos la hora a las 00:00
    monday.setHours(0, 0, 0, 0);
    return monday;
}

// Función para obtener el próximo domingo a las 00:00
function getNextSunday() {
    var now = new Date();
    var sunday = new Date(now);

    // Si hoy es domingo, sumamos 7 días para obtener el próximo domingo
    if (now.getDay() == 0) {
        sunday.setDate(sunday.getDate() + 7);
    } else {
        // Si no es domingo, calculamos el número de días hasta el próximo domingo
        var daysUntilSunday = 7 - now.getDay();
        sunday.setDate(sunday.getDate() + daysUntilSunday);
    }

    // Establecemos la hora a las 00:00
    sunday.setHours(0, 0, 0, 0);
    return sunday;
}

// Función para actualizar el contador
function updateCountdown() {
    var countdownElement = document.getElementById('countdown');
    var now = new Date();
    var nextFriday = getNextFriday();
    var nextMonday = getNextMonday();
    var timeRemaining;

    // Si hoy es viernes, calculamos el tiempo restante hasta el próximo lunes
    if (now.getDay() == 5) {
        timeRemaining = nextMonday.getTime() - now.getTime();
    } else {
        // Si hoy es sábado, calculamos el tiempo restante hasta el próximo lunes
        if (now.getDay() == 6) {
            timeRemaining = nextMonday.getTime() - now.getTime();
        } else {
            // Si no es viernes ni sábado, calculamos el tiempo restante hasta el próximo viernes
            timeRemaining = nextFriday.getTime() - now.getTime();
        }
    }

    // Calculamos los días, horas y minutos restantes
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    // Actualizamos el contenido del elemento de conteo regresivo
    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m ";

    // Llamamos a la función para que se ejecute cada minuto
    setTimeout(updateCountdown, 60000); // Actualizamos cada minuto
}

// Llamamos a la función para que se ejecute al cargar la página
updateCountdown();

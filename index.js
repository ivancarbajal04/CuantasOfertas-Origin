const dynamicTextElement = document.getElementById('dynamicText');
const words = ['Los mejores precios']; // Define tus palabras aquí
let currentWordIndex = 0;

function animateWordIn(word) {
    dynamicTextElement.innerHTML = word;
    dynamicTextElement.classList.add('animate__animated', 'animate__fadeIn');
}

function animateWordOut() {
    dynamicTextElement.classList.remove('animate__fadeIn');
    dynamicTextElement.classList.add('animate__animated', 'animate__fadeOut');

    setTimeout(() => {
        dynamicTextElement.classList.remove('animate__fadeOut');
    }, 1000);
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

function updateStatus() {
    const now = new Date();
    const hours = now.getUTCHours() - 3;  // Convert UTC to Argentina time (UTC-3)
    const statusElement = document.getElementById('statusText');

    if (hours >= 9 && hours < 18) {
        statusElement.textContent = 'Online';
        statusElement.className = 'online';
    } else {
        statusElement.textContent = 'Offline';
        statusElement.className = 'offline';
    }
}

updateStatus();

document.getElementById("dropdown-button").addEventListener("click", function() {
    document.getElementById("dropdown-content").classList.toggle("show");
});


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

// Calendario

function openCalendly() {
    window.open('https://calendly.com/ivancarbajal751/30min', 'calendly', 'width=800,height=600');
  }

function openContacto(){
    window.open('pages/contacto/index.html','Contactenme', 'width=700,height=500' )
}

// Modal

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar elementos del modal
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalLink");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("newsletterForm");

    // Abrir el modal cuando se hace clic en el botón
    btn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Cerrar el modal cuando se hace clic en la X
    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar el modal cuando se hace clic fuera del modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Enviar el formulario del newsletter
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar la acción predeterminada de enviar el formulario

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        // Datos a enviar
        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);

        // Configurar y enviar la solicitud AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://hooks.zapier.com/hooks/catch/18644409/3njj078/');
        xhr.onload = function() {
            modal.style.display = "none"; // Cerrar el modal
            alert("¡Gracias por suscribirte, " + name + "!");
        };
        xhr.send(formData);
    });
});



const envios = document.getElementById('envios');
const envioText = envios.querySelector('.envio-text'); // Obtener el elemento que contiene el texto dinámico
const envioWords = ['<i class="fa-solid fa-truck-fast"></i> Envíos a todo el país', '<i class="fa-solid fa-shield-halved"></i> Envio seguro hasta tu puerta', '<i class="fa-regular fa-credit-card"></i> Pagos con tarjeta de débito y crédito', '<i class="fa-solid fa-sack-dollar"></i> Pagos en efectivo']; // Define tus palabras aquí
let inicio = 0;

function mandarPalabras(envioWord) {
    envioText.innerHTML = envioWord;
    envioText.classList.add('animate__animated', 'animate__fadeIn');
}

function sacarPalabras() {
    envioText.classList.remove('animate__fadeIn');
    envioText.classList.add('animate__animated', 'animate__fadeOut');

    setTimeout(() => {
        envioText.classList.remove('animate__fadeOut');
    }, 1000); // Tiempo de espera antes de eliminar la clase de animación
}

function mostrarSigPalabra() {
    mandarPalabras(envioWords[inicio]);

    setTimeout(() => {
        sacarPalabras();
        inicio = (inicio + 1) % envioWords.length;
    }, 2000); // Tiempo de espera antes de iniciar la animación de salida

    setTimeout(mostrarSigPalabra, 3000); // Repetir la animación después de 3 segundos
}

// Iniciar el ciclo de cambio de palabras
mostrarSigPalabra();

// Pop up

function mostrarPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

var popupForm = document.getElementById("popupForm");

popupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la acción predeterminada de enviar el formulario

    var popupEmail = document.getElementById("popupEmail").value;
    var popupName = document.getElementById("popupName").value;

    // Datos a enviar
    var formData = new FormData();
    formData.append('popupEmail', popupEmail);
    formData.append('popupName', popupName);

    // Configurar y enviar la solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hooks.zapier.com/hooks/catch/18644409/3njzfm0/');
    xhr.onload = function() {
        closePopup();
        alert("Gracias por suscribirte " + popupName)
    };
    xhr.send(formData);
});

window.onload = function() {
    mostrarPopup();
};

const menuMobile = document.querySelector("#menuMobile")
const abrir = document.querySelector("#abrirMenu")
const cerrar = document.querySelector("#cerrarMenu")

abrir.addEventListener("click", () => {
    menuMobile.style.opacity = '1'
    menuMobile.style.visibility = 'visible'
})

cerrar.addEventListener("click", () => {
    menuMobile.style.opacity = '0'
    menuMobile.style.visibility = 'hidden'
})

// Contador en pop up

function updateCountdownPopup() {
    var now = new Date();
    var targetDate;

    var daysUntilSaturday = 6 - now.getDay(); 
    if (daysUntilSaturday < 0) {
        daysUntilSaturday += 7;
    }
    targetDate = new Date(now.getTime() + daysUntilSaturday * 24 * 60 * 60 * 1000);
    targetDate.setHours(0, 0, 0, 0);

    // Si hoy es sábado, establece el próximo lunes a las 00:00
    // if (now.getDay() === 6) {
    //     targetDate.setDate(targetDate.getDate() + 2);
    // }

    var timeDiff = targetDate.getTime() - now.getTime();

    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    var countday = days
    var counthour = hours
    var countminute = minutes
    var countseconds = seconds

    // // Cambia el texto si es sábado a las 00:00
    // if (now.getDay() === 6 && now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
    //     countdownText = "Quedan " + days + " días, " + hours + " horas, " + minutes + " minutos y " + seconds + " para finalizar la oferta.";
    // }

    // Actualiza el texto en el elemento HTML
    document.getElementById("countdown-day").textContent = countday;
    document.getElementById("countdown-hour").textContent = counthour;
    document.getElementById("countdown-minute").textContent = countminute;
    document.getElementById("countdown-second").textContent = countseconds;
}

setInterval(updateCountdownPopup, 1000);
updateCountdownPopup();

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


function updateCountdownModal() {
    var now = new Date();
    var targetDate;

    var daysUntilSaturday = 6 - now.getDay(); 
    if (daysUntilSaturday < 0) {
        daysUntilSaturday += 7;
    }
    targetDate = new Date(now.getTime() + daysUntilSaturday * 24 * 60 * 60 * 1000);
    targetDate.setHours(0, 0, 0, 0);

    // Si hoy es sábado, establece el próximo lunes a las 00:00
    // if (now.getDay() === 6) {
    //     targetDate.setDate(targetDate.getDate() + 2);
    // }

    var timeDiff = targetDate.getTime() - now.getTime();

    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    var countday = days
    var counthour = hours
    var countminute = minutes
    var countseconds = seconds

    // // Cambia el texto si es sábado a las 00:00
    // if (now.getDay() === 6 && now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
    //     countdownText = "Quedan " + days + " días, " + hours + " horas, " + minutes + " minutos y " + seconds + " para finalizar la oferta.";
    // }

    // Actualiza el texto en el elemento HTML
    document.getElementById("countdown-day-modal").textContent = countday;
    document.getElementById("countdown-hour-modal").textContent = counthour;
    document.getElementById("countdown-minute-modal").textContent = countminute;
    document.getElementById("countdown-second-modal").textContent = countseconds;
}

setInterval(updateCountdownModal, 1000);
updateCountdownModal();

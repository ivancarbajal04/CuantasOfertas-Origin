function openCalendly() {
    window.open('https://calendly.com/ivan-carabajal-gr_2', 'calendly', 'width=800,height=600');
  }

function openContacto(){
    window.open('../contacto/index.html','Contactenme', 'width=700,height=500' )
}

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

// Actualiza el estado al cargar la página
updateStatus();

// Actualiza el estado cada minuto
setInterval(updateStatus, 60000);



// Código existente para manejar el modal
const modal = document.getElementById("myModal");
const openModalLink = document.getElementById("openModalLink");
const span = document.getElementsByClassName("close")[0];

openModalLink.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Boton wpp

document.getElementById("dropdown-button").addEventListener("click", function(event) {
    event.stopPropagation();  // Evita que el evento se propague al window.onclick
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
};

const statusText = document.getElementById("statusText");
const currentHour = new Date().getHours();

if (currentHour >= 9 && currentHour < 18) {
    statusText.textContent = "Disponibles";
    statusText.style.color = "green";
} else {
    statusText.textContent = "No Disponibles";
    statusText.style.color = "red";
}
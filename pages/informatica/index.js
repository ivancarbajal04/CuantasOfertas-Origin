function openCalendly() {
    window.open('https://calendly.com/ivan-carabajal-gr_2', 'calendly', 'width=800,height=600');
  }

function openContacto(){
    window.open('../../pages/contacto/index.html','Contactenme', 'width=700,height=500' )
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

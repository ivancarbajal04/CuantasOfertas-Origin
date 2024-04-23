document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('newsletterForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe
        
        // Obtiene los valores de los campos del formulario
        var name = document.getElementById('name').value;
        var lastname = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var query = document.getElementById('query').value;
        
        // Crea un objeto con los datos capturados
        var formData = {
            "name": name,
            "lastname": lastname,
            "email": email,
            "phone": phone,
            "query": query
        };
        
        // Convertir el objeto a formato JSON
        var jsonData = JSON.stringify(formData);
        
        // Configurar y enviar la solicitud AJAX
        fetch('https://hooks.zapier.com/hooks/catch/18644409/37bl61j/', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => {
            if (response.ok) {
                console.log('Los datos fueron enviados correctamente a Zapier');
                alert("Gracias por dejar tus datos, nos estaremos contactando a la brevedad")
                window.close()
            } else {
                console.error('Error al enviar los datos a Zapier');
            }
        })
        .catch(error => {
            console.error('Error al enviar los datos a Zapier:', error);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DEL SLIDER ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Iniciar el slider
    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
    }


    // --- LÓGICA DEL FORMULARIO DE CONTACTO ---
    const form = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        // Prevenimos el comportamiento por defecto del formulario (que es recargar la página)
        event.preventDefault(); 
        
        // Simulación de envío. En un proyecto real, aquí iría el código
        // para enviar los datos a un servidor.
        
        // Obtenemos los datos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        console.log('Enviando formulario...');
        console.log(`Nombre: ${name}, Email: ${email}`);

        // Mostramos un mensaje de éxito al usuario
        feedbackDiv.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
        feedbackDiv.className = 'success'; // Aplicamos la clase para el estilo verde
        
        // Limpiamos el formulario después del envío
        form.reset();

        // Ocultamos el mensaje después de 5 segundos
        setTimeout(() => {
            feedbackDiv.className = 'hidden';
        }, 5000);
    });

});
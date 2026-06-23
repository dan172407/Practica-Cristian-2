// ==========================================================================
// Portal del Equipo 5 — interactividad avanzada y control de versiones
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Animación de entrada escalonada para las tarjetas del equipo
  const cards = document.querySelectorAll('.team-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('is-visible');
    }, index * 150);
  });

  // 3. Resaltar una tarjeta al hacer clic
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => {
        if (c !== card) c.classList.remove('is-active');
      });
      card.classList.toggle('is-active');
    });
  });

  // 4. Validación del Formulario de Contacto (Requisito obligatorio del PDF)
  const form = document.getElementById('form-contacto');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Detiene el envío automático

      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      
      // Contenedor para mostrar feedback al usuario
      let infoMsg = document.getElementById('form-message');
      if (!infoMsg) {
        infoMsg = document.createElement('p');
        infoMsg.id = 'form-message';
        form.appendChild(infoMsg);
      }

      // Validar que los campos no estén vacíos
      if (nombre === '' || correo === '' || mensaje === '') {
        infoMsg.className = 'msg-error';
        infoMsg.textContent = '❌ Por favor, completa todos los campos del formulario.';
        return;
      }

      // Si todo es válido, simula envío exitoso
      infoMsg.className = 'msg-exito';
      infoMsg.textContent = '🚀 ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
      form.reset(); // Limpia los campos
    });
  }

  console.log('Portal del Equipo 5 totalmente operativo. Flujo: main → feature → Pull Request → merge.');
});
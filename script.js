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

  // 3. Resaltar una tarjeta al hacer clic (Manejo de eventos requerido por rúbrica)
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => {
        if (c !== card) c.classList.remove('is-active');
      });
      card.classList.toggle('is-active');
    });
  });

  console.log('Manejadores de eventos para selección interactiva listos.');
});
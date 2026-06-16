// ==========================================================================
// Portal del Equipo 5 — interactividad
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Animación de entrada escalonada para las tarjetas del equipo
  const cards = document.querySelectorAll('.team-card');

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('is-visible');
    }, index * 150);
  });

  // Resaltar una tarjeta al hacer clic (simula "seleccionar" un colaborador)
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => {
        if (c !== card) c.classList.remove('is-active');
      });
      card.classList.toggle('is-active');
    });
  });

  console.log('Portal del Equipo 5 listo. Flujo: main → feature → Pull Request → merge.');
});

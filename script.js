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

  console.log('Efectos de animación escalonada cargados.');
});
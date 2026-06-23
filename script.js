// ==========================================================================
// Portal del Equipo 5 — interactividad avanzada y control de versiones
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Año dinámico en el footer (Manipulación del DOM requerida por rúbrica)
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  console.log('Portal del Equipo 5 inicializado correctamente.');
});
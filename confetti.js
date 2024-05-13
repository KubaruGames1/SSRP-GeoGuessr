// En felicitaciones.html
const puntuacionSpan = document.getElementById("puntuacion");
const params = new URLSearchParams(window.location.search);
const puntuacion = params.get("puntuacion");
puntuacionSpan.textContent = puntuacion;

// Iniciar la animación de confeti
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

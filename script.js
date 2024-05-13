const mapImage = document.getElementById("map-image");
const buttonsContainer = document.getElementById("buttons-container");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const resultMessage = document.getElementById("result-message");

// Zone data (add more zones here)
const zones = [
  {
    name: "Zone 1",
    correctAnswer: "entrance", 
    images: [
      "imagenes/imagen1.png",
      "imagenes/imagen2.png",
      "imagenes/imagen3.png",
      "imagenes/imagen4.png",
      "imagenes/imagen5.png",
      "imagenes/imagen6.png",
    ]
  },
  {
    name: "Zone 2",
    correctAnswer: "cdc", 
    images: [
      "imagenes/imagen7.png",
      "imagenes/imagen8.png",
      "imagenes/imagen9.png",
      "imagenes/imagen10.png",
      "imagenes/imagen11.png",
      "imagenes/imagen12.png",
    ]
  },
  {
    name: "Zone 3",
    correctAnswer: "con 2", 
    images: [
      "imagenes/imagen13.png",
      "imagenes/imagen14.png",
      "imagenes/imagen15.png",
      "imagenes/imagen16.png",
      "imagenes/imagen17.png",
      "imagenes/imagen18.png",
    ]
  },
  {
    name: "Zone 4",
    correctAnswer: "medcenter", 
    images: [
      "imagenes/imagen19.png",
      "imagenes/imagen20.png",
      "imagenes/imagen21.png",
      "imagenes/imagen22.png",
      "imagenes/imagen23.png",
      "imagenes/imagen24.png",
    ]
  },
  {
    name: "Zone 5",
    correctAnswer: "scp 120", 
    images: [
      "imagenes/imagen25.png",
      "imagenes/imagen26.png",
      "imagenes/imagen27.png",
    ]
  },
  {
    name: "Zone 6",
    correctAnswer: "scp 178", 
    images: [
      "imagenes/imagen28.png",
      "imagenes/imagen29.png",
    ]
  },
  {
    name: "Zone 7",
    correctAnswer: "scp 714", 
    images: [
      "imagenes/imagen30.png",
      "imagenes/imagen31.png",
    ]
  },
  {
    name: "Zone 8",
    correctAnswer: "scp 148", 
    images: [
      "imagenes/imagen32.png",
      "imagenes/imagen33.png",
      "imagenes/imagen34.png",
    ]
  },
  {
    name: "Zone 9",
    correctAnswer: "scp 1499", 
    images: [
      "imagenes/imagen35.png",
      "imagenes/imagen36.png",
      "imagenes/imagen37.png",
    ]
  }
];

let availableZones = [...zones];
let currentZone;
let correctAnswers = 0;
let attemptsRemaining = 3;

function loadRandomZone() {
  if (availableZones.length === 0) {
    window.location.href = "felicitaciones.html?puntuacion=" + correctAnswers + "&total=" + zones.length;
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableZones.length);
  currentZone = availableZones[randomIndex];
  availableZones.splice(randomIndex, 1);

  mapImage.src = currentZone.images[0];

  buttonsContainer.innerHTML = "";
  for (let i = 0; i < currentZone.images.length; i++) {
    const button = document.createElement("button");
    button.textContent = `View ${i + 1}`;
    button.addEventListener("click", () => {
      mapImage.src = currentZone.images[i];
    });
    buttonsContainer.appendChild(button);
  }

  resultMessage.textContent = "";
  guessInput.value = "";
  guessInput.focus();

  attemptsRemaining = 3;
}

loadRandomZone(); // Load a random zone on start

function verifyAnswer() {
  const userAnswer = guessInput.value.trim().toLowerCase();
  const correctAnswer = currentZone.correctAnswer;

  if (correctAnswer === userAnswer) {
    resultMessage.textContent = "Correct!";
    resultMessage.classList.remove("error");
    resultMessage.classList.add("success");
    correctAnswers++;

    if (availableZones.length > 0) {
      loadRandomZone();
    } else {
      window.location.href = "felicitaciones.html?puntuacion=" + correctAnswers + "&total=" + zones.length;
    }
  } else {
    attemptsRemaining--;
    if (attemptsRemaining > 0) {
      resultMessage.textContent = `Incorrect. You have ${attemptsRemaining} attempts left.`;
    } else {
      resultMessage.textContent = "Incorrect. Moving to the next zone.";
      setTimeout(() => {
        loadRandomZone();
      }, 2000); // Wait 2 seconds before moving to the next zone
    }
    resultMessage.classList.remove("success");
    resultMessage.classList.add("error");
  }

  guessInput.value = "";
}

submitButton.addEventListener("click", verifyAnswer);

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    verifyAnswer();
  }
});

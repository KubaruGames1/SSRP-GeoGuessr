const mapImage = document.getElementById("map-image");
const buttonsContainer = document.getElementById("buttons-container");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const resultMessage = document.getElementById("result-message");
const backgroundMusic = document.getElementById("background-music");
const volumeSlider = document.getElementById("volume-slider");
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
  },
  {
    name: "Zone 10",
    correctAnswer: "armory", 
    images: [
      "imagenes/imagen38.png",
      "imagenes/imagen39.png",
      "imagenes/imagen40.png",
      "imagenes/imagen41.png",
    ]
  },
  {
    name: "Zone 11",
    correctAnswer: "scp 1139", 
    images: [
      "imagenes/imagen42.png",
      "imagenes/imagen43.png",
      "imagenes/imagen44.png",
    ]
  },
  {
    name: "Zone 12",
    correctAnswer: "scp 207", 
    images: [
      "imagenes/imagen45.png",
      "imagenes/imagen46.png",
      "imagenes/imagen47.png",
    ]
  },
  {
    name: "Zone 13",
    correctAnswer: "scp 330", 
    images: [
      "imagenes/imagen48.png",
      "imagenes/imagen49.png",
      "imagenes/imagen50.png",
    ]
  },
  {
    name: "Zone 14",
    correctAnswer: "scp 999", 
    images: [
      "imagenes/imagen51.png",
      "imagenes/imagen52.png",
      "imagenes/imagen53.png",
    ]
  },
  {
    name: "Zone 15",
    correctAnswer: "scp 1025", 
    images: [
      "imagenes/imagen54.png",
      "imagenes/imagen55.png",
      "imagenes/imagen56.png",
    ]
  },
  {
    name: "Zone 16",
    correctAnswer: "scp 403", 
    images: [
      "imagenes/57.png",
      "imagenes/58.png",
      "imagenes/59.png",
    ]
  },
  {
    name: "Zone 17",
    correctAnswer: "scp 1193", 
    images: [
      "imagenes/60.png",
      "imagenes/61.png",
      "imagenes/62.png",
    ]
  },
  {
    name: "Zone 18",
    correctAnswer: "scp 517", 
    images: [
      "imagenes/63.png",
      "imagenes/64.png",
      "imagenes/65.png",
    ]
  },
  {
    name: "Zone 19",
    correctAnswer: "scp 860", 
    images: [
      "imagenes/66.png",
      "imagenes/67.png",
      "imagenes/68.png",
    ]
  },
  {
    name: "Zone 20",
    correctAnswer: "scp 224", 
    images: [
      "imagenes/69.png",
      "imagenes/70.png",
      "imagenes/71.png",
    ]
  },
  {
    name: "Zone 21",
    correctAnswer: "scp 914", 
    images: [
      "imagenes/72.png",
    ]
  },
  {
    name: "Zone 22",
    correctAnswer: "scp 087", 
    images: [
      "imagenes/73.png",
      "imagenes/74.png",
      "imagenes/75.png",
    ]
  },
  {
    name: "Zone 23",
    correctAnswer: "con 1", 
    images: [
      "imagenes/76.png",
      "imagenes/77.png",
      "imagenes/78.png",
    ]
  },
  {
    name: "Zone 24",
    correctAnswer: "atrium", 
    images: [
      "imagenes/79.png",
      "imagenes/80.png",
      "imagenes/81.png",
    ]
  },
  {
    name: "Zone 25",
    correctAnswer: "tram line", 
    images: [
      "imagenes/82.png",
      "imagenes/83.png",
      "imagenes/84.png",
    ]
  },
  {
    name: "Zone 26",
    correctAnswer: "sewers", 
    images: [
      "imagenes/85.png",
      "imagenes/86.png",
      "imagenes/87.png",
    ]
  },
  {
    name: "Zone 27",
    correctAnswer: "maintenance", 
    images: [
      "imagenes/88.png",
      "imagenes/89.png",
      "imagenes/90.png",
    ]
  },
  {
    name: "Zone 28",
    correctAnswer: "generators", 
    images: [
      "imagenes/91.png",
    ]
  },
  {
    name: "Zone 29",
    correctAnswer: "coolant pumps", 
    images: [
      "imagenes/92.png",
    ]
  },
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
  const backgroundMusic = document.getElementById("background-music");

// Reproducir la música automáticamente al cargar la página
backgroundMusic.play().catch(error => {
  console.error("Error al reproducir la música:", error);
  // Opcional: Mostrar un mensaje al usuario si hay problemas para reproducir la música.
});

});

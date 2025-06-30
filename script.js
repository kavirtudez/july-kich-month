document.addEventListener("DOMContentLoaded", function () {
  const cake = document.querySelector(".cake");
  const candleCountDisplay = document.getElementById("candleCount");
  let candles = [];
  let audioContext;
  let analyser;
  let microphone;
  let audio = new Audio('hbd.mp3');
  let surpriseButtonCreated = false; // Flag to check if the button is already created

  // Get the dinosaur elements
  const dinoLeft = document.querySelector('.dino-left');
  const dinoRight = document.querySelector('.dino-right');

  function updateCandleCount() {
    const activeCandles = candles.filter(
      (candle) => !candle.classList.contains("out")
    ).length;
    candleCountDisplay.textContent = activeCandles;
  }

  function addCandle(left, top) {
    const candle = document.createElement("div");
    candle.className = "candle";
    candle.style.left = left + "px";
    candle.style.top = top + "px";

    const flame = document.createElement("div");
    flame.className = "flame";
    candle.appendChild(flame);

    cake.appendChild(candle);
    candles.push(candle);
    updateCandleCount();
  }

  cake.addEventListener("click", function (event) {
    const rect = cake.getBoundingClientRect();
    const left = event.clientX - rect.left;
    const top = event.clientY - rect.top;
    addCandle(left, top);
  });

  function isBlowing() {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    let average = sum / bufferLength;

    return average > 50; // Adjust sensitivity as needed
  }

  function blowOutCandles() {
    let blownOut = 0;

    if (candles.length > 0 && candles.some((candle) => !candle.classList.contains("out"))) {
      if (isBlowing()) {
        candles.forEach((candle) => {
          if (!candle.classList.contains("out") && Math.random() > 0.5) {
            candle.classList.add("out");
            blownOut++;
          }
        });
      }

      if (blownOut > 0) {
        updateCandleCount();
      }

      // If all candles are blown out, trigger confetti and surprise button
      if (candles.every((candle) => candle.classList.contains("out"))) {
        setTimeout(function() {
          triggerConfetti();
          endlessConfetti(); // Start endless confetti

          // Update the candleCountDisplay text content
          const candleCountDisplay = document.querySelector('.candle-count-display');
          candleCountDisplay.textContent = 'HAPPY 21ST BIRTHDAY MONTH, KICH!';

          // Play the birthday song
          audio.play();

          // Show dinosaur GIFs
          dinoLeft.style.display = 'block';
          dinoRight.style.display = 'block';

          // Check if the surprise button is already created to avoid duplication
          if (!surpriseButtonCreated) {
            showSurpriseButton(); // Call function to display the button
          }

        }, 200);
      }
    }
  }

  function showSurpriseButton() {
    // Create and display the "Click for Surprise" button
    const surpriseButton = document.createElement("button");
    surpriseButton.textContent = "See Gift";
    surpriseButton.className = "surprise-button"; // Add CSS class for styling
    document.body.appendChild(surpriseButton);
    surpriseButtonCreated = true; // Set flag to true to avoid recreating the button

    // Add click event to redirect to flags.html
    surpriseButton.addEventListener("click", function () {
      window.location.href = 'flags.html'; // Redirect to the surprise page
    });
  }

  // Microphone setup for detecting blow
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        setInterval(blowOutCandles, 200);
      })
      .catch(function (err) {
        console.log("Unable to access microphone: " + err);
      });
  } else {
    console.log("getUserMedia not supported on your browser!");
  }
});

// Confetti trigger functions
function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function endlessConfetti() {
  setInterval(function() {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0 }
    });
  }, 1000);
}

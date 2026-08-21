let currentPin = "";
const correctPin = "1234"; // Define aquí la clave de acceso (ejemplo: fecha importante)

function pressNum(num) {
  if (currentPin.length < 4) {
    currentPin += num;
    updateDots();
  }
}

function clearPin() {
  currentPin = "";
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index < currentPin.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
  });
}

function checkPin() {
  if (currentPin === correctPin) {
    document.getElementById("pin-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    alert("PIN Incorrecto. Inténtalo de nuevo.");
    clearPin();
  }
}

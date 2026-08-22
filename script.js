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
    const curtainContainer = document.getElementById("flower-curtain");

    // 1. Mostrar el contenedor de la cortina
    curtainContainer.classList.remove("hidden-curtain");

    // 2. Hacer que las cortinas se cierren hacia el centro
    setTimeout(() => {
      curtainContainer.classList.add("active");
    }, 50);

    // 3. Cuando la cortina esté totalmente cerrada (0.8s), ocultar la pantalla del PIN y mostrar la web
    setTimeout(() => {
      document.getElementById("pin-screen").classList.add("hidden");
      document.getElementById("main-content").classList.remove("hidden");
    }, 850);

    // 4. Abrir la cortina hacia los lados para revelar el regalo
    setTimeout(() => {
      curtainContainer.classList.remove("active");
      curtainContainer.classList.add("open");
    }, 1200);

    // 5. Limpiar y ocultar completamente el contenedor al terminar la animación
    setTimeout(() => {
      curtainContainer.classList.add("hidden-curtain");
      curtainContainer.classList.remove("open");
    }, 2000);

  } else {
    alert("PIN Incorrecto. Inténtalo de nuevo.");
    clearPin();
  }
}

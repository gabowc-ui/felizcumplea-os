let currentPin = "";
const correctPin = "1111"; // Define aquí la clave de acceso (ejemplo: fecha importante)

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

    // 2. Cerrar la cortina hacia el centro
    setTimeout(() => {
      curtainContainer.classList.add("active");
    }, 50);

    // 3. Cuando la cortina esté totalmente cerrada: CAMBIAMOS EL FONDO Y PANTALLA
    setTimeout(() => {
      document.getElementById("pin-screen").classList.add("hidden");
      document.getElementById("main-content").classList.remove("hidden");
      
      // AQUÍ CAMBIAMOS AL FONDO LARGO DE SAKURA
      document.body.classList.add("bg-sakura");
    }, 850);

    // 4. Abrir la cortina revelando el nuevo fondo y contenido
    setTimeout(() => {
      curtainContainer.classList.remove("active");
      curtainContainer.classList.add("open");
    }, 1200);

    // 5. Ocultar el contenedor de la cortina al terminar
    setTimeout(() => {
      curtainContainer.classList.add("hidden-curtain");
      curtainContainer.classList.remove("open");
    }, 2000);

  } else {
    alert("PIN Incorrecto. Inténtalo de nuevo.");
    clearPin();
  }
}

function toggleScroll() {
    const scroll = document.getElementById('chineseScroll');
    scroll.classList.toggle('open');
}

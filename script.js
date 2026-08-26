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

// --- LLUVIA DE CORAZONES ---
function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    
    const simbolos = ['❤️', '💖', '🌸', '✨'];
    corazon.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
    
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.fontSize = (Math.random() * 20 + 10) + 'px';
    
    const duracion = Math.random() * 4 + 4;
    corazon.style.animationDuration = duracion + 's';
    
    document.body.appendChild(corazon);
    
    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

// --- MENSAJES SECRETOS ---
const listaMensajes = [
    "Aunque estemos a 2705km de distancia, siempre te siento cerquita.",
    "Eres mi persona favorita en el mundo.",
    "Cada momento contigo es un recuerdo que guardo con cariño.",
    "Gracias por hacerme sonreír incluso a la distancia.",
    "No importa la distancia, mi corazón siempre está contigo."
];

let lluviaActiva = null; // Variable para controlar que no se acumulen muchas lluvias

function abrirMensaje() {
    // 1. Mostrar el mensaje secreto
    const indice = Math.floor(Math.random() * listaMensajes.length);
    document.getElementById('texto-secreto').innerText = `"${listaMensajes[indice]}"`;
    document.getElementById('modal-mensaje').style.display = 'block';

    // 2. Desatar la lluvia de corazones al hacer clic
    if (!lluviaActiva) {
        lluviaActiva = setInterval(crearCorazon, 400);

        // La lluvia se detiene automáticamente después de 6 segundos
        setTimeout(() => {
            clearInterval(lluviaActiva);
            lluviaActiva = null;
        }, 6000); 
    }
}

function cerrarMensaje() {
    document.getElementById('modal-mensaje').style.display = 'none';
}

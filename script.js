// ===================== SCRIPT.JS (MODELO EDITORIAL) =====================
// ⚠️ IMPORTANTE: NO usar "$" porque rsvp.js ya lo usa.
// Usamos "$$" para evitar conflicto.
const $$ = (s) => document.querySelector(s);

document.addEventListener("DOMContentLoaded", () => {
  // 1) Pintar invitado en portada (desde loads.js)
  paintGuestCard();

  // 2) Botón abrir invitación
  const btnOpenInvite = $$("#btnOpenInvite");
  if (btnOpenInvite) {
    btnOpenInvite.addEventListener("click", openInvitation);
  }

  const envelope = document.querySelector(".envelope");
if (envelope) {
  envelope.addEventListener("click", openInvitation);
}

  // 3) Animaciones al hacer scroll
  initScrollReveal();

  initGoldReveal();

  // 4) Música
  initMusic();

// 6) Foto separador rotativa (si existe el elemento)
initRotatingSep([
  "images/FOTOS/h1.jpg",
  "images/FOTOS/h2.jpg",
  "images/FOTOS/h3.jpg",
  "images/FOTOS/h4.jpg",
  "images/FOTOS/h5.jpg",
  "images/FOTOS/h6.jpg"
]);
});

/* ===================== INVITADO EN PORTADA ===================== */
function paintGuestCard() {
  const nameEl = $$("#guestCardName");
  const seatsEl = $$("#guestCardSeats");
  const seatsTxtEl = $$("#guestCardSeatsTxt");

  // Si no existen (por si aún no pegaste el HTML), no rompe
  if (!nameEl || !seatsEl) return;

  const g = window.currentGuest;

  if (g && g.name) {
    nameEl.textContent = g.name;
    const p = Number(g.passes || 1);
    seatsEl.textContent = String(p);
    if (seatsTxtEl) seatsTxtEl.textContent = p === 1 ? "lugar" : "lugares";
  } else {
    // Si entraste sin ?id=
    nameEl.textContent = "Nombre del invitado";
    seatsEl.textContent = "x";
    if (seatsTxtEl) seatsTxtEl.textContent = "lugares";
  }
}

/* ===================== ABRIR INVITACIÓN ===================== */
function openInvitation() {
  const cover = $$("#cover");
  const main = $$("#invitation");

  if (!cover || !main) return;

  // Ocultar portada con animación
  cover.classList.add("is-hidden");

  setTimeout(async () => {
    cover.style.display = "none";

    // Mostrar invitación
    main.classList.add("is-open");
    main.setAttribute("aria-hidden", "false");

    // ✅ Reproducir música automáticamente (por el click del usuario)
    await autoplayMusic();

    // Scroll suave al hero
    setTimeout(() => {
      $$("#hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

  }, 600);
}

/* ===================== REVEAL AL SCROLL ===================== */
function initScrollReveal() {
  const els = document.querySelectorAll(".fade-in-element");
  if (!els || els.length === 0) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    },
    { threshold: 0.15 }
  );

  els.forEach((el) => obs.observe(el));
}

/* ================= Animar True Love ================= */
function initGoldReveal() {
  const el = document.querySelector(".reveal-gold");
  if (!el) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  obs.observe(el);
}

/* ===================== MÚSICA ===================== */
/* ===================== MÚSICA ===================== */
function initMusic() {
  const btn = $$("#btnMusic");
  const audio = $$("#bgMusic");
  if (!btn || !audio) return;

  // asegurar loop
  audio.loop = true;

  // Estado inicial del botón
  btn.textContent = "▶";

  // Click manual play/pause
  btn.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        btn.textContent = "❚❚";
      } else {
        audio.pause();
        btn.textContent = "▶";
      }
    } catch (e) {
      console.warn("No se pudo reproducir audio:", e);
    }
  });
}

/* ===================== AUTO-PLAY AL ABRIR ===================== */
async function autoplayMusic() {
  const btn = $$("#btnMusic");
  const audio = $$("#bgMusic");
  if (!btn || !audio) return;

  try {
    audio.loop = true;
    await audio.play();
    btn.textContent = "❚❚";
  } catch (e) {
    // Si el navegador bloquea, dejamos en play para que el usuario lo inicie
    console.warn("Auto-play bloqueado:", e);
    btn.textContent = "▶";
  }
}

/* ===================== SEPARADOR ROTATIVO ===================== */
function initRotatingSep(images) {
  const imgEl = document.getElementById("rotatingSepImg");
  if (!imgEl || !images || images.length === 0) return;

  let currentIndex = 0;

  function changeImage() {
    imgEl.style.opacity = "0";

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;

      const nextSrc = images[currentIndex];

      imgEl.onload = () => {
        imgEl.style.opacity = "1";
      };

      imgEl.onerror = () => {
        console.error("No se pudo cargar la imagen:", nextSrc);
        imgEl.style.opacity = "1";
      };

      imgEl.src = nextSrc;
    }, 400);
  }

  // por si quiere asegurar visibilidad inicial
  imgEl.style.opacity = "1";

  setInterval(changeImage, 5000);
}
//animaciones
// ================= ANIMACIONES POR SECCIÓN (AUTO) =================
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  // fallback por si el navegador no soporta IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    sections.forEach(s => s.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target); // solo una vez
      }
    });
  }, { threshold: 0.18 });

  sections.forEach(s => io.observe(s));
});

// ================= TRANSFERENCIA MODAL =================
document.addEventListener("DOMContentLoaded", function(){

  const btnOpen = document.getElementById("btnTransferencia");
  const btnClose = document.getElementById("btnCloseTransfer");
  const backdrop = document.getElementById("transferBackdrop");

  if(btnOpen){
    btnOpen.addEventListener("click", function(){
      backdrop.style.display = "flex";
    });
  }

  if(btnClose){
    btnClose.addEventListener("click", function(){
      backdrop.style.display = "none";
    });
  }

  if(backdrop){
    backdrop.addEventListener("click", function(e){
      if(e.target === backdrop){
        backdrop.style.display = "none";
      }
    });
  }

});

//COPIAR CUENTA//
// ================= TRANSFERENCIA MODAL + COPIAR CUENTA =================
document.addEventListener("DOMContentLoaded", () => {
  const btnOpen = document.getElementById("btnTransferencia");
  const btnClose = document.getElementById("btnCloseTransfer");
  const backdrop = document.getElementById("transferBackdrop");

  const btnCopy = document.getElementById("btnCopyAccount");
  const accountEl = document.getElementById("accountNumber");
  const toast = document.getElementById("copyToast");

  function openModal(){
    if(!backdrop) return;
    backdrop.style.display = "flex";
    backdrop.setAttribute("aria-hidden", "false");
  }

  function closeModal(){
    if(!backdrop) return;
    backdrop.style.display = "none";
    backdrop.setAttribute("aria-hidden", "true");
  }

  async function copyText(text){
    // Clipboard API (moderno)
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }

  function showToast(msg){
    if(!toast) return;
    toast.textContent = msg;
    toast.style.display = "block";
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      toast.style.display = "none";
    }, 1400);
  }

  if (btnOpen) btnOpen.addEventListener("click", openModal);
  if (btnClose) btnClose.addEventListener("click", closeModal);

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  if (btnCopy) {
    btnCopy.addEventListener("click", async () => {
  
      const bank = document.getElementById("bankName")?.textContent.trim();
      const account = document.getElementById("accountNumber")?.textContent.trim();
      const type = document.getElementById("accountType")?.textContent.trim();
      const owner = document.getElementById("accountOwner")?.textContent.trim();
  
      const fullText = 
  `Datos de Transferencia:
  Banco: ${bank}
  Cuenta: ${account}
  Tipo: ${type}
  Nombre: ${owner}`;
  
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(fullText);
        } else {
          const ta = document.createElement("textarea");
          ta.value = fullText;
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
  
        showToast("✅ Datos bancarios copiados");
  
      } catch (err) {
        showToast("⚠️ No se pudo copiar");
      }
  
    });
  }
});


//RSVP
document.addEventListener("DOMContentLoaded", () => {

  const btnConfirmar = document.getElementById("btnConfirmarRsvp");

  if (!btnConfirmar) return;

  btnConfirmar.addEventListener("click", () => {

    const guest = window.currentGuest;

    if (!guest) {
      alert("No se encontró información del invitado.");
      return;
    }

    const name = guest.name;
    const passes = guest.passes;

    const phone = "50230423137"; // Cambia por el número de WhatsApp

    const message =
`Hola, confirmo mi asistencia a los quince de Britani Samanta.

Nombre: ${name}
Número de pases: ${passes}

¡Nos vemos en la fiesta!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

  });

});

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.querySelector(".lightbox-close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox){
    lightbox.style.display = "none";
  }
});

// =============================
// BUENOS DESEOS (VERSIÓN LIMPIA)
// =============================

// 🔹 Toggle lista de deseos
window.toggleWishes = function () {

  const wishesDiv = document.getElementById("wishes-container");

  if (!wishesDiv) return;

  const isHidden = wishesDiv.classList.contains("hidden");

  // Mostrar
  if (isHidden) {

    wishesDiv.innerHTML = "Cargando deseos...";

    escucharDeseos((lista) => {

      wishesDiv.innerHTML = "";

      lista.reverse().forEach((wish) => {

        const p = document.createElement("p");
        p.innerHTML = `<strong>${wish.nombre}:</strong> ${wish.mensaje}`;

        wishesDiv.appendChild(p);

      });

    });

    wishesDiv.classList.remove("hidden");

  } 
  // Ocultar
  else {

    wishesDiv.classList.add("hidden");

  }

};


// 🔹 Toggle formulario (FIX PRINCIPAL)
window.toggleWishForm = function () {

  const form = document.getElementById("wish-form");

  if (!form) return;

  form.classList.toggle("hidden");

};


// 🔹 Enviar deseo a Firebase
window.submitWish = function () {

  const nameInput = document.getElementById("wish-name");
  const messageInput = document.getElementById("wish-message");

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    alert("Por favor completa tu nombre y mensaje.");
    return;
  }

  guardarDeseo(name, message)
    .then(() => {

      // limpiar inputs
      nameInput.value = "";
      messageInput.value = "";

      alert("¡Gracias por tu mensaje!");

    })
    .catch((error) => {

      console.error(error);
      alert("Hubo un error al enviar tu mensaje.");

    });

};


// 🔹 Estado inicial seguro (CRÍTICO)
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("wish-form");
  const wishes = document.getElementById("wishes-container");

  if (form) form.classList.add("hidden");
  if (wishes) wishes.classList.add("hidden");

});



//contaodr
const targetDate = new Date("2026-07-18T00:00:00").getTime();

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateFlipSingle(el, newValue) {
  if (!el) return;

  const digit = el.querySelector(".digit");
  if (!digit) return;

  const currentValue = digit.textContent;
  if (currentValue === newValue) return;

  el.classList.add("is-flipping");

  setTimeout(() => {
    digit.textContent = newValue;
  }, 250);

  setTimeout(() => {
    el.classList.remove("is-flipping");
  }, 500);
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    updateFlipSingle(document.getElementById("flipDays"), "00");
    updateFlipSingle(document.getElementById("flipHours"), "00");
    updateFlipSingle(document.getElementById("flipMins"), "00");
    updateFlipSingle(document.getElementById("flipSecs"), "00");
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((distance / (1000 * 60)) % 60);
  const secs = Math.floor((distance / 1000) % 60);

  updateFlipSingle(document.getElementById("flipDays"), pad(days));
  updateFlipSingle(document.getElementById("flipHours"), pad(hours));
  updateFlipSingle(document.getElementById("flipMins"), pad(mins));
  updateFlipSingle(document.getElementById("flipSecs"), pad(secs));
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
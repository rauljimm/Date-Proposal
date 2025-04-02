document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar elementos
    const yesBtn = document.querySelector(".yesBtn");
    const noBtn = document.querySelector(".noBtn");
    const answerText = document.querySelector(".answer");
    const jokingCourage = document.getElementById("joking-courage");
    const shakingCourage = document.getElementById("shaking-courage");
    const milkandmocha = document.getElementById("milk-mocha");

    // Evento para el botón "Sí"
    yesBtn.addEventListener("click", () => {
        answerText.textContent = "¡Sabía que dirías que sí! Te tengo loquita ❤️";
        jokingCourage.style.display = "none";
        milkandmocha.style.display = "block";  
        shakingCourage.style.display = "none"; 
        noBtn.style.display = "block";     
    });

    // Evento para el botón "No"
    noBtn.addEventListener("click", () => {
        answerText.textContent = "Intenta responderme que no otra vez listilla 😂";
        shakingCourage.style.display = "none"; // Oculta el GIF original
        jokingCourage.style.display = "block";   // Muestra el nuevo GIF
        noBtn.style.display = "none";

    });
});

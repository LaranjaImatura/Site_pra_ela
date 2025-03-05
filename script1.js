document.addEventListener("DOMContentLoaded", function () {
    function createHeart() {
        const heart = document.createElement('span');
        heart.innerHTML = "❤️"; // Ícone de coração
        heart.classList.add('heart');
        document.body.appendChild(heart);

        // Posicionamento aleatório na tela
        const leftPosition = Math.random() * window.innerWidth;
        heart.style.left = `${leftPosition}px`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`; // Variação no tamanho
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Diferentes velocidades

        // Remove o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Criar corações continuamente
    setInterval(createHeart, 300);
});

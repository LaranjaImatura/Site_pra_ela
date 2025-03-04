document.getElementById("openCarousel").addEventListener("click", function() {
    let carouselContainer = document.getElementById("carouselContainer");

    if (carouselContainer.style.display === "none" || carouselContainer.style.display === "") {
        carouselContainer.style.display = "flex"; // Mostra o carrossel
    } else {
        carouselContainer.style.display = "none"; // Esconde o carrossel se clicar novamente
    }
});

    function Mensagem1() {
        document.getElementById("mensagem1").innerHTML = 
        "Vamos lá, já te disse várias vezes o quão eu amo a sua determinação e como você é contra a maré, apesar de tudo que você já vivenciou e de como o ambiente em sua volta se comporta <br> e também amo a sua coragem e seu espírito que busca justiça!";
        document.getElementById("mensagem1").style.display = "flex"; // Exibe o card
    }

    function Mensagem2() {
        document.getElementById("mensagem2").innerHTML = 
        "Eu agradeço muito a Deus por te dado, a honra de ser o seu homem, você me inspira a ser alguém melhor sempre ! <br> Obrigado por tudo amor, eu te amo muito muito muito mesmo 💖 !!!";
        document.getElementById("mensagem2").style.display = "block"; // Exibe o card
    }

    function Mensagem3() {
        document.getElementById("mensagem3").innerHTML = 
        "Cada dia você me impressiona mais, pela sua força e pela sua capacidade de lutar pelo que acredita!";
        document.getElementById("mensagem3").style.display = "block"; // Exibe o card
    }

    function Mensagem4() {
        document.getElementById("mensagem4").innerHTML = 
        "👩‍🦳 : O que te faz amar ela ? <br> 👨 : Desde o olhar que ela me olha, ao jeito dela de reagir as situações, ela me mostrou que o mundo não é tão ruim assim e vale a pena viver até o fim, <br> ela foi a luz no fim do meu túnel, me tirou do fundo do poço que me encontrava, e eu quero que ela saiba que eu amo tanto ela que estou disposto a correr qualquer tipo de caminho para trazer um futuro prospero e de paz para ela.";
        document.getElementById("mensagem4").style.display = "block"; // Exibe o card
    }


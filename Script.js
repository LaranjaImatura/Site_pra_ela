document.getElementById("openCarousel").addEventListener("click", function() {
    let carouselContainer = document.getElementById("carouselContainer");

    if (carouselContainer.style.display === "none" || carouselContainer.style.display === "") {
        carouselContainer.style.display = "flex"; // Mostra o carrossel
    } else {
        carouselContainer.style.display = "none"; // Esconde o carrossel se clicar novamente
    }
});

let mensagemAtual = 0; // Controla qual mensagem está visível

// Função que exibe a mensagem baseada no botão clicado
function mostrarMensagem(numero) {
  // Esconde a mensagem atual (se houver)
  if (mensagemAtual !== 0) {
    let mensagemAnterior = document.getElementById(`mensagem${mensagemAtual}`);
    mensagemAnterior.classList.remove("show"); // Remove a classe de exibição da mensagem anterior
  }

  // Exibe a nova mensagem com o efeito de fade-in
  let novaMensagem = document.getElementById(`mensagem${numero}`);
  novaMensagem.classList.add("show"); // Adiciona a classe de exibição à nova mensagem
  
  // Atualiza a mensagem atual
  mensagemAtual = numero;
}

// Função para exibir as mensagens ao clicar nos botões correspondentes
function Mensagem1() {
    document.getElementById("mensagem1").innerHTML = 
    "Vamos lá, já te disse várias vezes o quão eu amo a sua determinação e como você é contra a maré, apesar de tudo que você já vivenciou e de como o ambiente em sua volta se comporta <br> e também amo a sua coragem e seu espírito que busca justiça!";
    mostrarMensagem(1); // Chama a função mostrarMensagem para exibir a primeira mensagem
}

function Mensagem2() {
    document.getElementById("mensagem2").innerHTML = 
    "Eu agradeço muito a Deus por te dado, a honra de ser o seu homem, você me inspira a ser alguém melhor sempre ! <br> Obrigado por tudo amor, eu te amo muito muito muito mesmo 💖 !!!";
    mostrarMensagem(2); // Chama a função mostrarMensagem para exibir a segunda mensagem
}

function Mensagem3() {
    document.getElementById("mensagem3").innerHTML = 
    "Cada dia você me impressiona mais, pela sua força e pela sua capacidade de lutar pelo que acredita!";
    mostrarMensagem(3); // Chama a função mostrarMensagem para exibir a terceira mensagem
}

function Mensagem4() {
    document.getElementById("mensagem4").innerHTML = 
    "👩🏼 : O que te faz amar ela ? <br> 🧑🏻 : Desde o olhar que ela me olha, ao jeito dela de reagir as situações, ela me mostrou que o mundo não é tão ruim assim e vale a pena viver até o fim, <br> ela foi a luz no fim do meu túnel, me tirou do fundo do poço que me encontrava, e eu quero que ela saiba que eu amo tanto ela que estou disposto a correr qualquer tipo de caminho para trazer um futuro próspero e de paz para ela.";
    mostrarMensagem(4); // Chama a função mostrarMensagem para exibir a quarta mensagem
}

function abrirPlayer() {
    document.getElementById("playerPopup").style.display = "flex";
}

function fecharPlayer() {
    document.getElementById("playerPopup").style.display = "none";
}
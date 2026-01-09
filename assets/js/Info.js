// Captura todos os botões
const botoes = document.querySelectorAll("button");
const conteudo = document.getElementById("test");

// Adiciona evento de clique para cada botão
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Pega o ID do botão clicado
    const idBotao = botao.id;

    // Altera o conteúdo com base no ID
    if (idBotao === "btn1") {
      conteudo.textContent = "Você clicou no Botão 1!";
    } else if (idBotao === "btn2") {
      conteudo.textContent = "Você clicou no Botão 2!";
    } else if (idBotao === "btn3") {
      conteudo.textContent = "Você clicou no Botão 3!";
    }
  });
});

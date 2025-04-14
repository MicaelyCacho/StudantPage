// Seleção de elementos
const botaoCriarFlashcard = document.getElementById("criarFlashcard");
const botaoExcluirTodos = document.getElementById("excluirTodos");
const criacaoContainer = document.getElementById("criacaoContainer");
const flashcardsProntosContainer = document.getElementById("flashcardsProntosContainer");

// Estilo base para os botões
const buttonBaseStyle = {
  padding: "10px 15px",
  fontSize: "14px",
  fontWeight: "700",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#1a1a2e",
  color: "#e9d5ff",
  borderRadius: "15px",
  marginLeft: "15px"
};

// Função para aplicar estilos aos botões
function applyButtonStyles(button) {
  Object.assign(button.style, buttonBaseStyle);
}

// Função para criar um flashcard na Área de Criação
function criarFlashcard() {
  criacaoContainer.innerHTML = ""; // Limpa a área de criação

  // Flashcard e container interno
  const flashcard = document.createElement("div");
  flashcard.classList.add("flashcard");

  const inner = document.createElement("div");
  inner.classList.add("flashcard-inner");

  // Frente do flashcard
  const frente = document.createElement("div");
  frente.classList.add("face", "front");
  frente.contentEditable = "true";
  frente.textContent = "(Frente)";

  // Verso do flashcard
  const verso = document.createElement("div");
  verso.classList.add("face", "back");
  verso.contentEditable = "true";
  verso.textContent = "(Verso)";

  // Adiciona frente e verso ao flashcard
  inner.appendChild(frente);
  inner.appendChild(verso);
  flashcard.appendChild(inner);

  // Botões para alternar faces e ações
  const botoesContainer = document.createElement("div");
  botoesContainer.classList.add("botoes-container");
  botoesContainer.style.display = "flex";
  botoesContainer.style.justifyContent = "flex-start";
  botoesContainer.style.gap = "15px";
  botoesContainer.style.marginTop = "15px";

  // Botão para alternar para o verso
  const botaoVerso = document.createElement("button");
  botaoVerso.textContent = "Verso";
  botaoVerso.style.height = "30px"
  applyButtonStyles(botaoVerso);
  botaoVerso.style.marginLeft = "0"; // Remove a margem para o primeiro botão
  botaoVerso.addEventListener("click", () => {
    inner.style.transform = "rotateY(180deg)"; // Alterna para o verso
    verso.focus();
  });

  // Botão para alternar para a frente
  const botaoFrente = document.createElement("button");
  botaoFrente.textContent = "Frente";
  botaoFrente.style.height = "30px"
  applyButtonStyles(botaoFrente);
  botaoFrente.addEventListener("click", () => {
    inner.style.transform = "rotateY(0deg)"; // Alterna para a frente
    frente.focus();
  });

  // Botão para excluir o flashcard
  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.style.height = "30px"
  applyButtonStyles(botaoExcluir);
  botaoExcluir.addEventListener("click", () => {
    criacaoContainer.innerHTML = ""; // Remove o flashcard da Área de Criação
  });

  // Botão para salvar o flashcard
  const botaoSalvar = document.createElement("button");
  botaoSalvar.textContent = "Salvar";
  botaoSalvar.style.height = "30px"
  applyButtonStyles(botaoSalvar);
  botaoSalvar.addEventListener("click", () => {
    salvarFlashcard(inner.cloneNode(true)); // Salva o flashcard
  });

  // Adiciona os botões ao container
  botoesContainer.appendChild(botaoVerso);
  botoesContainer.appendChild(botaoFrente);
  botoesContainer.appendChild(botaoExcluir);
  botoesContainer.appendChild(botaoSalvar);

  // Adiciona o flashcard e os botões na Área de Criação
  criacaoContainer.appendChild(flashcard);
  criacaoContainer.appendChild(botoesContainer);
}

// Função para salvar o flashcard na Área Flashcards Prontos
function salvarFlashcard(inner) {
  const flashcard = document.createElement("div");
  flashcard.classList.add("flashcard");
  flashcard.appendChild(inner);

  // Garante que a frente seja visível inicialmente
  inner.style.transform = "rotateY(0deg)";

  // Adiciona o efeito flip para a Área Flashcards Prontos
  flashcard.addEventListener("mouseover", () => {
    inner.style.transform = "rotateY(180deg)"; // Mostra o verso
  });
  flashcard.addEventListener("mouseout", () => {
    inner.style.transform = "rotateY(0deg)"; // Volta para a frente
  });

  // Adiciona o flashcard na Área Flashcards Prontos
  flashcardsProntosContainer.appendChild(flashcard);
  criacaoContainer.innerHTML = ""; // Limpa a Área de Criação
}

// Função para excluir todos os flashcards na Área Flashcards Prontos
function excluirTodos() {
  flashcardsProntosContainer.innerHTML = ""; // Limpa os flashcards prontos
}

// Eventos nos botões principais
botaoCriarFlashcard.addEventListener("click", criarFlashcard);
botaoExcluirTodos.addEventListener("click", excluirTodos);
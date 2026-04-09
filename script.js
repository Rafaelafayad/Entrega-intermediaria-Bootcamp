function adicionar() {
  const input = document.getElementById("novaTarefa");
  const texto = input.value;

  if (texto === "") {
    alert("Digite um hábito!");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <div class="item-texto">
      <input type="checkbox">
      <span>${texto}</span>
    </div>
    <div class="acoes">
      <button class="editar" onclick="editar(this)">✏️</button>
      <button class="remover" onclick="remover(this)">✖</button>
    </div>
  `;

  document.getElementById("lista").appendChild(li);
  input.value = "";
}

function remover(botao) {
  const confirmar = confirm("Tem certeza que deseja excluir essa opção?");
  if (confirmar) {
    botao.closest("li").remove();
  }
}

function editar(botao) {
  const confirmar = confirm("Tem certeza que deseja alterar?");
  if (!confirmar) return;

  const li = botao.closest("li");
  const span = li.querySelector("span");

  const novoTexto = prompt("Edite o hábito:", span.textContent);

  if (novoTexto !== null && novoTexto !== "") {
    span.textContent = novoTexto;
    alert("Hábito editado");
  }
}

function resetar() {
  const checks = document.querySelectorAll("input[type='checkbox']");
  checks.forEach(c => c.checked = false);

  alert("Dia finalizado!");
}

/* função para testes */
function resetarLista(lista) {
  return lista.map(() => false);
}

module.exports = { resetarLista };
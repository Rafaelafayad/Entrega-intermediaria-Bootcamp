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

if (typeof module !== "undefined") {
  module.exports = { resetarLista };
}


/* CLIMA */

const temperatura =
  document.getElementById("temperatura");

const dicaClima =
  document.getElementById("dica-clima");

async function carregarClima() {

  try {

    
    const resposta = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-15.793889&longitude=-47.882778&current=temperature_2m"
    );

    const dados = await resposta.json();

    const temp =
      dados.current.temperature_2m;

    temperatura.innerHTML =
      `${temp}°C em Brasília - DF`;

    if (temp >= 30) {

      dicaClima.innerHTML =
        "☀️ O dia está quente! Lembre-se de beber água e descansar.";

    }

    else if (temp <= 18) {

      dicaClima.innerHTML =
        "❄️ O clima está frio. Tire um tempinho para se aquecer e relaxar.";

    }

    else {

      dicaClima.innerHTML =
        "🌷 Clima agradável! Aproveite o dia e lembre-se de cuidar de você.";

    }

  }

  catch (erro) {

    temperatura.innerHTML =
      "Erro ao carregar clima.";

  }

}

carregarClima();


/* RELÓGIO */

function atualizarHorario() {

  const agora = new Date();

  const horario =
    agora.toLocaleTimeString("pt-BR", {
      timeZone: "America/Sao_Paulo"
    });

  document.getElementById("relogio")
    .innerHTML = horario;
}

setInterval(atualizarHorario, 1000);

atualizarHorario();

// Menu responsivo e filtros do Diário de atividades.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const aberto = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(aberto));
      toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
  }

  const busca = document.querySelector("#search-posts");
  const categoria = document.querySelector("#filter-category");
  const cards = [...document.querySelectorAll(".activity-card")];
  const vazio = document.querySelector("#empty-state");

  function filtrarAtividades() {
    if (!cards.length) return;
    const termo = (busca?.value || "").trim().toLocaleLowerCase("pt-BR");
    const tema = categoria?.value || "todos";
    let visiveis = 0;
    document.addEventListener("DOMContentLoaded", () => {
  const busca = document.querySelector("#log-search");
  const filtroAno = document.querySelector("#log-year");
  const registros = [...document.querySelectorAll(".log-entry")];
  const vazio = document.querySelector("#log-empty");

  function filtrarRegistros() {
    const termo = (busca?.value || "").trim().toLocaleLowerCase("pt-BR");
    const anoSelecionado = filtroAno?.value || "todos";
    let encontrados = 0;

    registros.forEach(registro => {
      const texto = registro.innerText.toLocaleLowerCase("pt-BR");
      const anoRegistro = registro.querySelector(".date-year")?.textContent.trim();

      const correspondeTexto = texto.includes(termo);
      const correspondeAno =
        anoSelecionado === "todos" || anoRegistro === anoSelecionado;

      const mostrar = correspondeTexto && correspondeAno;
      registro.hidden = !mostrar;

      if (mostrar) encontrados++;
    });

    if (vazio) vazio.hidden = encontrados > 0;
  }

  busca?.addEventListener("input", filtrarRegistros);
  filtroAno?.addEventListener("change", filtrarRegistros);

  filtrarRegistros();
});
    cards.forEach(card => {
      const texto = (card.innerText + " " + (card.dataset.search || "")).toLocaleLowerCase("pt-BR");
      const combinaTexto = texto.includes(termo);
      const combinaTema = tema === "todos" || card.dataset.category === tema;
      const mostrar = combinaTexto && combinaTema;
      card.hidden = !mostrar;
      if (mostrar) visiveis++;
    });

    if (vazio) vazio.hidden = visiveis !== 0;
  }

  busca?.addEventListener("input", filtrarAtividades);
  categoria?.addEventListener("change", filtrarAtividades);
});

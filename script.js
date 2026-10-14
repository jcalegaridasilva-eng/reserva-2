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

PARANÁ FAZ CIÊNCIA — COMO ABRIR O SITE

1. Extraia a pasta parana_faz_ciencia para um local do computador.
2. Abra a pasta no Visual Studio Code.
3. Para testar, instale a extensão "Live Server" no VS Code (se ainda não tiver).
4. Clique com o botão direito em index.html e escolha "Open with Live Server".
5. Use o menu para navegar entre Início, Diário de atividades e Galeria.

ARQUIVOS
- index.html: página inicial.
- diario-bordo.html: diário cronológico para registrar o que a equipe fez em cada dia, com filtro por ano e pesquisa.
- diario.html: mural de atividades de exemplo e pesquisa por texto/categoria.
- galeria.html: galeria com ilustrações feitas em CSS.
- style.css: estilo compartilhado.
- script.js: menu responsivo e filtros do diário.

IMPORTANTE
- Os registros do Diário de atividades são textos de exemplo; substitua-os pelas atividades reais do projeto.
- A galeria usa ilustrações feitas com CSS, não fotografias reais.
- Esta versão é estática: não tem login, painel de publicação nem banco de dados.
- Para alterar as atividades, edite os artigos dentro de diario.html.
- Para colocar fotos reais, você pode criar uma pasta "imagens" e adicionar arquivos de imagem, depois substituir os blocos ilustrados de galeria.html por tags <img>.
- Antes de publicar o site na internet, revise todos os textos e confirme que representam corretamente o projeto.


DIÁRIO DE BORDO
- A página nova é diario-bordo.html.
- Os dois registros exibidos são modelos; substitua-os pelos registros reais.
- Para adicionar um dia, copie um bloco <article class="log-entry"...> dentro de #log-list.
- Atualize data-ano (ex.: 2025), data-ordem (AAAA-MM-DD), a data visível, título, descrição e categoria.
- A página é estática; os registros são alterados editando o HTML, não por um formulário público.
- O antigo diario.html foi mantido e passou a aparecer no menu como "Atividades".

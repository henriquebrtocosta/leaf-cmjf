# Site LEAF

Site estático, compatível com GitHub Pages e com abertura local de `index.html`. Não usa chaves, bibliotecas externas, fontes remotas, APIs ou serviços de IA. Mantenha `index.html` e `assets/` juntos. Os demais arquivos existentes no repositório permanecem disponíveis.

## Executar e verificar

```powershell
python -m http.server 8765 --bind 127.0.0.1
node --test tests/assistant.test.cjs
```

Abra http://127.0.0.1:8765. O teste usa apenas o Node.js, sem instalação de dependências. O site não exige etapa de build.

## Assistente

A receita é a formulação do próprio LEAF, consultada nos artigos e registros de `docs/pesquisa/`. Consulte [formulacao.md](formulacao.md) para as fontes, transcrição da tabela e critérios de cálculo.

- Seis entradas da tabela original de 1 L: extrato de nim preparado (300 mL), própolis (180 mL), óleo de cravo (30 mL), extrato combinado de alho e cebola (300 mL), pimenta (120 mL) e sabão potássico (70 mL).
- Modo principal: dimensionar essa receita concentrada de 0,1 a 100 L, preservando as proporções registradas. Os 300 mL de alho/cebola não são duplicados; nim preparado não é substituído por óleo puro.
- Modo separado: calcular água e concentrado a partir de uma orientação numérica recebida pelo agricultor, em mL por litro de mistura final. Não há dose predefinida nem dose deduzida de outro produto.
- O contexto varia com planta, sinal, fase e extensão do problema. A intensidade não aumenta automaticamente concentração ou frequência. A distinção entre concentrado e mistura pronta aparece no formulário e na ficha.
- Perguntas em linguagem cotidiana, nomes de sinais junto aos termos de pragas, letras maiores e unidade explícita. “Não sei identificar” é uma opção válida.
- Mudanças no formulário invalidam a ficha anterior, para evitar usar medidas antigas após alterar o volume ou o caso.
- Impressão, cópia e texto para download incluem medidas, contexto, cuidados e fontes. A impressão abre os detalhes de fontes temporariamente e restaura o estado anterior depois.
- Dados ficam no navegador, sem envio ou persistência. Não há IA generativa, API, banco de dados nem dependência externa.

Os treze testes de `tests/assistant.test.cjs` cobrem composição original, escala, personalização sem criação de doses, fases, intensidade, diluição aritmética, unidades, entradas inválidas e tradução das fichas.

## Idiomas

O site abre em português. O botão **English** no cabeçalho traduz a página inteira, incluindo os campos, mensagens, acessibilidade, etapas da tecnologia, notícia e fichas geradas. O botão passa a **Português** para retornar. A troca preserva as respostas preenchidas e recalcula a apresentação da ficha no idioma escolhido, sem alterar as proporções ou regras do assistente.

As traduções estão no dicionário `english`, no mesmo `assets/js/main.js`. As opções do formulário mantêm valores internos estáveis. Impressão, cópia e download seguem o idioma selecionado, com números e datas localizados. Os textos digitados pelo usuário são preservados. O site não chama serviços de tradução e não armazena uma preferência de idioma: uma nova abertura começa em português.

Os links de apresentação apontam para a documentação correspondente em português ou inglês. Artigos e outros documentos de pesquisa externos mantêm seus idiomas originais.

## Conteúdo e notícia

A apresentação se baseia na documentação em português do repositório. O desenho da câmera/planta é ilustrativo: não representa diagnóstico, resultado de campo ou câmera conectada. Não há alegações quantitativas inventadas.

A notícia do Correio Braziliense é apresentada por título, autoria, data, identificação da fonte e resumo editorial próprio. A prévia e seu trecho expansível estão no HTML; não há iframe, scraping no navegador, cópia integral da matéria ou dependência do servidor do jornal. O botão externo leva à reportagem completa.

Todos os recursos essenciais estão em `assets/`. Uma cópia local funciona sem rede; a abertura inicial na versão hospedada e os destinos externos exigem conexão. Não foi implementado cache offline de navegação/service worker.

## Acessibilidade

Navegação móvel com estado expandido e Escape, link de salto, foco visível, campos rotulados, abas com teclas de direção/Home/End, resultados com foco, controles nativos, preferência de movimento reduzido e CSS específico para impressão.

## Arquivos e manutenção

- `index.html`: marcação sem estilos ou scripts embutidos.
- `assets/css/styles.css`: estilos gerais, apresentação, responsividade e impressão, preservando a ordem da cascata.
- `assets/js/main.js`: composição e cálculos do assistente, seguidos das interações da página. Em Node.js, exporta os cálculos sem inicializar a interface.
- `assets/images/`: ícone e logotipos originais.
- `tests/assistant.test.cjs`: testes executados apenas no desenvolvimento.

Os caminhos acima são relativos à raiz do repositório. O site carrega somente um JavaScript e uma folha de estilo. Prettier é uma ferramenta de desenvolvimento; não é enviado nem carregado pelo navegador.

O padrão de edição está em `.editorconfig` e `.prettierrc.json`: dois espaços, UTF-8 e quebra de linha LF. Use `npm ci`, `npm run format:check` e `npm run format` na raiz. Os testes também podem ser executados diretamente com Node.js, sem instalar o formatador.

## GitHub Pages

Para centralizar o desenvolvimento e a publicação em `main`, selecione **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root)** e salve. Espere a publicação concluir antes de excluir a branch anteriormente usada pelo Pages.

As quatro branches existentes antes da reorganização foram verificadas como incorporadas à `main`: `assistente-formula-leaf`, `codex/apresentacao-materiais-leaf`, `codex/leaf-apresentacao-assistente` e `updating-website`. A branch `codex/leaf-apresentacao-assistente` era a fonte de publicação do site. A exclusão dessas branches não apaga os commits já integrados à `main`.

## Acervo

Os documentos antes disponíveis em `Files/` foram movidos para `docs/pesquisa/`, organizados por assunto e com nomes sem espaços ou acentos. Os logotipos estão em `assets/images/`. Os conteúdos binários foram preservados, inclusive versões distintas com nomes parecidos. O histórico Git mantém os caminhos anteriores.

# LEAF

**Low-Cost Ecological AgroCare Framework** · Colégio Militar de Juiz de Fora

Projeto de pesquisa estudantil que reúne visão computacional, automação e pesquisa agrícola para investigar tecnologias acessíveis de cuidado com as plantas.

[Acessar o site](https://henriquebrtocosta.github.io/leaf-cmjf/) · [Conhecer o projeto](docs/projeto.md) · [English](docs/project.en.md)

O site abre em português. Use o botão **English** no cabeçalho para mudar toda a página e o assistente para inglês; **Português** permite voltar sem perder as respostas.

## Encontre o que precisa

| Conteúdo                                    | Acesso                                                |
| ------------------------------------------- | ----------------------------------------------------- |
| Objetivos, arquitetura e equipe             | [Apresentação do projeto](docs/projeto.md)            |
| Composição, fontes e cálculos do assistente | [Formulação LEAF](docs/formulacao.md)                 |
| Execução, manutenção e publicação           | [Guia do site](docs/site.md)                          |
| Artigos e diário de experimentos            | [Artigos](docs/pesquisa/artigos/)                     |
| Apresentações e vídeo                       | [Roteiros](docs/pesquisa/roteiros/)                   |
| Banners e folder                            | [Materiais visuais](docs/pesquisa/materiais-visuais/) |
| Organização das feiras e protótipo          | [Planejamento](docs/pesquisa/planejamento/)           |
| Normas das feiras                           | [Regulamentos](docs/pesquisa/regulamentos/)           |
| Certificados                                | [Certificados](docs/pesquisa/certificados/)           |

## Organização do repositório

```text
leaf-cmjf/
├── index.html                  # Conteúdo e estrutura do site
├── assets/
│   ├── css/styles.css          # Todos os estilos do site
│   ├── js/main.js              # Lógica do assistente e interações da página
│   └── images/                 # Ícone e identidades visuais
├── docs/
│   ├── projeto.md              # Apresentação completa em português
│   ├── project.en.md           # Project overview in English
│   ├── formulacao.md           # Fontes e critérios do assistente
│   ├── site.md                 # Guia de desenvolvimento e publicação
│   └── pesquisa/               # Documentos originais, agrupados por assunto
├── tests/assistant.test.cjs     # Verificação automatizada do assistente
├── package.json                # Comandos e ferramenta de formatação
├── package-lock.json           # Versão fixada do formatador
├── .editorconfig               # Padrão de edição
├── .prettierrc.json             # Padrão de formatação
├── .prettierignore              # Materiais excluídos da formatação
├── .gitignore
├── .gitattributes              # Quebras de linha e tipos binários
├── README.md
└── LICENSE
```

O código executado no navegador está centralizado em **um JavaScript** e **um CSS**. O HTML contém a marcação e carrega esses dois arquivos. O teste fica separado em `tests/` e não é carregado pelo site.

## Executar o site

O site é estático e não precisa de instalação nem compilação. Abra `index.html` ou inicie um servidor local na raiz do repositório:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Acesse [o nosso website online](henriquebrtocosta.github.io/leaf-cmjf/).

## Verificar e formatar

Com Node.js instalado, os testes funcionam sem dependências:

```sh
node --test tests/assistant.test.cjs
```

Para usar os comandos de formatação, instale as ferramentas de desenvolvimento:

```sh
npm ci
npm test
npm run format:check
npm run format
```

Use dois espaços de indentação, UTF-8 e nomes de arquivos em minúsculas com hífens. Antes de mover um documento, atualize seus links no site, nos scripts e na documentação.

## Publicação e branches

`main` reúne a versão consolidada do projeto. O GitHub Pages publica os arquivos estáticos da raiz; a fonte de publicação é selecionada em **Settings → Pages → Build and deployment**.

Antes de excluir uma branch antiga, confirme que ela foi incorporada à `main` e que não é a fonte configurada no Pages. Não é necessário manter uma branch por alteração já concluída.

## Contribuir

Descreva propostas e problemas nas [issues](https://github.com/henriquebrtocosta/leaf-cmjf/issues). Para mudanças, use uma branch temporária e confira os testes, os links e o site antes de integrar à `main`.

Código distribuído sob a [licença MIT](LICENSE). Os documentos de pesquisa originais estão preservados em `docs/pesquisa/`.

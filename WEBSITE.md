# Site LEAF

Site estático, compatível com GitHub Pages e com abertura local de `index.html`. Não usa chaves, bibliotecas externas, fontes remotas, APIs ou serviços de IA. Mantenha `index.html` e `assets/` juntos. Os demais arquivos existentes no repositório permanecem disponíveis.

## Executar e verificar

```powershell
python -m http.server 8765 --bind 127.0.0.1
node --test tests/assistant.test.cjs
```

Abra http://127.0.0.1:8765. O teste usa apenas o Node.js, sem instalação de dependências. O site não exige etapa de build.

## Assistente

- Biblioteca inicial: calda de sabão neutro e calda de cebola, descritas na [Circular Técnica 47, Embrapa Hortaliças, janeiro de 2007, página 14](https://www.infoteca.cnptia.embrapa.br/bitstream/doc/781607/1/ct47.pdf#page=14), consultada em 23/10/2026. As referências não são fórmulas próprias do LEAF nem uma validação para cada cultivar.
- A seleção relaciona somente os alvos da publicação e as culturas de hortaliças presentes no formulário. A compatibilidade, a tolerância da cultivar e a identificação devem ser confirmadas antes do uso. Ocorrências fora da biblioteca geram roteiro de observação.
- Sabão: proporção de 100 g em 10 L; a porção de dissolução de 0,5 L está incluída no volume final. A publicação menciona aproximadamente duas semanas antes da colheita, sem estabelecer intervalos específicos por cultura.
- Cebola: extrato-base com 1 kg de cebola para 10 L de água e repouso de 10 dias. Diluição final de uma parte de extrato coado para três partes de água. O rendimento após a coagem não é presumido. A publicação não informa carência dessa calda.
- Produto com bula: cálculo aritmético a partir dos dados transcritos pelo usuário. São suportadas doses em mL/L, g/L, mL/100 L e g/100 L. Não calcula doses por hectare nem verifica registro, indicação ou autenticidade de bula. O resultado não é receituário agronômico.
- Volume final entre 0,5 e 100 L, em incrementos de 0,5 L. Dose e volume finitos, limites de medição e quantidade de produto líquido incompatível com o tanque são verificados.
- Impressão, cópia e arquivo `.txt` incluem medidas, preparo, contexto e fonte. Os dados não são enviados nem persistidos pelo site.

Para ampliar a biblioteca, acrescente em `assistant-core.js` somente formulações com fonte identificável, proporções inequívocas, limites e alvos documentados, e cubra conversões com testes.

## Conteúdo e notícia

A apresentação se baseia na documentação em português do repositório. O desenho da câmera/planta é ilustrativo: não representa diagnóstico, resultado de campo ou câmera conectada. Não há alegações quantitativas inventadas.

A notícia do Correio Braziliense é apresentada por título, autoria, data, identificação da fonte e resumo editorial próprio. A prévia e seu trecho expansível estão no HTML; não há iframe, scraping no navegador, cópia integral da matéria ou dependência do servidor do jornal. O botão externo leva à reportagem completa.

Todos os recursos essenciais estão em `assets/`. Uma cópia local funciona sem rede; a abertura inicial na versão hospedada e os destinos externos exigem conexão. Não foi implementado cache offline de navegação/service worker.

## Acessibilidade

Navegação móvel com estado expandido e Escape, link de salto, foco visível, campos rotulados, abas com teclas de direção/Home/End, resultados com foco, controles nativos, preferência de movimento reduzido e CSS específico para impressão.

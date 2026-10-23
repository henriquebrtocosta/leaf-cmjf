/* LEAF: project composition, measured volumes and plain-language context. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LEAF = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const fileLink = (path) =>
    'https://github.com/henriquebrtocosta/leaf-cmjf/blob/main/' +
    path.split('/').map(encodeURIComponent).join('/');
  const sources = Object.freeze({
    recipe: {
      title: 'Receita original do LEAF — Artigo 1, Feira 2025',
      section: 'Tabela “Preparação do agrotóxico (1L)”',
      url: fileLink('docs/pesquisa/artigos/artigo-1-feira-2025.docx'),
    },
    article: {
      title: 'Artigo LEAF — composição e resultados',
      section: 'Materiais e métodos; resultados',
      url: fileLink('docs/pesquisa/artigos/artigo-leaf.docx'),
    },
    diary: {
      title: 'Diário dos experimentos do LEAF',
      section: 'Registros de setembro de 2025',
      url: fileLink('docs/pesquisa/artigos/anotacoes-dos-experimentos-para-o-diario-de-bordo.pdf'),
    },
    script: {
      title: 'Roteiro DGC — produto concentrado',
      section: 'Descrição do concentrado e dos ensaios',
      url: fileLink('docs/pesquisa/roteiros/roteiro-dgc-v1.docx'),
    },
  });
  // Amounts refer to prepared extracts, never interchangeable raw oils or powders.
  const ingredients = Object.freeze(
    [
      {
        id: 'neem',
        name: 'Extrato de nim (neem) já preparado',
        perLiter: 300,
        help: 'Não troque por óleo de nim puro.',
      },
      {
        id: 'propolis',
        name: 'Extrato de própolis',
        perLiter: 180,
        help: 'Use a mesma apresentação adotada pelo projeto.',
      },
      {
        id: 'clove',
        name: 'Óleo essencial de cravo-da-índia',
        perLiter: 30,
        help: 'Meça em mL com recipiente graduado ou seringa medidora.',
      },
      {
        id: 'garlicOnion',
        name: 'Extrato de alho e cebola, juntos',
        perLiter: 300,
        help: 'É a medida dos dois juntos, não de cada um separado.',
      },
      {
        id: 'pepper',
        name: 'Extrato de pimenta-malagueta',
        perLiter: 120,
        help: 'Use o extrato preparado, sem trocar por molho de pimenta.',
      },
      {
        id: 'soap',
        name: 'Sabão potássico líquido',
        perLiter: 70,
        help: 'É diferente de detergente de cozinha e sabão em pó.',
      },
    ].map(Object.freeze)
  );
  const crops = Object.freeze([
    'Alface',
    'Couve',
    'Couve-flor',
    'Tomate',
    'Morango',
    'Melancia',
    'Outra planta',
  ]);
  const problems = Object.freeze([
    'Pulgões',
    'Cochonilhas',
    'Lagartas',
    'Ácaros',
    'Mosca-branca',
    'Fungos ou mofo',
    'Manchas nas folhas',
    'Raízes com caroços',
    'Amarelecimento ou murcha',
    'Não sei identificar',
  ]);
  const stages = Object.freeze([
    'Muda pequena',
    'Crescendo',
    'Com flores',
    'Com frutos',
    'Perto de colher',
  ]);
  const severities = Object.freeze(['Poucas plantas', 'Está se espalhando', 'Muitas plantas']);
  const clean = (value, limit = 1500) =>
    String(value ?? '')
      .trim()
      .slice(0, limit);
  function number(value) {
    if (typeof value === 'number') return value;
    if (typeof value !== 'string' || !value.trim()) return NaN;
    return Number(value.trim().replace(',', '.'));
  }
  const format = (value) =>
    new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 3 }).format(value);
  const quantity = (value, unit) => `${format(value)} ${unit}`;
  const liquid = (liters) => (liters < 1 ? quantity(liters * 1000, 'mL') : quantity(liters, 'L'));
  function validateVolume(input, mode = 'concentrate') {
    const value = number(input),
      minimum = mode === 'dilution' ? 0.5 : 0.1,
      step = mode === 'dilution' ? 0.5 : 0.1;
    if (
      !Number.isFinite(value) ||
      value < minimum ||
      value > 100 ||
      Math.abs(value / step - Math.round(value / step)) > 1e-7
    )
      throw new Error(
        `Escolha de ${format(minimum)} a 100 litros, em passos de ${format(step)} litro.`
      );
    return value;
  }
  function calculateConcentrate(input) {
    const volume = validateVolume(input);
    return {
      volume,
      totalNominalML: volume * 1000,
      ingredients: ingredients.map((item) => ({
        ...item,
        amountML: item.perLiter * volume,
        amountText: quantity(item.perLiter * volume, 'mL'),
      })),
    };
  }
  function calculateDilution(input) {
    const volume = validateVolume(input.volume, 'dilution'),
      dose = number(input.dose);
    if (input.doseConfirmed !== true)
      throw new Error(
        'Use uma medida de diluição que você recebeu para esta planta e este problema.'
      );
    if (!Number.isFinite(dose) || dose <= 0 || dose >= 1000)
      throw new Error(
        'Informe a medida recebida, em mL de LEAF por litro de mistura pronta. Ela precisa ser maior que zero e menor que 1.000.'
      );
    const concentrateML = dose * volume;
    if (concentrateML < 0.1)
      throw new Error(
        'O resultado é menor que 0,1 mL. Confira a orientação e como medir antes de preparar.'
      );
    return {
      volume,
      dose,
      concentrateML,
      waterApproxML: volume * 1000 - concentrateML,
      doseOrigin: 'informada pelo usuário',
      formula: `${quantity(dose, 'mL')} de LEAF por litro × ${liquid(volume)} = ${quantity(concentrateML, 'mL')} de concentrado`,
    };
  }
  function contextFor(crop, problem) {
    const context = {
      focus: 'A receita reúne os componentes do LEAF na proporção registrada pela equipe.',
      evidence: 'O artigo do LEAF descreve os ingredientes e os contextos dos testes do projeto.',
      observations: [],
    };
    if (problem === 'Pulgões') {
      context.focus =
        'O nim integra a parte voltada aos insetos na descrição do LEAF. Alho, cebola e sabão potássico também fazem parte da mistura completa.';
      context.evidence = ['Alface', 'Couve'].includes(crop)
        ? 'Os documentos do LEAF relatam observações em alface e couve com pulgões. A orientação de diluição deve considerar o seu cultivo.'
        : 'Os relatos do LEAF sobre pulgões citam alface e couve. A orientação de uso deve considerar a planta que você selecionou.';
      context.observations.push(
        'Veja se há bichinhos agrupados nos brotos ou por baixo das folhas. Fotografe também folhas enroladas e formigas.'
      );
    } else if (['Fungos ou mofo', 'Manchas nas folhas'].includes(problem)) {
      context.focus =
        'Própolis e cravo aparecem no estudo do LEAF sobre fungos. A receita mantém esses ingredientes na proporção original.';
      context.evidence = ['Tomate', 'Morango'].includes(crop)
        ? 'O diário do LEAF descreve testes em tomates e morangos já colhidos e em laboratório. Esse contexto é diferente do uso na lavoura.'
        : 'O projeto descreve testes com fungos em frutos e em laboratório. Manchas nas folhas também podem ter outras causas.';
      context.observations.push(
        'Observe onde começam as manchas ou o mofo e se há excesso de umidade. Tire fotos da planta inteira e da parte afetada.',
        'Não use a mistura para tentar recuperar alimento mofado ou estragado para consumo.'
      );
    } else if (problem === 'Ácaros') {
      context.focus =
        'A pimenta-malagueta é relacionada aos ácaros na descrição dos ingredientes do LEAF. Ela permanece na proporção original.';
      context.observations.push(
        'Procure pontinhos claros nas folhas e teias finas. Uma lupa ajuda a observar o lado de baixo das folhas.'
      );
    } else if (problem === 'Raízes com caroços') {
      context.focus =
        'Alho e cebola aparecem nos materiais do LEAF entre os componentes pesquisados para organismos que atacam as raízes.';
      context.observations.push(
        'Fotografe as raízes com caroços e veja se a planta cresce pouco ou murcha. Confirme a causa antes de colocar qualquer produto no solo.'
      );
    } else if (problem === 'Lagartas')
      context.observations.push(
        'Procure lagartas, ovos, folhas comidas e pontinhos de fezes. Fotografe o animal encontrado.'
      );
    else if (problem === 'Cochonilhas')
      context.observations.push(
        'Observe bolinhas, placas ou material parecido com algodão grudados nos ramos e folhas. Registre também a presença de formigas.'
      );
    else if (problem === 'Mosca-branca')
      context.observations.push(
        'Veja se pequenos insetos brancos voam ao mexer na planta e observe o verso das folhas.'
      );
    else if (problem === 'Amarelecimento ou murcha')
      context.observations.push(
        'Confira a umidade do solo, a drenagem e quais folhas estão amarelando. Falta ou excesso de água também podem causar esses sinais.'
      );
    else
      context.observations.push(
        'Fotografe a planta inteira, os dois lados das folhas e o que chamou sua atenção. Leve as fotos à assistência técnica para identificar o problema.'
      );
    context.observations.push(
      'Compare plantas afetadas com plantas sadias e proteja joaninhas, abelhas e outros animais úteis à lavoura.'
    );
    return context;
  }
  function createPlan(input) {
    const crop = clean(input.crop, 100),
      problem = clean(input.problem, 100),
      stage = clean(input.stage, 100),
      severity = clean(input.severity, 100);
    if (!crops.includes(crop)) throw new Error('Escolha o que você está plantando.');
    if (!problems.includes(problem))
      throw new Error('Escolha o problema ou marque “Não sei identificar”.');
    if (!stages.includes(stage) || !severities.includes(severity))
      throw new Error('Informe a fase das plantas e quanto o problema se espalhou.');
    const mode = input.mode === 'dilution' ? 'dilution' : 'concentrate',
      volume = validateVolume(input.volume, mode);
    const plan = {
      mode,
      crop,
      problem,
      stage,
      severity,
      volume,
      context: contextFor(crop, problem),
      notes: clean(input.notes),
      location: clean(input.location, 100),
      precautions: [],
      sources: Object.values(sources),
      concentrate: null,
      dilution: null,
    };
    if (mode === 'concentrate') plan.concentrate = calculateConcentrate(volume);
    else plan.dilution = calculateDilution(input);
    plan.priority =
      severity === 'Muitas plantas'
        ? 'Como muitas plantas estão afetadas, procure assistência técnica com prioridade e leve fotos da área.'
        : severity === 'Está se espalhando'
          ? 'Marque as plantas afetadas e acompanhe se o problema avança. Peça ajuda para decidir o momento de agir.'
          : 'Observe as plantas afetadas e as vizinhas e registre se aparecem novos focos.';
    plan.precautions.push(
      'Não aumente a concentração porque o problema está mais forte. Use a medida de diluição indicada para a sua situação.'
    );
    if (stage === 'Muda pequena')
      plan.precautions.push(
        'Mudas são mais sensíveis. Confirme o uso nessa fase: o óleo de cravo pode danificar plantas dependendo da concentração e de como é aplicado.'
      );
    if (stage === 'Com flores')
      plan.precautions.push(
        'Proteja as abelhas. Não direcione a aplicação às flores nem aos insetos benéficos.'
      );
    if (stage === 'Perto de colher' || stage === 'Com frutos')
      plan.precautions.push(
        'Confirme quanto tempo deve esperar até a colheita. Não use o prazo de outro produto para decidir quando colher ou consumir.'
      );
    plan.precautions.push(
      'Use luvas e proteção para os olhos ao manusear. Meça com utensílios exclusivos para esse fim e mantenha longe de crianças, alimentos e animais.'
    );
    return plan;
  }
  function planText(plan, date = new Date().toLocaleDateString('pt-BR')) {
    const lines = [
      'LEAF — Ficha do seu cultivo',
      `Data: ${date}`,
      `Plantio: ${plan.crop}`,
      `Problema informado: ${plan.problem}`,
      `Fase: ${plan.stage}`,
      `Situação: ${plan.severity}`,
      '',
    ];
    if (plan.mode === 'concentrate')
      lines.push(
        `RECEITA ORIGINAL DO CONCENTRADO LEAF — lote nominal de ${liquid(plan.volume)}`,
        'Concentrado é a mistura-base; não é produto pronto para pulverizar.',
        ...plan.concentrate.ingredients.map(
          (item) => `${item.name}: ${item.amountText}. ${item.help}`
        ),
        '',
        'COMO ORGANIZAR O PREPARO',
        '1. Separe os extratos já preparados e equivalentes aos usados pelo projeto.',
        '2. Meça cada quantidade em mL. Alho e cebola são um extrato combinado.',
        '3. A descrição original orienta misturar os extratos e o óleo em um recipiente escuro e depois acrescentar o sabão potássico, misturando bem.',
        '4. A tabela original já soma o volume nominal do lote. Água acrescentada muda a concentração; não calcule uma quantidade extra por conta própria.',
        '5. Identifique o recipiente como LEAF — concentrado, com a data. Siga a orientação de preparo e armazenamento recebida da equipe.',
        'Para o pulverizador, é necessária uma orientação de diluição. Não aplique o concentrado puro.'
      );
    else
      lines.push(
        `MISTURA PARA O PULVERIZADOR — ${liquid(plan.volume)} finais`,
        `Medida informada por você: ${quantity(plan.dilution.dose, 'mL')} de LEAF por litro de mistura pronta.`,
        `Concentrado LEAF: ${quantity(plan.dilution.concentrateML, 'mL')}`,
        `Água: completar até ${liquid(plan.volume)} de mistura final.`,
        plan.dilution.formula,
        'O cálculo reproduz sua orientação recebida; não confirma se a dose é adequada ao cultivo.',
        'Siga a ordem de mistura e os cuidados indicados na orientação que recebeu.'
      );
    lines.push(
      '',
      'PARA O SEU CASO',
      plan.context.focus,
      plan.context.evidence,
      plan.priority,
      ...plan.context.observations.map((item) => `• ${item}`),
      '',
      'CUIDADOS',
      ...plan.precautions.map((item) => `• ${item}`)
    );
    if (plan.notes) lines.push('', `O que você observou: ${plan.notes}`);
    if (plan.location) lines.push(`Região: ${plan.location}`);
    lines.push(
      '',
      'FONTES DO LEAF',
      ...plan.sources.map((source) => `${source.title} — ${source.section}\n${source.url}`),
      '',
      'Esta ficha organiza a receita registrada e as informações do cultivo. Não substitui a orientação de uso para a sua plantação.'
    );
    return lines.join('\n');
  }
  return Object.freeze({
    sources,
    ingredients,
    crops,
    problems,
    stages,
    severities,
    number,
    format,
    quantity,
    liquid,
    validateVolume,
    calculateConcentrate,
    calculateDilution,
    contextFor,
    createPlan,
    planText,
  });
});

(function () {
  'use strict';
  if (typeof document === 'undefined') return;
  const $ = (selector) => document.querySelector(selector);
  const escape = (text) =>
    String(text ?? '').replace(
      /[&<>"']/g,
      (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
    );
  const form = $('#cropForm'),
    result = $('#result'),
    initialResult = result.innerHTML;
  const tabs = [...document.querySelectorAll('[data-mode]')];
  let mode = 'concentrate',
    currentPlan = null,
    toastTimer;
  function toast(message) {
    $('#toast').textContent = message;
    $('#toast').classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 4500);
  }
  function invalidate() {
    if (!currentPlan) return;
    currentPlan = null;
    result.innerHTML =
      '<div class="empty-result"><span class="empty-plant" aria-hidden="true">⌁</span><h3>Vamos atualizar sua ficha.</h3><p>Você mudou as respostas. Use o botão do formulário para calcular as novas medidas.</p></div>';
  }
  function setMode(next, focus = false) {
    invalidate();
    mode = next;
    tabs.forEach((tab) => {
      const selected = tab.dataset.mode === mode;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (focus && selected) tab.focus();
    });
    const dilution = mode === 'dilution';
    $('#concentratePanel').hidden = dilution;
    $('#dilutionPanel').hidden = !dilution;
    $('#dilutionFields').disabled = !dilution;
    $('#volumeLabel').textContent = dilution
      ? 'Quantos litros de mistura pronta quer no pulverizador? *'
      : 'Quantos litros de concentrado LEAF quer preparar? *';
    $('#volumeHelp').textContent = dilution
      ? 'É o total de água e concentrado juntos. Não acrescente esse volume de água por fora.'
      : 'Esta quantidade é do concentrado, não do pulverizador. 1 litro = 1.000 mL.';
    $('#volume').min = dilution ? '0.5' : '0.1';
    $('#volume').step = dilution ? '0.5' : '0.1';
    $('#volume').value = dilution ? '20' : '1';
    form.querySelector('button[type="submit"]').innerHTML = dilution
      ? 'Calcular água e LEAF <span aria-hidden="true">↗</span>'
      : 'Ver minha receita LEAF <span aria-hidden="true">↗</span>';
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? tabs.length - 1
            : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      setMode(tabs[next].dataset.mode, true);
    });
  });
  form.addEventListener('input', invalidate);
  form.addEventListener('change', invalidate);
  const menu = $('#menuToggle'),
    nav = $('#mainNav');
  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menu.focus();
    }
  });
  $('#newsToggle').addEventListener('click', () => {
    const toggle = $('#newsToggle'),
      open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    $('#newsDetail').hidden = !open;
    toggle.querySelector('span').textContent = open ? '−' : '+';
  });
  const architecture = [
    {
      symbol: '◎',
      kicker: '1 / Observar a planta',
      title: 'Tudo começa com uma imagem.',
      text: 'A câmera registra a planta. Uma imagem bem iluminada e com a planta visível ajuda o programa a fazer a análise.',
      tag: 'Câmera → Computador',
    },
    {
      symbol: '⌕',
      kicker: '2 / Examinar a imagem',
      title: 'O programa observa cores e formas.',
      text: 'O programa busca características visuais na imagem. Uma pessoa precisa conferir a interpretação antes de decidir o cuidado com a plantação.',
      tag: 'Imagem → Análise de cores e contornos',
    },
    {
      symbol: '⌘',
      kicker: '3 / Enviar o comando',
      title: 'O computador conversa com o aparelho.',
      text: 'Um cabo leva os comandos do programa ao controlador do LEAF. Ele coordena as partes que movimentam o sistema e acionam as bombas.',
      tag: 'Computador → Cabo USB → Controlador',
    },
    {
      symbol: '⌁',
      kicker: '4 / Controlar o borrifador',
      title: 'Aplicar no lugar escolhido.',
      text: 'Motores e bombas fazem parte do sistema de aplicação direcionada. O aparelho deve ser ajustado para controlar a posição e a quantidade de líquido.',
      tag: 'Controlador → Motores e bombas',
    },
  ];
  document.querySelectorAll('[data-step]').forEach((button) =>
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-step]').forEach((item) => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      const item = architecture[Number(button.dataset.step)];
      $('#architectureDetail').innerHTML =
        `<span class="detail-symbol" aria-hidden="true">${item.symbol}</span><div><p class="overline">${item.kicker}</p><h3>${item.title}</h3><p>${item.text}</p><span class="tech-tag">${item.tag}</span></div>`;
    })
  );
  function render(plan) {
    const concentrate = plan.concentrate,
      dilution = plan.dilution;
    let html = `<span class="result-badge">${concentrate ? 'Receita original do concentrado LEAF' : 'Diluição com a medida que você informou'}</span><h3 class="result-title">${concentrate ? 'Seu concentrado LEAF' : 'Sua mistura para o pulverizador'}</h3><p class="result-subtitle">${concentrate ? 'As seis medidas abaixo seguem a tabela do projeto e foram ajustadas à quantidade escolhida.' : 'O cálculo usa a orientação que você preencheu. Ele não confirma se a dose é adequada para sua plantação.'}</p><div class="result-context"><span>${escape(plan.crop)}</span><span>${escape(plan.problem)}</span><span>${escape(plan.severity)}</span><span>${escape(plan.stage)}</span></div>`;
    if (concentrate) {
      html += `<div class="notice concentrate-notice"><strong>Concentrado: precisa de diluição antes do uso.</strong><p>Esta receita é da mistura-base. Não coloque o concentrado puro nas plantas. A quantidade de água para pulverizar deve seguir a orientação para o seu cultivo.</p></div><div class="result-section"><h4>1. Separe os ingredientes</h4><table class="measure-table"><caption>Receita proporcional ao lote de ${LEAF.liquid(plan.volume)} da tabela original</caption><thead><tr><th scope="col">Ingrediente</th><th scope="col">Medida</th></tr></thead><tbody>${concentrate.ingredients.map((item) => `<tr><td>${escape(item.name)}<small>${escape(item.help)}</small></td><td>${escape(item.amountText)}</td></tr>`).join('')}</tbody></table><p class="result-date">1 L = 1.000 mL. Use um copo medidor ou uma seringa medidora; não estime com colheres de cozinha.</p></div><div class="result-section"><h4>2. Confira o preparo</h4><ol><li>Separe os extratos já preparados, equivalentes aos usados pelo projeto. Óleo de nim puro, alho em pó e molho de pimenta não substituem os extratos da tabela.</li><li>A descrição original orienta misturar os extratos e o óleo em um recipiente escuro e depois acrescentar o sabão potássico, misturando bem.</li><li>As medidas da tabela já somam o volume nominal do lote. Água acrescentada muda a concentração; não calcule uma quantidade extra por conta própria.</li><li>Identifique o recipiente como “LEAF — concentrado”, com a data. Siga a orientação de preparo e armazenamento recebida da equipe.</li></ol></div>`;
    } else {
      html += `<div class="result-section"><h4>1. Meça o concentrado</h4><div class="measure-highlight"><span>Concentrado LEAF</span><strong>${LEAF.quantity(dilution.concentrateML, 'mL')}</strong></div><p class="result-date">Medida informada por você: ${LEAF.quantity(dilution.dose, 'mL')} de LEAF por litro de mistura pronta.</p><p>${escape(dilution.formula)}</p></div><div class="result-section"><h4>2. Complete com água</h4><p>Acrescente água para chegar a <strong>${LEAF.liquid(plan.volume)} no total</strong>, seguindo a ordem de preparo da orientação recebida.</p><p>Não coloque ${LEAF.liquid(plan.volume)} de água e depois o produto por cima: o total é de água e concentrado juntos.</p></div>`;
    }
    html += `<div class="result-section case-guidance"><h4>Para ${escape(plan.crop.toLocaleLowerCase('pt-BR'))} com ${escape(plan.problem.toLocaleLowerCase('pt-BR'))}</h4><p>${escape(plan.context.focus)}</p><p class="priority-message">${escape(plan.priority)}</p><ul>${plan.context.observations.map((item) => `<li>${escape(item)}</li>`).join('')}</ul></div><div class="result-section"><h4>Cuidados que fazem diferença</h4><ul>${plan.precautions.map((item) => `<li>${escape(item)}</li>`).join('')}</ul></div>`;
    if (plan.notes || plan.location)
      html += `<div class="result-section"><h4>O que você contou</h4>${plan.notes ? `<p>${escape(plan.notes)}</p>` : ''}${plan.location ? `<p>Região: ${escape(plan.location)}</p>` : ''}</div>`;
    html += `<details class="extra-fields result-evidence"><summary>Ver os documentos da receita <span aria-hidden="true">+</span></summary><p>${escape(plan.context.evidence)}</p><div class="source-list">${plan.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escape(source.title)} ↗<small>${escape(source.section)}</small></a>`).join('')}</div></details><div class="result-actions no-print"><button type="button" class="button" data-action="print">Imprimir / salvar PDF ↗</button><button type="button" class="button outline" data-action="copy">Copiar ficha</button><button type="button" class="button outline" data-action="download">Baixar ficha</button></div><p class="result-date">LEAF · ${new Date().toLocaleDateString('pt-BR')} · Guarde esta ficha com as orientações de uso do seu cultivo.</p>`;
    result.innerHTML = html;
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function generate() {
    if (!form.reportValidity()) return;
    try {
      currentPlan = LEAF.createPlan({
        mode,
        crop: $('#crop').value,
        problem: $('#problem').value,
        stage: $('#stage').value,
        severity: $('#severity').value,
        volume: $('#volume').value,
        dose: $('#dose').value,
        doseConfirmed: $('#doseConfirmed').checked,
        notes: $('#notes').value,
        location: $('#location').value,
      });
      render(currentPlan);
    } catch (error) {
      toast(error.message);
    }
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    generate();
  });
  result.addEventListener('click', async (event) => {
    if (event.target.closest('#loadExample')) {
      setMode('concentrate');
      $('#crop').value = 'Couve';
      $('#problem').value = 'Pulgões';
      $('#stage').value = 'Crescendo';
      $('#severity').value = 'Poucas plantas';
      generate();
      return;
    }
    const button = event.target.closest('[data-action]');
    if (!button || !currentPlan) return;
    if (button.dataset.action === 'print') {
      window.print();
      return;
    }
    const text = LEAF.planText(currentPlan);
    if (button.dataset.action === 'copy') {
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(text);
        toast('Ficha copiada com medidas, cuidados e fontes.');
      } catch {
        toast('Use “Baixar ficha” para salvar o texto completo.');
      }
    }
    if (button.dataset.action === 'download') {
      const url = URL.createObjectURL(
        new Blob(['\ufeff' + text], { type: 'text/plain;charset=utf-8' })
      );
      const link = document.createElement('a');
      link.href = url;
      link.download = 'minha-ficha-leaf.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast('Sua ficha está pronta para baixar.');
    }
  });
  form.addEventListener('reset', () => {
    currentPlan = null;
    setMode('concentrate');
    result.innerHTML = initialResult;
    toast('Pronto. Você pode começar uma nova ficha.');
  });
  let printDetails = [];
  window.addEventListener('beforeprint', () => {
    printDetails = [...result.querySelectorAll('details:not([open])')];
    printDetails.forEach((detail) => {
      detail.open = true;
    });
  });
  window.addEventListener('afterprint', () => {
    printDetails.forEach((detail) => {
      detail.open = false;
    });
    printDetails = [];
  });
})();

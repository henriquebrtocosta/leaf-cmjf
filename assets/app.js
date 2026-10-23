(function () {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const escape = text => String(text ?? '').replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
  const form = $('#cropForm'), result = $('#result'), initialResult = result.innerHTML;
  const tabs = [...document.querySelectorAll('[data-mode]')];
  let mode = 'reference', currentPlan = null, toastTimer;
  function toast(message) {
    const element = $('#toast');
    element.textContent = message;
    element.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.classList.remove('show'), 4000);
  }
  function setMode(nextMode, moveFocus = false) {
    mode = nextMode;
    tabs.forEach(tab => {
      const selected = tab.dataset.mode === mode;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (moveFocus && selected) tab.focus();
    });
    $('#referencePanel').hidden = mode !== 'reference';
    $('#labelPanel').hidden = mode !== 'label';
    $('#labelFields').disabled = mode !== 'label';
    $('#recipe').disabled = mode !== 'reference';
    form.querySelector('button[type="submit"]').innerHTML = mode === 'label' ? 'Calcular medidas e plano <span aria-hidden="true">↗</span>' : 'Gerar receita e plano <span aria-hidden="true">↗</span>';
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
    tab.addEventListener('keydown', event => {
      if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        const target = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        setMode(tabs[target].dataset.mode, true);
      }
    });
  });
  const menu = $('#menuToggle'), nav = $('#mainNav');
  function closeMenu() {menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');}
  menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);});
  nav.addEventListener('click', event => {if (event.target.closest('a')) closeMenu();});
  document.addEventListener('keydown', event => {if (event.key === 'Escape' && nav.classList.contains('open')) {closeMenu(); menu.focus();}});
  $('#newsToggle').addEventListener('click', () => {
    const toggle = $('#newsToggle'), open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    $('#newsDetail').hidden = !open;
    toggle.querySelector('span').textContent = open ? '−' : '+';
  });
  const architecture = [
    {symbol: '◎', kicker: '01 / A entrada do sistema', title: 'Tudo começa pela observação.', text: 'A câmera fornece imagens das plantas. Enquadramento, iluminação e qualidade da captura influenciam as informações disponíveis para o processamento.', tag: 'Câmera → Aplicação Python'},
    {symbol: '⌕', kicker: '02 / Interpretar características visuais', title: 'Transformar pixels em informação.', text: 'Python, OpenCV e NumPy permitem segmentar cores em HSV e analisar contornos. As regras de classificação oferecem indicações experimentais que precisam de avaliação e confirmação.', tag: 'Imagem → Máscaras de cor → Contornos'},
    {symbol: '⌘', kicker: '03 / Software encontra hardware', title: 'Uma ponte até o mecanismo.', text: 'A aplicação envia comandos por uma conexão USB serial ao ESP32. O microcontrolador integra o processamento no computador ao controle dos componentes físicos.', tag: 'Python → USB serial → ESP32'},
    {symbol: '⌁', kicker: '04 / Atuação experimental', title: 'Direcionar o movimento e o fluxo.', text: 'O firmware coordena motores e bombas do protótipo. Posicionamento, volume dispensado e repetibilidade devem ser calibrados e medidos em testes controlados.', tag: 'ESP32 → Motores + Bombas → Aplicação'}
  ];
  document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-step]').forEach(item => {item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button));});
    const item = architecture[Number(button.dataset.step)];
    $('#architectureDetail').innerHTML = `<span class="detail-symbol" aria-hidden="true">${item.symbol}</span><div><p class="overline">${item.kicker}</p><h3>${item.title}</h3><p>${item.text}</p><span class="tech-tag">${item.tag}</span></div>`;
  }));
  function render(plan) {
    const ref = plan.reference, calc = plan.calculation;
    const title = ref ? ref.recipe.title : calc ? 'Medidas do seu produto' : 'Vamos entender a ocorrência.';
    let html = `<span class="result-badge${plan.noMatch ? ' warn' : ''}">${ref ? 'Receita de referência · Embrapa' : calc ? 'Cálculo da dose informada' : 'Observação e manejo'}</span><h3 class="result-title">${title}</h3><p class="result-subtitle">${ref ? escape(ref.recipe.description) : calc ? 'As quantidades abaixo reproduzem a proporção que você transcreveu da bula. O site não verifica o produto nem sua indicação.' : escape(plan.noMatch)}</p><div class="result-context"><span>${escape(plan.crop)}</span><span>${escape(plan.pest)}</span><span>${LEAF.liquid(plan.volume)} finais</span><span>${escape(plan.stage)}</span></div>`;
    if (ref) {
      html += `<div class="result-section"><h4>01 / Ingredientes e medidas</h4><table class="measure-table"><caption>Quantidades para ${LEAF.liquid(plan.volume)} de calda final${ref.recipe.id === 'onion' ? ' já diluída' : ''}</caption><thead><tr><th scope="col">Ingrediente</th><th scope="col">Quantidade</th></tr></thead><tbody>${ref.ingredients.map(item => `<tr><td>${escape(item.name)}${item.note ? `<small>${escape(item.note)}</small>` : ''}</td><td>${escape(item.amount)}</td></tr>`).join('')}</tbody></table><p class="result-date">${escape(ref.formula)}</p></div><div class="result-section"><h4>02 / Modo de preparo</h4><ol>${ref.steps.map(step => `<li>${escape(step)}</li>`).join('')}</ol></div><div class="result-section"><h4>03 / Antes de usar e colher</h4><p>${escape(ref.recipe.interval)}</p><p>Use proteção apropriada, evite pele e olhos, calor excessivo e deriva. Preserve água, animais e organismos benéficos. Não misture com outros produtos. Confirme tolerância da cultivar e condições de aplicação com assistência técnica.</p></div><div class="result-section"><a class="source-link" href="${LEAF.source.url}" target="_blank" rel="noopener noreferrer">Consultar a referência: ${LEAF.source.title} ↗</a><p class="result-date">Fonte consultada em ${LEAF.source.consulted}. Esta receita é uma referência externa, separada das formulações em estudo pelo LEAF.</p></div>`;
    }
    if (calc) {
      html += `<div class="result-section"><h4>01 / Quantidade calculada</h4><div class="measure-highlight"><span>${escape(calc.product)}</span><strong>${escape(calc.amountText)}</strong></div><p class="result-date">Dose informada: ${LEAF.format(calc.dose)} ${escape(calc.unit)}<br>${escape(calc.formula)}</p><p>Adicione água para completar o volume final de <strong>${LEAF.liquid(calc.volume)}</strong>, seguindo a ordem de preparo e as instruções da bula. A água não deve ser somada como um volume extra de ${LEAF.liquid(calc.volume)}.</p></div><div class="result-section"><h4>02 / Consulte também na bula</h4><p>Equipamentos de proteção, modo de aplicação, frequência, número máximo de aplicações, intervalo de segurança para a colheita e reentrada. Não combine produtos nem aumente a dose para intensificar o efeito.</p></div>`;
    }
    html += `<div class="result-section"><h4>Roteiro de observação</h4><ul>${plan.observations.map(item => `<li>${escape(item)}</li>`).join('')}</ul>${plan.symptoms ? `<p><strong>Suas observações:</strong> ${escape(plan.symptoms)}</p>` : ''}${plan.location ? `<p><strong>Região:</strong> ${escape(plan.location)}</p>` : ''}</div><div class="notice">${plan.notices.map(item => `<p>${escape(item)}</p>`).join('')}</div>`;
    if (ref) html += `<details class="extra-fields no-print"><summary>Pesquisar ingredientes e utensílios <span aria-hidden="true">+</span></summary><p class="result-date">Atalhos para comparar ofertas nas lojas; sem cotações ou preços inventados.</p><div class="shopping">${ref.shopping.map(item => `<a href="https://www.google.com/search?tbm=shop&amp;q=${encodeURIComponent(item)}" target="_blank" rel="noopener noreferrer">${escape(item)} ↗</a>`).join('')}</div></details>`;
    html += `<div class="result-actions no-print"><button type="button" class="button" data-action="print">Imprimir / salvar PDF ↗</button><button type="button" class="button outline" data-action="copy">Copiar plano</button><button type="button" class="button outline" data-action="download">Baixar .txt</button></div><p class="result-date">LEAF · Gerado em ${new Date().toLocaleDateString('pt-BR')} · Cálculo local no navegador</p>`;
    result.innerHTML = html;
    result.focus({preventScroll: true});
    result.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  function generate() {
    if (!form.reportValidity()) return;
    try {
      currentPlan = LEAF.createPlan({mode, crop: $('#crop').value, pest: $('#pest').value, stage: $('#stage').value, volume: $('#volume').value, recipe: $('#recipe').value, product: $('#product').value, dose: $('#dose').value, unit: $('#unit').value, labelConfirmed: $('#labelConfirmed').checked, symptoms: $('#symptoms').value, location: $('#location').value});
      render(currentPlan);
    } catch (error) {toast(error.message);}
  }
  form.addEventListener('submit', event => {event.preventDefault(); generate();});
  function loadExample() {
    setMode('reference');
    $('#crop').value = 'Couve'; $('#pest').value = 'Pulgões'; $('#stage').value = 'Crescimento vegetativo'; $('#volume').value = '1'; $('#recipe').value = 'auto';
    generate();
  }
  result.addEventListener('click', async event => {
    if (event.target.closest('#loadExample')) {loadExample(); return;}
    const button = event.target.closest('[data-action]');
    if (!button || !currentPlan) return;
    if (button.dataset.action === 'print') {window.print(); return;}
    const text = LEAF.planText(currentPlan);
    if (button.dataset.action === 'copy') {
      try {if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(text); toast('Plano completo copiado, incluindo medidas e fonte.');}
      catch {toast('Cópia automática indisponível. Use “Baixar .txt” para salvar o plano completo.');}
    }
    if (button.dataset.action === 'download') {
      const url = URL.createObjectURL(new Blob([text], {type: 'text/plain;charset=utf-8'}));
      const link = document.createElement('a'); link.href = url; link.download = 'plano-leaf.txt';
      document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast('Plano preparado para download.');
    }
  });
  form.addEventListener('reset', () => {
    currentPlan = null; setMode('reference'); result.innerHTML = initialResult;
    toast('Formulário e resultado limpos.');
  });
})();

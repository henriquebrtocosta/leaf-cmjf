(function () {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const escape = text => String(text ?? '').replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
  const form = $('#cropForm'), result = $('#result'), initialResult = result.innerHTML;
  const tabs = [...document.querySelectorAll('[data-mode]')];
  let mode = 'concentrate', currentPlan = null, toastTimer;
  function toast(message) {
    $('#toast').textContent = message; $('#toast').classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 4500);
  }
  function invalidate() {
    if (!currentPlan) return;
    currentPlan = null;
    result.innerHTML = '<div class="empty-result"><span class="empty-plant" aria-hidden="true">⌁</span><h3>Vamos atualizar sua ficha.</h3><p>Você mudou as respostas. Use o botão do formulário para calcular as novas medidas.</p></div>';
  }
  function setMode(next, focus = false) {
    invalidate(); mode = next;
    tabs.forEach(tab => {const selected = tab.dataset.mode === mode; tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; if (focus && selected) tab.focus();});
    const dilution = mode === 'dilution';
    $('#concentratePanel').hidden = dilution; $('#dilutionPanel').hidden = !dilution; $('#dilutionFields').disabled = !dilution;
    $('#volumeLabel').textContent = dilution ? 'Quantos litros de mistura pronta quer no pulverizador? *' : 'Quantos litros de concentrado LEAF quer preparar? *';
    $('#volumeHelp').textContent = dilution ? 'É o total de água e concentrado juntos. Não acrescente esse volume de água por fora.' : 'Esta quantidade é do concentrado, não do pulverizador. 1 litro = 1.000 mL.';
    $('#volume').min = dilution ? '0.5' : '0.1'; $('#volume').step = dilution ? '0.5' : '0.1'; $('#volume').value = dilution ? '20' : '1';
    form.querySelector('button[type="submit"]').innerHTML = dilution ? 'Calcular água e LEAF <span aria-hidden="true">↗</span>' : 'Ver minha receita LEAF <span aria-hidden="true">↗</span>';
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      setMode(tabs[next].dataset.mode, true);
    });
  });
  form.addEventListener('input', invalidate); form.addEventListener('change', invalidate);
  const menu = $('#menuToggle'), nav = $('#mainNav');
  function closeMenu() {menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');}
  menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);});
  nav.addEventListener('click', event => {if (event.target.closest('a')) closeMenu();});
  document.addEventListener('keydown', event => {if (event.key === 'Escape' && nav.classList.contains('open')) {closeMenu(); menu.focus();}});
  $('#newsToggle').addEventListener('click', () => {const toggle = $('#newsToggle'), open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); $('#newsDetail').hidden = !open; toggle.querySelector('span').textContent = open ? '−' : '+';});
  const architecture = [
    {symbol:'◎', kicker:'1 / Observar a planta', title:'Tudo começa com uma imagem.', text:'A câmera registra a planta. Uma imagem bem iluminada e com a planta visível ajuda o programa a fazer a análise.', tag:'Câmera → Computador'},
    {symbol:'⌕', kicker:'2 / Examinar a imagem', title:'O programa observa cores e formas.', text:'O programa busca características visuais na imagem. Uma pessoa precisa conferir a interpretação antes de decidir o cuidado com a plantação.', tag:'Imagem → Análise de cores e contornos'},
    {symbol:'⌘', kicker:'3 / Enviar o comando', title:'O computador conversa com o aparelho.', text:'Um cabo leva os comandos do programa ao controlador do LEAF. Ele coordena as partes que movimentam o sistema e acionam as bombas.', tag:'Computador → Cabo USB → Controlador'},
    {symbol:'⌁', kicker:'4 / Controlar o borrifador', title:'Aplicar no lugar escolhido.', text:'Motores e bombas fazem parte do sistema de aplicação direcionada. O aparelho deve ser ajustado para controlar a posição e a quantidade de líquido.', tag:'Controlador → Motores e bombas'}
  ];
  document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-step]').forEach(item => {item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button));});
    const item = architecture[Number(button.dataset.step)];
    $('#architectureDetail').innerHTML = `<span class="detail-symbol" aria-hidden="true">${item.symbol}</span><div><p class="overline">${item.kicker}</p><h3>${item.title}</h3><p>${item.text}</p><span class="tech-tag">${item.tag}</span></div>`;
  }));
  function render(plan) {
    const concentrate = plan.concentrate, dilution = plan.dilution;
    let html = `<span class="result-badge">${concentrate ? 'Receita original do concentrado LEAF' : 'Diluição com a medida que você informou'}</span><h3 class="result-title">${concentrate ? 'Seu concentrado LEAF' : 'Sua mistura para o pulverizador'}</h3><p class="result-subtitle">${concentrate ? 'As seis medidas abaixo seguem a tabela do projeto e foram ajustadas à quantidade escolhida.' : 'O cálculo usa a orientação que você preencheu. Ele não confirma se a dose é adequada para sua plantação.'}</p><div class="result-context"><span>${escape(plan.crop)}</span><span>${escape(plan.problem)}</span><span>${escape(plan.severity)}</span><span>${escape(plan.stage)}</span></div>`;
    if (concentrate) {
      html += `<div class="notice concentrate-notice"><strong>Concentrado: precisa de diluição antes do uso.</strong><p>Esta receita é da mistura-base. Não coloque o concentrado puro nas plantas. A quantidade de água para pulverizar deve seguir a orientação para o seu cultivo.</p></div><div class="result-section"><h4>1. Separe os ingredientes</h4><table class="measure-table"><caption>Receita proporcional ao lote de ${LEAF.liquid(plan.volume)} da tabela original</caption><thead><tr><th scope="col">Ingrediente</th><th scope="col">Medida</th></tr></thead><tbody>${concentrate.ingredients.map(item => `<tr><td>${escape(item.name)}<small>${escape(item.help)}</small></td><td>${escape(item.amountText)}</td></tr>`).join('')}</tbody></table><p class="result-date">1 L = 1.000 mL. Use um copo medidor ou uma seringa medidora; não estime com colheres de cozinha.</p></div><div class="result-section"><h4>2. Confira o preparo</h4><ol><li>Separe os extratos já preparados, equivalentes aos usados pelo projeto. Óleo de nim puro, alho em pó e molho de pimenta não substituem os extratos da tabela.</li><li>A descrição original orienta misturar os extratos e o óleo em um recipiente escuro e depois acrescentar o sabão potássico, misturando bem.</li><li>As medidas da tabela já somam o volume nominal do lote. Água acrescentada muda a concentração; não calcule uma quantidade extra por conta própria.</li><li>Identifique o recipiente como “LEAF — concentrado”, com a data. Siga a orientação de preparo e armazenamento recebida da equipe.</li></ol></div>`;
    } else {
      html += `<div class="result-section"><h4>1. Meça o concentrado</h4><div class="measure-highlight"><span>Concentrado LEAF</span><strong>${LEAF.quantity(dilution.concentrateML, 'mL')}</strong></div><p class="result-date">Medida informada por você: ${LEAF.quantity(dilution.dose, 'mL')} de LEAF por litro de mistura pronta.</p><p>${escape(dilution.formula)}</p></div><div class="result-section"><h4>2. Complete com água</h4><p>Acrescente água para chegar a <strong>${LEAF.liquid(plan.volume)} no total</strong>, seguindo a ordem de preparo da orientação recebida.</p><p>Não coloque ${LEAF.liquid(plan.volume)} de água e depois o produto por cima: o total é de água e concentrado juntos.</p></div>`;
    }
    html += `<div class="result-section case-guidance"><h4>Para ${escape(plan.crop.toLocaleLowerCase('pt-BR'))} com ${escape(plan.problem.toLocaleLowerCase('pt-BR'))}</h4><p>${escape(plan.context.focus)}</p><p class="priority-message">${escape(plan.priority)}</p><ul>${plan.context.observations.map(item => `<li>${escape(item)}</li>`).join('')}</ul></div><div class="result-section"><h4>Cuidados que fazem diferença</h4><ul>${plan.precautions.map(item => `<li>${escape(item)}</li>`).join('')}</ul></div>`;
    if (plan.notes || plan.location) html += `<div class="result-section"><h4>O que você contou</h4>${plan.notes ? `<p>${escape(plan.notes)}</p>` : ''}${plan.location ? `<p>Região: ${escape(plan.location)}</p>` : ''}</div>`;
    html += `<details class="extra-fields result-evidence"><summary>Ver os documentos da receita <span aria-hidden="true">+</span></summary><p>${escape(plan.context.evidence)}</p><div class="source-list">${plan.sources.map(source => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${escape(source.title)} ↗<small>${escape(source.section)}</small></a>`).join('')}</div></details><div class="result-actions no-print"><button type="button" class="button" data-action="print">Imprimir / salvar PDF ↗</button><button type="button" class="button outline" data-action="copy">Copiar ficha</button><button type="button" class="button outline" data-action="download">Baixar ficha</button></div><p class="result-date">LEAF · ${new Date().toLocaleDateString('pt-BR')} · Guarde esta ficha com as orientações de uso do seu cultivo.</p>`;
    result.innerHTML = html; result.focus({preventScroll:true}); result.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function generate() {
    if (!form.reportValidity()) return;
    try {currentPlan = LEAF.createPlan({mode, crop:$('#crop').value, problem:$('#problem').value, stage:$('#stage').value, severity:$('#severity').value, volume:$('#volume').value, dose:$('#dose').value, doseConfirmed:$('#doseConfirmed').checked, notes:$('#notes').value, location:$('#location').value}); render(currentPlan);}
    catch(error) {toast(error.message);}
  }
  form.addEventListener('submit', event => {event.preventDefault();generate();});
  result.addEventListener('click', async event => {
    if(event.target.closest('#loadExample')) {setMode('concentrate');$('#crop').value='Couve';$('#problem').value='Pulgões';$('#stage').value='Crescendo';$('#severity').value='Poucas plantas';generate();return;}
    const button = event.target.closest('[data-action]'); if(!button || !currentPlan)return;
    if(button.dataset.action==='print'){window.print();return;}
    const text=LEAF.planText(currentPlan);
    if(button.dataset.action==='copy') {
      try {if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(text);toast('Ficha copiada com medidas, cuidados e fontes.');}
      catch {toast('Use “Baixar ficha” para salvar o texto completo.');}
    }
    if(button.dataset.action==='download') {const url=URL.createObjectURL(new Blob(['\ufeff'+text],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='minha-ficha-leaf.txt';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('Sua ficha está pronta para baixar.');}
  });
  form.addEventListener('reset',()=>{currentPlan=null;setMode('concentrate');result.innerHTML=initialResult;toast('Pronto. Você pode começar uma nova ficha.');});
  let printDetails = [];
  window.addEventListener('beforeprint', () => {printDetails = [...result.querySelectorAll('details:not([open])')]; printDetails.forEach(detail => {detail.open = true;});});
  window.addEventListener('afterprint', () => {printDetails.forEach(detail => {detail.open = false;}); printDetails = [];});
})();

/* LEAF: deterministic reference matching and arithmetic. No network or AI model. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LEAF = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const source = Object.freeze({
    title: 'Embrapa Hortaliças · Circular Técnica 47 (2007), p. 14',
    url: 'https://www.infoteca.cnptia.embrapa.br/bitstream/doc/781607/1/ct47.pdf#page=14',
    consulted: '23/10/2026'
  });
  const crops = Object.freeze(['Alface', 'Couve', 'Couve-flor', 'Tomate', 'Morango', 'Melancia']);
  const recipes = Object.freeze([
    Object.freeze({id: 'soap', title: 'Calda de sabão neutro', targets: Object.freeze(['Pulgões', 'Cochonilhas', 'Tripes', 'Lagartas']), description: 'Referência para hortaliças; a tolerância da sua cultivar e a identificação do alvo precisam ser confirmadas.', preparation: 'Dissolva o sabão na porção de água quente, deixe esfriar e acrescente água fria até o volume final. Não substitua por detergente, sabão em pó ou produto com aditivos.', interval: 'A publicação orienta cerca de duas semanas entre o uso de preparados com sabão e a colheita. Isso não estabelece carência específica para cada cultura; confirme com assistência técnica.'}),
    Object.freeze({id: 'onion', title: 'Calda de cebola', targets: Object.freeze(['Pulgões', 'Lagartas', 'Vaquinhas']), description: 'Descrita na fonte como repelente para esses insetos em hortaliças; não equivale à comprovação de controle da infestação.', preparation: 'Faça um extrato com 100 g de cebola picada por litro de água. Repouse por 10 dias e coe. Na diluição final, use uma parte do extrato coado para três partes de água.', interval: 'A fonte não especifica carência para esta calda. Confirme o intervalo e a adequação ao cultivo antes de aplicar, especialmente perto da colheita.'})
  ]);
  const number = value => {
    if (typeof value === 'number') return value;
    if (typeof value !== 'string' || !value.trim()) return NaN;
    return Number(value.trim().replace(',', '.'));
  };
  const format = value => new Intl.NumberFormat('pt-BR', {maximumFractionDigits: 3}).format(value);
  const quantity = (value, unit) => `${format(value)} ${unit}`;
  const liquid = liters => liters < 1 ? quantity(liters * 1000, 'mL') : quantity(liters, 'L');
  const clean = (value, limit = 1500) => String(value || '').trim().slice(0, limit);
  function validateVolume(value) {
    const volume = number(value);
    if (!Number.isFinite(volume) || volume < 0.5 || volume > 100 || Math.abs(volume * 2 - Math.round(volume * 2)) > 1e-8) throw new Error('Informe um volume de 0,5 a 100 litros, em passos de 0,5 litro.');
    return volume;
  }
  function matchRecipes(crop, pest) {
    return crops.includes(crop) ? recipes.filter(recipe => recipe.targets.includes(pest)) : [];
  }
  function calculateReference(recipeId, volumeInput) {
    const volume = validateVolume(volumeInput);
    const recipe = recipes.find(item => item.id === recipeId);
    if (!recipe) throw new Error('Receita não encontrada.');
    if (recipeId === 'soap') return {
      recipe, volume, source,
      ingredients: [
        {name: 'Sabão neutro', amount: quantity(10 * volume, 'g')},
        {name: 'Água quente para dissolver', amount: liquid(0.05 * volume)},
        {name: 'Água fria', amount: `Completar até ${liquid(volume)}`, note: 'Volume final, incluindo a porção de água quente.'}
      ],
      steps: [recipe.preparation, 'Homogeneíze e confira o volume total; a receita conserva a proporção de 10 g de sabão por litro final.'],
      shopping: ['sabão neutro sem aditivos', 'balança digital gramas', 'recipiente graduado'],
      formula: `${quantity(10, 'g/L')} × ${liquid(volume)} = ${quantity(10 * volume, 'g')}`
    };
    return {
      recipe, volume, source,
      ingredients: [
        {name: 'Extrato de cebola já coado', amount: liquid(volume / 4)},
        {name: 'Água para diluir', amount: liquid(3 * volume / 4)}
      ],
      steps: [recipe.preparation, `Meça ${liquid(volume / 4)} do extrato e junte ${liquid(3 * volume / 4)} de água. O rendimento após coar pode variar; prepare extrato suficiente para medir essa quantidade.`],
      shopping: ['cebola', 'recipiente graduado', 'peneira fina'],
      formula: `1 parte de extrato + 3 partes de água = ${liquid(volume)} de calda diluída`
    };
  }
  function calculateLabel(input) {
    const volume = validateVolume(input.volume);
    const dose = number(input.dose);
    const units = {'mL/L': {denominator: 1, unit: 'mL'}, 'g/L': {denominator: 1, unit: 'g'}, 'mL/100L': {denominator: 100, unit: 'mL'}, 'g/100L': {denominator: 100, unit: 'g'}};
    const spec = units[input.unit];
    if (!spec) throw new Error('Selecione uma das unidades disponíveis; doses por hectare não são convertidas aqui.');
    if (!Number.isFinite(dose) || dose < 0.001 || dose > 10000) throw new Error('Informe uma dose numérica entre 0,001 e 10.000, conforme a bula.');
    if (!clean(input.product, 100)) throw new Error('Informe o nome do produto.');
    if (input.labelConfirmed !== true) throw new Error('Confira na bula a dose, a cultura e o alvo antes de calcular.');
    const amount = dose * volume / spec.denominator;
    // Do not silently round tiny quantities to zero or produce a liquid amount exceeding the tank.
    if (amount < 0.001) throw new Error('O resultado é menor que 0,001 unidade. Revise a dose e a capacidade de medição com assistência técnica.');
    if (spec.unit === 'mL' && amount >= volume * 1000) throw new Error('A quantidade do produto é igual ou maior que o volume final. Revise a unidade e a dose da bula.');
    return {volume, dose, unit: input.unit, product: clean(input.product, 100), amount, amountText: quantity(amount, spec.unit), formula: `(${quantity(dose, spec.unit)} ÷ ${quantity(spec.denominator, 'L')}) × ${liquid(volume)} = ${quantity(amount, spec.unit)}`};
  }
  function observations(pest) {
    const tips = {
      'Pulgões': 'Observe colônias nos brotos e no verso das folhas, folhas enroladas, formigas e inimigos naturais como joaninhas.',
      'Cochonilhas': 'Fotografe os organismos aderidos a folhas e ramos; procure secreções e registre se há formigas.',
      'Tripes': 'Registre raspagens ou áreas prateadas e fotografe os insetos, se possível com ampliação.',
      'Lagartas': 'Procure ovos, lagartas e excrementos. Registre a localização e o padrão dos danos.',
      'Vaquinhas': 'Fotografe os besouros e os furos nas folhas para confirmar o organismo presente.',
      'Ácaros': 'Use uma lupa para observar o verso das folhas, pontilhado claro e possíveis teias finas.',
      'Mosca-branca': 'Observe o verso das folhas e se há pequenos insetos brancos voando quando a planta se movimenta.',
      'Lesmas ou caracóis': 'Procure trilhas de muco e danos irregulares, sobretudo em áreas úmidas ao entardecer.',
      'Manchas nas folhas': 'Fotografe as manchas e a planta inteira. Registre irrigação, chuva recente e distribuição dos sintomas.',
      'Amarelecimento / murcha': 'Observe umidade e drenagem do solo, padrão do amarelecimento e alterações nas raízes; há várias causas possíveis.'
    };
    return [tips[pest] || 'Fotografe a planta inteira e os dois lados das folhas; confirme a causa dos sinais antes de escolher o manejo.', 'Compare plantas afetadas e sadias e registre a evolução; preserve os organismos benéficos e discuta medidas de manejo integrado com assistência técnica.'];
  }
  function createPlan(input) {
    const crop = clean(input.crop, 100), pest = clean(input.pest, 100), volume = validateVolume(input.volume);
    if (!crop || !pest) throw new Error('Selecione a cultura e a ocorrência.');
    const mode = input.mode === 'label' ? 'label' : 'reference';
    const matches = matchRecipes(crop, pest);
    const requested = input.recipe || 'auto';
    const selected = requested === 'auto' ? matches[0] : matches.find(recipe => recipe.id === requested);
    const plan = {
      mode, crop, pest, volume, stage: clean(input.stage, 100), symptoms: clean(input.symptoms), location: clean(input.location, 100), observations: observations(pest),
      reference: null, calculation: null, alternatives: matches.map(recipe => ({id: recipe.id, title: recipe.title})),
      notices: ['Referência educacional e cálculo de proporções. Confirme a identificação e a adequação ao cultivo com assistência técnica; este plano não é um receituário agronômico.']
    };
    if (mode === 'label') plan.calculation = calculateLabel({...input, volume});
    else if (selected) plan.reference = calculateReference(selected.id, volume);
    else plan.noMatch = requested === 'auto' ? 'A biblioteca inicial ainda não contém uma formulação de referência para essa combinação. O roteiro abaixo ajuda a confirmar a ocorrência. Se já possui produto indicado, use “Produto com bula” para calcular as medidas.' : 'A receita escolhida não é relacionada pela biblioteca a essa cultura e ocorrência. Experimente a busca automática ou use uma dose já conferida na bula.';
    if (plan.stage === 'Próxima da colheita') plan.notices.push('Cultivo próximo da colheita: não aplique antes de confirmar o intervalo de segurança específico. A calculadora não determina resíduos nem libera a colheita.');
    if (plan.stage === 'Muda / início do crescimento') plan.notices.push('Mudas podem ser mais sensíveis. Confirme tolerância e fitotoxicidade antes de utilizar qualquer preparo.');
    if (plan.stage === 'Floração') plan.notices.push('Na floração, proteja polinizadores e evite atingir flores e insetos benéficos. Confirme se o manejo é apropriado a essa fase.');
    return plan;
  }
  function planText(plan, date = new Date().toLocaleDateString('pt-BR')) {
    const lines = ['LEAF — Plano de referência agrícola', `Gerado em ${date}`, `Cultura: ${plan.crop}`, `Ocorrência informada: ${plan.pest}`, `Estágio: ${plan.stage}`, `Volume final: ${liquid(plan.volume)}`];
    if (plan.location) lines.push(`Região: ${plan.location}`);
    if (plan.symptoms) lines.push(`Observações: ${plan.symptoms}`);
    if (plan.reference) {
      const ref = plan.reference;
      lines.push('', ref.recipe.title, ref.recipe.description, '', 'INGREDIENTES', ...ref.ingredients.map(item => `${item.name}: ${item.amount}${item.note ? ` (${item.note})` : ''}`), '', 'PREPARO', ...ref.steps.map((step, i) => `${i + 1}. ${step}`), '', `Proporção: ${ref.formula}`, '', 'COLHEITA', ref.recipe.interval, '', `Fonte: ${source.title}`, source.url, `Fonte consultada em ${source.consulted}`);
    }
    if (plan.calculation) {
      const calc = plan.calculation;
      lines.push('', 'CÁLCULO A PARTIR DA BULA INFORMADA', `Produto: ${calc.product}`, `Dose transcrita pelo usuário: ${format(calc.dose)} ${calc.unit}`, `Quantidade calculada: ${calc.amountText}`, `Cálculo: ${calc.formula}`, `Água: completar o volume final de ${liquid(calc.volume)}, seguindo a ordem de preparo da bula.`, 'A bula e a indicação não foram verificadas pelo site. Frequência, carência, EPI e reentrada devem ser consultados nela.');
    }
    if (plan.noMatch) lines.push('', plan.noMatch);
    lines.push('', 'OBSERVAÇÃO E MANEJO', ...plan.observations.map(item => `• ${item}`), '', 'CUIDADOS', ...plan.notices.map(item => `• ${item}`));
    if (plan.reference) lines.push('• Use proteção apropriada, evite contato com pele e olhos, calor excessivo, deriva e contato com água, animais e organismos benéficos. Não misture esta referência com outros produtos.');
    return lines.join('\n');
  }
  return Object.freeze({source, crops, recipes, number, format, quantity, liquid, validateVolume, matchRecipes, calculateReference, calculateLabel, createPlan, planText});
});

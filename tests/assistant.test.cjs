const {test} = require('node:test');
const assert = require('node:assert/strict');
const LEAF = require('../assets/assistant-core.js');

const occurrence = {crop: 'Couve', pest: 'Pulgões', stage: 'Crescimento vegetativo', volume: 1, recipe: 'auto'};

test('matches documented targets and keeps unsupported symptoms and crops out', () => {
  assert.equal(LEAF.matchRecipes('Couve', 'Pulgões').length, 2);
  assert.deepEqual(LEAF.matchRecipes('Couve', 'Tripes').map(x => x.id), ['soap']);
  assert.deepEqual(LEAF.matchRecipes('Couve', 'Vaquinhas').map(x => x.id), ['onion']);
  for (const pest of ['Ácaros', 'Mosca-branca', 'Lesmas ou caracóis', 'Manchas nas folhas', 'Não sei identificar']) assert.equal(LEAF.matchRecipes('Couve', pest).length, 0);
  assert.equal(LEAF.matchRecipes('Outra cultura', 'Pulgões').length, 0);
});
test('scales soap mass and dissolving water without treating final water as extra', () => {
  for (const [volume, grams, water] of [[0.5, '5 g', '25 mL'], [1, '10 g', '50 mL'], [5, '50 g', '250 mL'], [20, '200 g', '1 L'], [100, '1.000 g', '5 L']]) {
    const result = LEAF.calculateReference('soap', volume);
    assert.equal(result.ingredients[0].amount, grams);
    assert.equal(result.ingredients[1].amount, water);
    assert.match(result.ingredients[2].amount, /^Completar até /);
  }
});
test('keeps onion extract separate from diluted final calda at 1:3', () => {
  const result = LEAF.calculateReference('onion', 2);
  assert.equal(result.ingredients[0].amount, '500 mL');
  assert.equal(result.ingredients[1].amount, '1,5 L');
  assert.match(result.steps[0], /10 dias/);
  assert.match(result.steps[1], /rendimento após coar/);
});
test('per-litre and per-100-litre dose conversions preserve mass and volume units', () => {
  const base = {volume: 5, product: 'Produto de teste', labelConfirmed: true};
  assert.equal(LEAF.calculateLabel({...base, dose: 2, unit: 'mL/L'}).amountText, '10 mL');
  assert.equal(LEAF.calculateLabel({...base, dose: 2.5, unit: 'g/L'}).amountText, '12,5 g');
  assert.equal(LEAF.calculateLabel({...base, dose: 200, unit: 'mL/100L'}).amountText, '10 mL');
  assert.equal(LEAF.calculateLabel({...base, dose: 150, unit: 'g/100L'}).amountText, '7,5 g');
  assert.equal(LEAF.calculateLabel({...base, dose: '2,5', unit: 'g/L'}).amount, 12.5);
  assert.equal(LEAF.calculateLabel({...base, dose: 150, unit: 'g/100L'}).formula, '(150 g ÷ 100 L) × 5 L = 7,5 g');
});
test('rejects invalid volume, dose, unit, missing confirmation and impractical liquid amounts', () => {
  for (const volume of ['', NaN, Infinity, -1, 0, 0.1, 0.75, 101, '1e999', 'abc']) assert.throws(() => LEAF.validateVolume(volume));
  assert.equal(LEAF.validateVolume('0,5'), 0.5);
  const base = {volume: 1, product: 'Teste', labelConfirmed: true, dose: 2, unit: 'mL/L'};
  for (const dose of ['', 0, -1, Infinity, 'abc']) assert.throws(() => LEAF.calculateLabel({...base, dose}));
  assert.throws(() => LEAF.calculateLabel({...base, unit: 'L/ha'}));
  assert.throws(() => LEAF.calculateLabel({...base, labelConfirmed: false}));
  assert.throws(() => LEAF.calculateLabel({...base, product: ' '}));
  assert.throws(() => LEAF.calculateLabel({...base, dose: 1000}));
  assert.throws(() => LEAF.calculateLabel({...base, volume: 0.5, dose: 0.001, unit: 'mL/100L'}));
});
test('does not substitute an incompatible manually selected recipe', () => {
  const plan = LEAF.createPlan({...occurrence, pest: 'Tripes', recipe: 'onion'});
  assert.equal(plan.reference, null);
  assert.match(plan.noMatch, /receita escolhida/);
});
test('commercial calculation remains available outside the reference library', () => {
  const plan = LEAF.createPlan({...occurrence, pest: 'Mosca-branca', mode: 'label', product: 'Teste', dose: 2, unit: 'mL/L', labelConfirmed: true});
  assert.equal(plan.calculation.amountText, '2 mL');
  assert.equal(plan.reference, null);
});
test('exports include actual measurements, preparation, provenance and harvest context', () => {
  const plan = LEAF.createPlan({...occurrence, volume: 5, stage: 'Próxima da colheita', symptoms: 'Folhas enroladas', location: 'MG'});
  const text = LEAF.planText(plan, '23/10/2026');
  for (const fragment of ['50 g', '250 mL', 'Completar até 5 L', 'Embrapa', 'ct47.pdf#page=14', 'Folhas enroladas', 'MG', 'não aplique', 'duas semanas']) assert.ok(text.includes(fragment), fragment);
  const labelText = LEAF.planText(LEAF.createPlan({...occurrence, mode: 'label', product: 'Teste', dose: 100, unit: 'g/100L', labelConfirmed: true}));
  assert.match(labelText, /Quantidade calculada: 1 g/);
  assert.match(labelText, /não foram verificadas pelo site/);
});

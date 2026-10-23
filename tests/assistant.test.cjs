const { test } = require('node:test');
const assert = require('node:assert/strict');
const LEAF = require('../assets/js/main.js');
const occurrence = {
  crop: 'Couve',
  problem: 'Pulgões',
  stage: 'Crescendo',
  severity: 'Poucas plantas',
  volume: 1,
};

test('copies the six recorded LEAF amounts, including combined garlic/onion and potassium soap', () => {
  const recipe = LEAF.calculateConcentrate(1);
  assert.deepEqual(
    recipe.ingredients.map((x) => x.amountML),
    [300, 180, 30, 300, 120, 70]
  );
  assert.equal(
    recipe.ingredients.reduce((sum, x) => sum + x.amountML, 0),
    1000
  );
  assert.match(recipe.ingredients.find((x) => x.id === 'garlicOnion').help, /dois juntos/);
  assert.match(recipe.ingredients.find((x) => x.id === 'soap').name, /potássico/);
  assert.match(recipe.ingredients.find((x) => x.id === 'neem').name, /já preparado/);
});
test('scales the original composition without adding water or normalizing a new blend', () => {
  for (const volume of [0.1, 0.5, 1, 2.5, 20, 100]) {
    const recipe = LEAF.calculateConcentrate(volume);
    assert.ok(
      Math.abs(recipe.ingredients.reduce((sum, x) => sum + x.amountML, 0) - volume * 1000) < 1e-8
    );
    assert.equal(recipe.ingredients[2].amountML, 30 * volume);
    assert.equal(recipe.ingredients.length, 6);
  }
  assert.equal(LEAF.calculateConcentrate(0.1).ingredients[2].amountText, '3 mL');
});
test('personalizes context by crop and sign while preserving recorded proportions', () => {
  const aphids = LEAF.createPlan(occurrence),
    fungi = LEAF.createPlan({ ...occurrence, crop: 'Morango', problem: 'Fungos ou mofo' });
  assert.notEqual(aphids.context.focus, fungi.context.focus);
  assert.match(fungi.context.evidence, /já colhidos/);
  assert.match(aphids.context.evidence, /alface e couve/);
  assert.deepEqual(aphids.concentrate.ingredients, fungi.concentrate.ingredients);
});
test('greater severity changes priority, never invents a higher concentration', () => {
  const low = LEAF.createPlan(occurrence),
    high = LEAF.createPlan({ ...occurrence, severity: 'Muitas plantas' });
  assert.notEqual(low.priority, high.priority);
  assert.deepEqual(low.concentrate, high.concentrate);
  assert.ok(high.precautions.some((x) => x.includes('Não aumente')));
});
test('growth phase changes relevant care', () => {
  assert.ok(
    LEAF.createPlan({ ...occurrence, stage: 'Muda pequena' }).precautions.some((x) =>
      x.includes('mais sensíveis')
    )
  );
  assert.ok(
    LEAF.createPlan({ ...occurrence, stage: 'Com flores' }).precautions.some((x) =>
      x.includes('abelhas')
    )
  );
  assert.ok(
    LEAF.createPlan({ ...occurrence, stage: 'Perto de colher' }).precautions.some((x) =>
      x.includes('colheita')
    )
  );
});
test('does not create automatic dilution from crop, target or severity', () => {
  for (const severity of LEAF.severities)
    assert.throws(
      () => LEAF.createPlan({ ...occurrence, mode: 'dilution', volume: 20, severity }),
      /medida de diluição/
    );
  assert.throws(() => LEAF.calculateDilution({ volume: 20, dose: 5, doseConfirmed: false }));
  assert.throws(() => LEAF.calculateDilution({ volume: 20, dose: '', doseConfirmed: true }));
});
test('arithmetic-only dilution uses an explicitly supplied instruction and final volume', () => {
  // Arbitrary arithmetic fixture, not an agricultural dose recommendation.
  const dilution = LEAF.calculateDilution({ volume: 20, dose: 4, doseConfirmed: true });
  assert.equal(dilution.concentrateML, 80);
  assert.equal(dilution.waterApproxML, 19920);
  assert.equal(dilution.doseOrigin, 'informada pelo usuário');
  assert.equal(
    LEAF.calculateDilution({ volume: 2, dose: '2,5', doseConfirmed: true }).concentrateML,
    5
  );
});
test('rejects empty, infinite, negative, unmeasurable and overflowing inputs', () => {
  for (const volume of ['', 0, -1, Infinity, NaN, 0.01, 0.15, 101, 'abc'])
    assert.throws(() => LEAF.validateVolume(volume));
  assert.equal(LEAF.validateVolume('0,1'), 0.1);
  assert.throws(() => LEAF.validateVolume(0.1, 'dilution'));
  for (const dose of ['', 0, -1, Infinity, 1000, 2000, 'abc'])
    assert.throws(() => LEAF.calculateDilution({ volume: 20, dose, doseConfirmed: true }));
  assert.throws(() => LEAF.calculateDilution({ volume: 0.5, dose: 0.001, doseConfirmed: true }));
});
test('unknown problems get observation help, never a diagnosis or a new recipe', () => {
  const plan = LEAF.createPlan({ ...occurrence, problem: 'Não sei identificar' });
  assert.ok(plan.context.observations.some((x) => x.includes('identificar')));
  assert.deepEqual(plan.concentrate, LEAF.createPlan(occurrence).concentrate);
  assert.throws(() => LEAF.createPlan({ ...occurrence, problem: 'Inventado' }));
});
test('exports retain concentration distinction, all amounts, preparation and project sources', () => {
  const text = LEAF.planText(
    LEAF.createPlan({ ...occurrence, volume: 2, notes: 'Folhas enroladas', location: 'MG' }),
    '23/10/2026'
  );
  for (const fragment of [
    '600 mL',
    '360 mL',
    '60 mL',
    '240 mL',
    '140 mL',
    'concentrado puro',
    'recipiente escuro',
    'artigo-1',
    'docs/pesquisa/',
    'Folhas enroladas',
    'MG',
  ])
    assert.ok(text.includes(fragment), fragment);
  assert.ok(!text.includes('Embrapa'));
  assert.ok(!text.includes('Calda de cebola'));
  const dilutedText = LEAF.planText(
    LEAF.createPlan({ ...occurrence, mode: 'dilution', volume: 20, dose: 4, doseConfirmed: true })
  );
  assert.match(dilutedText, /informada por você: 4 mL/);
  assert.match(dilutedText, /Concentrado LEAF: 80 mL/);
  assert.match(dilutedText, /completar até 20 L/);
});

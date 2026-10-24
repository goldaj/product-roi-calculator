const assert=require('node:assert/strict');const {calculate,defaults}=require('./logic');
const r=calculate(defaults);assert.ok(r.monthlyNet>0);assert.equal(r.cashflow.length,37);assert.equal(r.cashflow[0].value,-defaults.buildCost);assert.equal(r.cashflow[36].value,r.threeYears);assert.ok(r.payback>0);assert.equal(r.annualNet,r.monthlyNet*12-defaults.buildCost);
const zero=calculate({...defaults,volume:0,maintenance:500});assert.equal(zero.timeSavings,0);assert.equal(zero.errorSavings,0);assert.equal(zero.payback,null);assert.equal(zero.monthlyNet,-500);
const none=calculate({...defaults,automation:0});assert.equal(none.grossSavings,0);
const all=calculate({...defaults,volume:10,minutes:60,hourly:20,automation:100,adoption:100,errorRate:0,maintenance:0,buildCost:200});assert.equal(all.monthlyNet,200);assert.equal(all.payback,1);assert.equal(all.roi,1100);
console.log('ROI: 13 checks passed');

assert.equal(calculate(null).assumptions.volume,defaults.volume);assert.equal(calculate({}).assumptions.hourly,defaults.hourly);

const threshold={...defaults,volume:1,minutes:60,hourly:100,automation:100,adoption:100,errorRate:0,errorReduction:0,buildCost:1200,maintenance:500};
const boundary=calculate(threshold);
assert.equal(boundary.breakEvenVolume12m,6);
assert.equal(calculate({...threshold,volume:6}).annualNet,0);
assert.ok(calculate({...threshold,volume:5}).annualNet<0);
assert.equal(calculate({...threshold,automation:0}).breakEvenVolume12m,null);
assert.equal(calculate({...threshold,buildCost:0,maintenance:0,automation:0}).breakEvenVolume12m,0);

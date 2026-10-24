(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.RoiLogic=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 const defaults={volume:1300,minutes:7,hourly:42,automation:65,adoption:85,errorRate:3,errorCost:95,errorReduction:70,buildCost:26000,maintenance:550};
 function calculate(raw){raw=raw??{};const p={};for(const [k,v] of Object.entries(defaults)){const n=Number(raw[k]);p[k]=Number.isFinite(n)?Math.max(0,n):v;}for(const k of ['automation','adoption','errorRate','errorReduction'])p[k]=Math.min(100,p[k]);
 const eligible=p.volume*(p.automation/100)*(p.adoption/100);
 const timeSavings=eligible*p.minutes/60*p.hourly;
 // Error reduction applies only to automation-eligible cases.
 const errorSavings=eligible*p.errorRate/100*p.errorReduction/100*p.errorCost;
 const grossSavings=timeSavings+errorSavings;
 const monthlyNet=grossSavings-p.maintenance;
 const annualNet=monthlyNet*12-p.buildCost;
 const roi=p.buildCost>0?annualNet/p.buildCost*100:null;
 const payback=monthlyNet>0?p.buildCost/monthlyNet:null;
 const threeYears=monthlyNet*36-p.buildCost;
 const cashflow=Array.from({length:37},(_,month)=>({month,value:month*monthlyNet-p.buildCost}));
 return {assumptions:p,eligible,timeSavings,errorSavings,grossSavings,monthlyNet,annualNet,roi,payback,threeYears,cashflow};}
 return {defaults,calculate};
});

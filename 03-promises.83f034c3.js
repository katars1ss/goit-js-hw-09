function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var r=l("eWCmQ");const u={form:document.querySelector(".form"),input:document.querySelectorAll("label"),fieldOfDelay:document.querySelector("input[name=delay]"),fieldOfStep:document.querySelector("input[name=step]"),fieldOfAmount:document.querySelector("input[name=amount]"),submitBtn:document.querySelector("#submit-btn")};u.form.style.display="flex",u.form.style.justifyContent="start",u.form.style.alignItems="flex-end",u.submitBtn.style.marginLeft="10px",u.submitBtn.style.height="25px",u.input.forEach((e=>{e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="start",e.style.textAlign="start",e.style.marginLeft="10px"}));function s(t,o){new Promise(((e,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?e({position:`${t}`,delay:`${o}ms`}):n({position:`${t}`,delay:`${o}ms`})}),o)})).then((n=>{console.log(n),e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((n=>{console.log(n),e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}u.form.addEventListener("submit",(e=>{e.preventDefault();let t=Number(e.currentTarget.delay.value),o=Number(e.currentTarget.step.value),n=Number(e.currentTarget.amount.value);console.log("delay",t),console.log("step",o),console.log("amount",n);for(let l=0;l<n;l++)s(l+1,t),o=Number(e.currentTarget.step.value),console.log("step",o),t+=o}));
//# sourceMappingURL=03-promises.83f034c3.js.map

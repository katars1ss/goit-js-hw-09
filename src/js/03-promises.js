import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelectorAll('label'),
  fieldOfDelay: document.querySelector('input[name=delay]'),
  fieldOfStep: document.querySelector('input[name=step]'),
  fieldOfAmount: document.querySelector('input[name=amount]'),
  submitBtn: document.querySelector('#submit-btn'),
}

//------------Styles-------------//

refs.form.style.display = 'flex';
refs.form.style.justifyContent = 'start';
refs.form.style.alignItems = 'flex-end';
refs.submitBtn.style.marginLeft = '10px';
refs.submitBtn.style.height = '25px';
refs.input.forEach((input) => {
    input.style.display = 'flex';
    input.style.flexDirection = 'column';
    input.style.justifyContent = 'start';
    input.style.textAlign = 'start';
    input.style.marginLeft = '10px';
});

//-----------Program-------------//

let delay = 0,
  step = 0,
  amount = 0;

function getInputData() {  
  delay = parseInt(refs.fieldOfDelay.value);
  step = parseInt(refs.fieldOfStep.value);
  amount = parseInt(refs.fieldOfAmount.value);
  checkInputData();
}

function checkInputData() { 
  if (delay < 0 || amount <= 0) {
    Notiflix.Notify.failure("Delay and amount cannot be negative!");
    return;
  };
  console.log('delay', delay);
  console.log('step * amount', step * amount);
  if (delay < -step * amount) {
    Notiflix.Notify.failure("Delay goes negative!");
    return;
  };
  initPromises();
};

function initPromises() { 
  let currentDelay = delay;

  for (let i = 0; i < amount; i++) { 
    createPromise(i + 1, currentDelay)
    currentDelay += step;
  };
};

function createPromise(position, delay) {
  const promise = new Promise((resolv, reject) => { 
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolv({position: `${position}`, delay: `${delay}ms`});
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

      } else {
        // Reject
        reject({position: `${position}`, delay: `${delay}ms`});
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      
      };
}, delay);
  });
  
  promise.then(result => {
    console.log(result);
  });
  promise.catch (error => {
    console.log(error);
  });
  
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  getInputData();
  console.log("event");
});

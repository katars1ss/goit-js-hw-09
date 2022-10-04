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

const handleSubmit = (evt) => {
  evt.preventDefault();
  let delay = Number(evt.currentTarget.delay.value),
      step = Number(evt.currentTarget.step.value),
      amount = Number(evt.currentTarget.amount.value);
  console.log('delay', delay);
  console.log('step', step);
  console.log('amount', amount);

    for (let i = 0; i < amount; i++) {
      createPromise(i + 1, delay);
      step = Number(evt.currentTarget.step.value);
      delay += step;
    };
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => { 
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position: `${position}`, delay: `${delay}ms`});
      } else {
        reject({position: `${position}`, delay: `${delay}ms`});
      };
    }, delay);
  });

  promise
    .then(result => {
      console.log(result);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};

refs.form.addEventListener("submit", handleSubmit);
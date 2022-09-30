

const refs = {
    body: document.querySelector('body'),
    container: document.querySelector('.container'),
    controllBtns: document.querySelector('.control-btns'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}
let changeColor;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.container.style.display = 'flex';
refs.container.style.alignItems = 'center';
refs.container.style.justifyContent = 'center';
refs.container.style.minHeight = '100vh';
refs.startBtn.style.height = '35px';
refs.startBtn.style.width = '70px';
refs.stopBtn.style.height = '35px';
refs.stopBtn.style.width = '70px';

refs.startBtn.addEventListener('click', () => { changeColor = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
}, 1000);
    refs.startBtn.style.opacity = '0.33';
    refs.stopBtn.style.opacity = '1';
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(changeColor);
    refs.stopBtn.style.opacity = '0.33';
    refs.startBtn.style.opacity = '1';
});
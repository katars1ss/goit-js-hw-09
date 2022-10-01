import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    dateInput: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    container: document.querySelector('.container'),
    timer: document.querySelector('.timer'),
    fields: document.querySelectorAll('.field'),
    values: document.querySelectorAll('.value'),
    labels: document.querySelectorAll('.label'),
    seconds: document.querySelector('[data-seconds]'),
    minutes: document.querySelector('[data-minutes]'),
    hours: document.querySelector('[data-hours]'),
    days: document.querySelector('[data-days]'),
};

//-----styles------//

refs.container.style.display = 'inline-block';

refs.dateInput.style.height = '28px';

//----------startBtn----------//

refs.startBtn.style.opacity = '0.55';
refs.startBtn.style.width = '60px';
refs.startBtn.style.height = '28px';
refs.startBtn.style.fontWeight = '600';

//----------timer----------//

refs.timer.style.display = 'flex';
refs.timer.style.alignItems = 'center';
refs.timer.style.justifyContent = 'space-between';
refs.timer.style.marginTop = '20px';

refs.fields.forEach((field) => {
    field.style.display = 'flex';
    field.style.flexDirection = 'column';
    field.style.justifyContent = 'start';
    field.style.textAlign = 'center';
});
refs.values.forEach((value) => {
    value.style.fontWeight = '400';
    value.style.fontSize = '40px';
});
refs.labels.forEach((label) => {
    label.style.fontWeight = '500';
    label.style.fontSize = '12px';
    label.style.textTransform = 'uppercase';
});

//---------functional---------//

let selectedDate = 0;
    deltaTime = 0;
    startTime = 0;
    currentTime = 0;

function checkTime() { 
    startTime = selectedDate.getTime();
    currentTime = Date.now();
    deltaTime = startTime - currentTime;
    console.log('deltaTime', deltaTime);
    if (startTime <= currentTime) {
        Notiflix.Notify.failure('Please choose a date in the future');
        return
    };
    refs.startBtn.style.opacity = '1';
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];
        checkTime()
    },
};
flatpickr(refs.dateInput, options);
const flatpickr = require("flatpickr");

const timer = {
    isActive: false,

    start() {
        if (this.isActive || deltaTime < 0) {
            return;
        };


        let timer = setInterval(() => {
            console.log(Math.round(deltaTime / 1000))
            deltaTime -= 1000;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            if (Math.round(deltaTime / 1000) == 0) {
                clearInterval(timer);
                Notiflix.Notify.success('Time is up!');
                refs.startBtn.style.opacity = '0.55';
                return;
            };
            updateTimerValue({ days, hours, minutes, seconds })
        }, 1000);
    },
};
refs.startBtn.addEventListener('click', () => {
    timer.start();
});

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function addLeadingZeroDays(value) {
    return String(value).padStart(3);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let days = Math.floor(ms / day);
    if (days.lenght >= 3) {
        days = addLeadingZeroDays(Math.floor(ms / day));
    };
    days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};

function updateTimerValue({ days, hours, minutes, seconds }) {
    refs.seconds.textContent = seconds;
    refs.minutes.textContent = minutes;
    refs.hours.textContent = hours;
    refs.days.textContent = days;
}
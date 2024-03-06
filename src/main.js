const DATE_TARGET = new Date('09/07/2024');
// DOM for render
const SPAN_DAYS = document.querySelector('#days');
const SPAN_HOURS = document.querySelector('#hours');
const SPAN_MINUTES = document.querySelector('#minutes');

const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET.getTime() - NOW.getTime();
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);

    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS.toString();
    SPAN_HOURS.textContent = REMAINING_HOURS.toString();
    SPAN_MINUTES.textContent = REMAINING_MINUTES.toString();
}

//===
// INIT
//===
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

const mainContainer = document.getElementById('main-container');
const poemContainer = document.getElementById('poem-container');
const clockContainer = document.getElementById('clock-container');
const ceremonyContainer = document.getElementById('ceremony-container');
const celebrationContainer = document.getElementById('celebration-container');
const stepperContainer = document.getElementById('stepper-container');

onscroll = (event) => {
    const scrollHeight = window.scrollY + window.innerHeight;
    if(poemContainer.offsetTop + (poemContainer.clientHeight /2) < scrollHeight){
        document.getElementById('poem-animated').classList.add('animate__animated', 'animate__fadeIn')
        document.getElementById('poem-animated').classList.remove('opacity-0')
    }
    if(clockContainer.offsetTop + (clockContainer.clientHeight /2) < scrollHeight){
        for(let i = 1; i <= 3;i++){
            document.getElementsByClassName(`clock-item-${i}`).item(0).classList.add('animate__animated', 'animate__fadeIn', `animate__delay-${i-1}s`)
            document.getElementsByClassName(`clock-item-${i}`).item(0).classList.remove('opacity-0')
            document.getElementsByClassName(`clock-item-${i}`).item(1).classList.add('animate__animated', 'animate__fadeInDown', `animate__delay-${i+2}s`)
            document.getElementsByClassName(`clock-item-${i}`).item(1).classList.remove('opacity-0')
        }
    }
    if(ceremonyContainer.offsetTop + (ceremonyContainer.clientHeight /2) < scrollHeight){
        document.getElementById('ceremony-img').classList.add('animate__animated', 'animate__fadeIn')
        document.getElementById('ceremony-title').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s')
        document.getElementById('ceremony-place').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
        document.getElementById('ceremony-address').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-3s')
        document.getElementById('ceremony-date').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-4s')
        document.getElementById('ceremony-maps').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-5s')
        document.getElementById('ceremony-img').classList.remove('opacity-0')
        document.getElementById('ceremony-title').classList.remove('opacity-0')
        document.getElementById('ceremony-place').classList.remove('opacity-0')
        document.getElementById('ceremony-address').classList.remove('opacity-0')
        document.getElementById('ceremony-date').classList.remove('opacity-0')
        document.getElementById('ceremony-maps').classList.remove('opacity-0')
    }

    if(celebrationContainer.offsetTop + (celebrationContainer.clientHeight /2) < scrollHeight){
        document.getElementById('celebration-img').classList.add('animate__animated', 'animate__fadeIn')
        document.getElementById('celebration-title').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s')
        document.getElementById('celebration-place').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
        document.getElementById('celebration-address').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-3s')
        document.getElementById('celebration-date').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-4s')
        document.getElementById('celebration-maps').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-5s')
        document.getElementById('celebration-img').classList.remove('opacity-0')
        document.getElementById('celebration-title').classList.remove('opacity-0')
        document.getElementById('celebration-place').classList.remove('opacity-0')
        document.getElementById('celebration-address').classList.remove('opacity-0')
        document.getElementById('celebration-date').classList.remove('opacity-0')
        document.getElementById('celebration-maps').classList.remove('opacity-0')
    }

    if(stepperContainer.offsetTop + (stepperContainer.clientHeight /2) < scrollHeight){
        document.getElementById('stepper').classList.add('animate__animated', 'animate__fadeIn')
        document.getElementById('stepper').classList.remove('opacity-0')
    }

};

const audio = new Audio("assets/audio/wedding.mp3");
if(window.confirm("Esta página contiene música, ¿Quiere reproducirla?")){
    audio.play()
    init()
}else{
    init()
}

// init()

function init(){
    document.getElementById('main-date').classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s')
    document.getElementById('main-date').classList.remove('opacity-0')
    document.getElementById('main-title').classList.add('animate__animated', 'animate__fadeIn', 'animate__slower')
    document.getElementById('main-title').classList.remove('opacity-0')
    document.getElementById('main-edict').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    document.getElementById('main-edict').classList.remove('opacity-0')
}
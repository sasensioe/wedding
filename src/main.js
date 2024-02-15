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

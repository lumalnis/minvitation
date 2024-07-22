/*CUENTA REGRESIVA https://www.youtube.com/watch?v=ZbF5qomB8XM PROBAR ESTAA!!!*/
document.addEventListener('DOMContentLoaded', () => {
    //CAMBIAR FECHA SEGUN CORRESPONDA
    const DATE_TARGET = new Date("07/22/2024 7:30 PM");
    //DOM for render
    const SPAN_DAYS = document.querySelector("span#days");
    const SPAN_HOURS = document.querySelector("span#hours");
    const SPAN_MINUTES = document.querySelector("span#minutes");
    const SPAN_SECONDS = document.querySelector("span#seconds");
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

    function updateCoutdown() {
        //Calcs
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        //Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;

    }
    updateCoutdown();
    setInterval(updateCoutdown, MILLISECONDS_OF_A_SECOND);
});

/*ARMAR QUE CAMBIE EN SINGULAR O PLURAL... HORA/HORA Y QUE CUANDO LLEGUE A CERO Q SE APAGUE O TIRA UNA ANIMACION*/

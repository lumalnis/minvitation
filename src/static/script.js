const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000;
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    };
};

const countdown = (deadline, daysElem, hoursElem, minutesElem, secondsElem, messageT, daysT, hoursT, minutesT, secondsT) => {
    const daysEl = document.getElementById(daysElem);
    const hoursEl = document.getElementById(hoursElem);
    const minutesEl = document.getElementById(minutesElem);
    const secondsEl = document.getElementById(secondsElem);
    const messageEl = document.getElementById(messageT);
    const overEls = document.querySelectorAll('.over');
    const daysTx = document.getElementById(daysT);
    const hoursTx = document.getElementById(hoursT);
    const minutesTx = document.getElementById(minutesT);
    const secondsTx = document.getElementById(secondsT);

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        //el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
        //backticks teclado en sp = Alt+96 `` or  AltGr +  } + espacio 

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            overEls.forEach(el => el.style.display = 'none');
            const now = new Date();
            const eventDate = new Date(deadline);

            if (now.toDateString() === eventDate.toDateString()) {
                //ENGLISH
                /*
                    messageEl.innerHTML = `It's Today!`;
                } else {
                    messageEl.innerHTML = `The event is over.`;
                }
                */
                //SPANISH
                messageEl.innerHTML = `¡Es Hoy!`;
            } else {
                messageEl.innerHTML = `El evento finalizó.`;
            }
            
        } else {

            daysEl.innerHTML = t.remainDays;
            hoursEl.innerHTML = t.remainHours;
            minutesEl.innerHTML = t.remainMinutes;
            secondsEl.innerHTML = t.remainSeconds;

            //SINGULAR OR PLURAL
            //ENGLISH
            /*
            daysTx.innerHTML = t.remainDays === 1 ? `Day` : 'Days';
            hoursTx.innerHTML = t.remainHours === 1 ? `Hour` : 'Hours';
            minutesTx.innerHTML = t.remainMinutes === 1 ? `Minute` : 'Minutes';
            secondsTx.innerHTML = t.remainSeconds === 1 ? `Second` : 'Seconds';
            */
            //SPANISH
            daysTx.innerHTML = t.remainDays === 1 ? `Día` : 'Días';
            hoursTx.innerHTML = t.remainHours === 1 ? `Hora` : 'Horas';
            minutesTx.innerHTML = t.remainMinutes === 1 ? `Minuto` : 'Minutos';
            secondsTx.innerHTML = t.remainSeconds === 1 ? `Segundo` : 'Segundos';

        }
    }, 1000)
};

countdown('Jul 21 2024 14:05:50 GMT-0300', 'days', "hours", "minutes", "seconds", 'message', 'daysText', 'hoursText', 'minutesText', 'secondsText');

/*FORMATO (Jul 24 2024 10:32:53 GMT-0300) GMT-0300 es hora Argentina*/



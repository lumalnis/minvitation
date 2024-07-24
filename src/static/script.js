/**
@param {string} selector
*/

const hideElements = selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => el.style.display = 'none');
};


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

const countdown = (deadline, daysElem, hoursElem, minutesElem, secondsElem, messageT, daysT, hoursT, minutesT, secondsT, errorT) => {
    const daysEl = document.getElementById(daysElem);
    const hoursEl = document.getElementById(hoursElem);
    const minutesEl = document.getElementById(minutesElem);
    const secondsEl = document.getElementById(secondsElem);
    const messageEl = document.getElementById(messageT);
    //const overEls = document.querySelectorAll('.over');
    const daysTx = document.getElementById(daysT);
    const hoursTx = document.getElementById(hoursT);
    const minutesTx = document.getElementById(minutesT);
    const secondsTx = document.getElementById(secondsT);
    const errorEl = document.getElementById(errorT);

    //Validación de fecha
    const deadlineDate = new Date(deadline);
    if (isNaN(deadlineDate.getTime())) {
        //ENGLISH
        /*
         if (errorEl) { 
             errorEl.innerHTML = "Invalid Date.";
             hideElements('.over');}
         */
        //SPANISH
        if (errorEl) {
            errorEl.innerHTML = "Fecha inválida.";
            hideElements('.over');
        }
    }

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        //el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
        //backticks teclado en sp = Alt+96 `` or  AltGr +  } + espacio 

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            // overEls.forEach(el => el.style.display = 'none');
            hideElements('.over');
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

countdown('Jul 25 2024 14:05:50 GMT-0300', 'days', "hours", "minutes", "seconds", 'message', 'daysText', 'hoursText', 'minutesText', 'secondsText', 'errorText');

//FORMATO (Jul 24 2024 10:32:53 GMT-0300) GMT-0300 es hora Argentina

//REALIZAR DOS SCRIPTS UNO EN SPANISH OTRO EN ENGLISH Y VER SI PUEO AGREGAR TRADUCIR PAGINA


/*NOTES*/
document.addEventListener("DOMContentLoaded", function () {
    let createBox = document.getElementsByClassName('createBox')[0];
    let notes = document.getElementsByClassName('notes')[0];
    let input = document.getElementById('userInput');
    let i = 0;

    //mover de a paginas
    //PAGINA let currentPage = 0;
    //PAGINA let notesPerPage = 5;

    let startNoteIndex = 0;
    const notesPerPage = 5;

    input.addEventListener('keydown', content);

    document.getElementById("create").addEventListener("click", function () {
        createBox.style.display = "block";
        input.focus();
    });

    document.getElementById("prev").addEventListener("click", function () {
        //PAGINA               currentPage--;
        //POR NOTA currentNoteIndex--;
        startNoteIndex--;
        updateNotesVisibility();
    });

    document.getElementById("next").addEventListener("click", function () {
        //PAGINA         currentPage++;
        //POR NOTA currentNoteIndex++;
        startNoteIndex++;
        updateNotesVisibility();
    });

    function content(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            divStyle(input.value);
            input.value = "";
            createBox.style.display = "none";
        }
    }

    function color() {
        let randomColors = ["#c2ff3d", "#ffd256", "#0b0b0b"];
        if (i > randomColors.length - 1) { i = 0; }
        return randomColors[i++];
    }

    function divStyle(text) {
        let div = document.createElement("div");
        div.className = 'note';
        div.innerHTML = '<div class="details"><h3>' + text + '</h3></div>';

        //para eliminar las notes
        //div.addEventListener("dblclick", function() { div.remove(); });

        div.setAttribute('style', 'background:' + color() + ';');
        notes.appendChild(div);
        updateNotesVisibility();
    }

    function updateNotesVisibility() {
        let allNotes = notes.getElementsByClassName('note');
        let totalNotes = allNotes.length;
        //PAGINA         let start = currentPage * notesPerPage;
        //PAGINA         let end = start + notesPerPage;
       
        //muestra hasta X notas |
        for (let j = 0; j < totalNotes; j++) {
            //PAGINA if (j >= start && j < end) {
            //POR NOTA if(j === currentNoteIndex){
            if (j >= startNoteIndex && j < startNoteIndex + notesPerPage) {
                allNotes[j].style.display = 'block';
            } else {
                allNotes[j].style.display = 'none';
            }
        }
        //PAGINA         document.getElementById("prev").disabled = currentPage === 0;
        //PAGINA         document.getElementById("next").disabled = end >= totalNotes;


        //POR NOTA document.getElementById("prev").disabled = currentNoteIndex === 0;
        //POR NOTA document.getElementById("next").disabled = currentNoteIndex === totalNotes - 1;
        document.getElementById("prev").disabled = startNoteIndex === 0;
        document.getElementById("next").disabled = startNoteIndex + notesPerPage >= totalNotes;
    }
});

/*puedo armar que para desktop pasen por pagina completa y mobile y ipad pasen de a una... o que segun el ancho muestre cierta cantidad de notas*/
//VER COMO SUBIR LAS NOTAS A SHEETS
//PENSAR EN UN BACKEND PARA MANEJAR LOS EXCELS Y DATOS PARA QUE NO SE PIERDAN .... 
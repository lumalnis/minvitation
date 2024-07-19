//SCRIPT PARA MANDAR A EXCEL Y MOSTRAR MENSAJE SATISFACTORIO Y NO QUE SE VAYA A OTRA PAGINA
const scriptURL = 'https://script.google.com/macros/s/AKfycbws4sQhfFpaEE2UTjsphgFMljLOklLj_c8wLU5-dwnwd4AFJqVnZ_SsXYJXnH6ef4Hnwg/exec'

const form = document.forms['invitados']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Confirmado. Te esperamos!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

//ver como hacerlo para diferentes planillas

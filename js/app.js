//variables
const email = document.querySelector('#email');
const affair = document.querySelector('#asunto');
const message = document.querySelector('#mensaje');
const btnSend = document.querySelector('#enviar');
const formData = document.querySelector('#enviar-mail');
const resetBtn = document.querySelector('#resetBtn');

//funciones
const eventListenners = () => {
  //Inicio de la app y deshabilita el btn enviar.(submit)
  window.addEventListener('load', initApp);

  //campos del form.
  email.addEventListener('blur', validateField);
  affair.addEventListener('blur', validateField);
  message.addEventListener('blur', validateField);

  //boton enviar (submit).
  formData.addEventListener('submit', sendEmail);

  //Resetear formulario
  resetBtn.addEventListener('click', resetForm);
}

//validar los campos
const validateField = (e) => {

  //Validar longitud del texto y que no esté vacio.
  validateLenght(e.target);

  //validar el email 
  if (e.target.type === 'email') {
    validateEmail(e.target);
  }

  const errors = document.querySelectorAll('.error');

  if (email.value !== '' && message.value !== '' && affair.value !== '') {
    if (errors.length === 0) {
      btnSend.disabled = false;
    }
  }

}

//Enviar el email al correo
const sendEmail = (e) => {
  e.preventDefault();

  //Spinner al precionar Enviar
  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';

  //Crear gif que envia email
  const sent = document.createElement('img');
  sent.src = 'img/mail.gif';
  sent.style.display = 'block';

  //Ocultar Spinner y mostrar gif de enviado.
  setTimeout(() => {
    spinnerGif.style.display = 'none';

    document.querySelector('#loaders').appendChild(sent);

    setTimeout(() => {
      sent.remove();
      formData.reset();

    }, 5000);

  }, 3000);
}

//Reset formulario
const resetForm = (e) => {
  e.preventDefault();
  formData.reset();
}

//validar longitud en los campos del form
const validateLenght = (field) => {

  if (field.value.length > 0) {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }

}

//validar solo el campo email
const validateEmail = (field) => {
  const message = field.value;

  if (message.indexOf('@') !== -1) {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }
}

const initApp = () => {
  //Deshabilitar el envio
  btnSend.disabled = true;

}

//listenners
eventListenners();

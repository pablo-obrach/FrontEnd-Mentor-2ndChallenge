//TODO:CREAR EL MODAL 👌
//TODO:LOGICA PARA ENVIO DEL INPUT EMAIL 👌
//TODO:BOTON PARA CERRAR EL MODAL 👌

const modalContainer = document.getElementById("modalContainer");
const formNews = document.getElementById("formNews");
const email = document.getElementById("email");
const btnSend = document.getElementById("btnSend");
const warnings = document.getElementById("warnings");

formNews.addEventListener("submit", (e) => {
  e.preventDefault();
  let warningMessage = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail.test(email.value)) {
    warningMessage += "Valid email requierd";
    entrar = true;
  }

  if (entrar) {
    warnings.innerHTML = warningMessage;
    email.classList.add("warnings-colors");
    email.classList.add("place-holder");
  } else {
    warnings.innerHTML = "";
    email.classList.remove("warnings-colors");
    email.classList.remove("place-holder");
    createModal();
  }
});

function createModal() {
  modalContainer.innerHTML = "";
  const modalContent = document.createElement("div");
  modalContent.className = "modal__container__content";
  modalContent.innerHTML = `
  <img class="modal__content__image" src="./assets/images/icon-success.svg" alt="icon-success">
  <h2 class="modal__content__title">Thanks for subscribing!</h2>
  <p class="modal__content__paragraph">A confirmation email has been sent to <span>ash@loremcompany.com</span>.
  Please open it and click the button inside to confirm your subscription. 
  `;
  modalContainer.append(modalContent);
  modalContainer.classList.add("modal__enable");

  const btnCerrarModal = document.createElement("button");
  btnCerrarModal.className = "modal__content__btn-cerrar";
  btnCerrarModal.innerText = "Dismiss message";

  modalContent.append(btnCerrarModal);

  btnCerrarModal.addEventListener("click", () => {
    modalContainer.classList.remove("modal__enable");
  });
}

function cleanInput() {
  email.classList.remove("warnings-colors");
  email.classList.remove("place-holder");
}
email.addEventListener("click", () => {
  cleanInput();
  warnings.innerHTML = "";
});

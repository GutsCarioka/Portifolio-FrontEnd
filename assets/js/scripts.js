const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") rootHtml.setAttribute("data-theme", "light");
  else rootHtml.setAttribute("data-theme", "dark");

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}
toggleTheme.addEventListener("click", changeTheme);

class formSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }
  displaySucess() {
    this.form.innerHTML = this.settings.sucess;
  }
  displayError() {
    this.form.innerHTML = this.settings.error;
  }
  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }
  onSubmission(event) {
    event.preventDefault();
    event.target.disable = true;
    event.target.innerText = "Enviando...";
  }
  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "applcation/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySucess();
    } catch {
      this.displayError();
      throw new Error("Erro ao enviar o formulário");
    }
  }
  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}
const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  sucess: "<h1 class = 'success'>Mensagem enviada com sucesso!</h1>",
  error: "<h1 class = 'error'>Ocorreu um erro ao enviar a mensagem.</h1>",
});
formSubmit.init();

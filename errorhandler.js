export class ErrorHandler {
  constructor() {
    this.alertContainer = document.getElementById('alert-container');
  }

  showError(errorType) {
    const errorMessages = {
      error1: 'Por favor solo ingrese números!',
      error2: 'Diligencie los datos',
      error3: 'Los lados deben ser iguales',
    };

    const alertHtml = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>${errorMessages[errorType]}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;

    document.getElementById('alert-container').innerHTML = alertHtml;
  }
}

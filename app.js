import { ThemeManager } from './themeManager.js';
import { ValidateData } from './validate.js';
import { ErrorHandler } from './errorhandler.js';
import { Square, Triangle, Circle } from './figures.js';

document.addEventListener('DOMContentLoaded', () => {
  const themeManager = new ThemeManager();
});
validateData();

//variables desde el html
const lado1 = document.getElementById('lado1');
const lado2 = document.getElementById('lado2');
const base = document.getElementById('base');
const altura = document.getElementById('altura');
const radio = document.getElementById('radio');

//variables para los botones
const buttonSquare = document.getElementById('btn-calculate-square');
const buttonTriangle = document.getElementById('btn-calculate-triangle');
const buttonCircle = document.getElementById('btn-calculate-circle');

//función para mostrar los errores para cada figura
const square = new Square();
const triangle = new Triangle();
const circle = new Circle();

buttonSquare.addEventListener('click', () => {
  if (ValidateData.isEmpty(lado1.value) || ValidateData.isEmpty(lado2.value)) {
    alertError('error2');
  } else if (ValidateData.areEqualSide(lado1.value, lado2.value)) {
    alertError('error3');
  } else if (
    ValidateData.isValidNumber(lado1.value) ||
    ValidateData.isValidNumber(lado2.value)
  ) {
    alertError('error1');
  } else {
    square.calculateResult();
    square.calculateResult(lado1.value, lado2.value);
  }
});
buttonTriangle.addEventListener('click', () => {
  if (ValidateData.isEmpty(base.value) || ValidateData.isEmpty(altura.value)) {
    alertError('error2');
  } else if (
    ValidateData.isValidNumber(base.value) ||
    ValidateData.isValidNumber(altura.value)
  ) {
    alertError('error1');
  } else {
    triangle.calculateResult();
    triangle.calculateResult(base.value, altura.value);
  }
});
buttonCircle.addEventListener('click', () => {
  if (ValidateData.isEmpty(radio.value)) {
    alertError('error2');
  } else if (ValidateData.isValidNumber(radio.value)) {
    alertError('error1');
  } else {
    circle.calculateResult();
    circle.calculateResult(radio.value);
  }
});

function validateData() {
  const formularios = document.querySelectorAll('#formulario');
  formularios.forEach(formulario => {
    formulario.addEventListener('input', event => {
      const target = event.target;
      const value = target.value;
      if (ValidateData.isValidNumber(value)) {
        alertError('error1');
        return false;
      } else if (ValidateData.isEmpty(value)) {
        alertError('error2');
        return false;
      } else {
        return true;
      }
    });
  });
}

// mensajes de error

const errorHandler = new ErrorHandler();
function alertError(tipoError) {
  switch (tipoError) {
    case 'error1':
      errorHandler.showError('error1');
      break;
    case 'error2':
      errorHandler.showError('error2');
      break;
    case 'error3':
      errorHandler.showError('error3');
      break;
  }
}

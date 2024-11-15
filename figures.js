export class Square {
  constructor() {
    this.lado1 = document.getElementById('lado1');
    this.lado2 = document.getElementById('lado2');
  }
  calculateResult() {
    const lado1Value = parseInt(this.lado1.value);
    const lado2Value = parseInt(this.lado2.value);
    const result = lado1Value * lado2Value;
    document.getElementById('result-square').innerHTML = result.toString();
  }
}

export class Triangle {
  constructor() {
    this.base = document.getElementById('base');
    this.altura = document.getElementById('altura');
  }

  calculateResult() {
    const lado1Value = parseInt(this.base.value);
    const lado2Value = parseInt(this.altura.value);
    const result = (lado1Value * lado2Value) / 2;
    document.getElementById('result-triangle').innerHTML = result.toString();
  }
}
export class Circle {
  constructor() {
    this.radio = document.getElementById('radio');
  }

  calculateResult() {
    const lado1Value = parseInt(this.radio.value);
    const resultBruto = Math.PI * lado1Value ** 2;
    const result = resultBruto.toFixed(2);
    document.getElementById('result-circle').innerHTML = result.toString();
  }
}

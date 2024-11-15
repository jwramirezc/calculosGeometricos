export class ValidateData {
  //validando que sea datos numéricos
  static isValidNumber(value) {
    return !/^\d+(?:\.\d+)?$/.test(value);
  }

  static areEqualSide(side1, side2) {
    return side1 !== side2;
  }

  static isEmpty(value) {
    return value === '';
  }
}

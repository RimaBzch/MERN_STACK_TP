export class MathService {
    public calculate(number1: number, number2: number, operation: string): number {
      if (isNaN(number1) || isNaN(number2)) {
        throw new Error('Les deux nombres doivent être de type number.');
      }
  
      switch (operation) {
        case 'add':
          return number1 + number2;
        case 'minus':
          return number1 - number2;
        case 'div':
          if (number2 === 0) {
            throw new Error('Le quotient doit être différent de 0!');
          }
          return number1 / number2;
        case 'multiply':
          return number1 * number2;
        default:
          throw new Error(
            'Opération invalide. Les opérations valides sont add, minus, div et multiply.'
          );
      }
    }
  }
  
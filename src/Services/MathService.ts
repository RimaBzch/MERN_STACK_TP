export class MathService {
    public calculate(nombre1: number, nombre2: number, operation: string): number {
      if (isNaN(nombre1) || isNaN(nombre2)) {
        throw new Error('Les deux nombres doivent être des nombres.');
      }
  
      switch (operation) {
        case 'add':
          return nombre1 + nombre2;
        case 'minus':
          return nombre1 - nombre2;
        case 'div':
          if (nombre2 === 0) {
            throw new Error('Le quotient doit être différent de 0!');
          }
          return nombre1 / nombre2;
        case 'multiply':
          return nombre1 * nombre2;
        default:
          throw new Error(
            'Opération invalide. Les opérations valides sont add, minus, div et multiply.'
          );
      }
    }
  }
  
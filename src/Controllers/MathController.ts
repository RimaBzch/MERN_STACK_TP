import { Request, Response } from 'express';
import { MathService } from '../Services/MathService';

export class MathController {
  private mathService: MathService;

  constructor(mathService: MathService) {
    this.mathService = mathService;
  }

  public calculate(req: Request, res: Response) {
    try {
      const number1 = Number(req.query.number1);
      const number2 = Number(req.query.number2);
      const operation = String(req.query.operation);

      const result = this.mathService.calculate(number1, number2, operation);

      res.json({
        operation,
        number1,
        number2,
        resultat: result,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          error: error.message
        });
      } else {
        res.status(400).json({
          error: "Une erreur inconnue s'est produite."
        });
      }
    }
  }
}

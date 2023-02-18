import { Request, Response } from 'express';
import { MathService } from '../Services/MathService';

export class MathController {
  private mathService: MathService;

  constructor(mathService: MathService) {
    this.mathService = mathService;
  }

  public calculate(req: Request, res: Response) {
    try {
      const nombre1 = Number(req.query.nombre1);
      const nombre2 = Number(req.query.nombre2);
      const operation = String(req.query.operation);

      const result = this.mathService.calculate(nombre1, nombre2, operation);

      res.json({
        operation,
        nombre1,
        nombre2,
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

import { Request, Response, NextFunction } from 'express';

export class Validator {
  constructor() {}

  public validate(req: Request, res: Response, next: NextFunction) {
    const number1 = Number(req.query.number1);
    const number2 = Number(req.query.number2);
    const operation = String(req.query.operation);
  // console.log(operation, number1, number2);

    if (isNaN(number1) || isNaN(number2)) {
      res
        .status(400)
        .json({ error: 'Les deux nombres doivent être de type number.' });
      return;
    }
    if (operation == 'div' && number2 == 0) {
      res.status(400).json({ error: 'Le quotient doit être différent de 0!' });
      return;
    }
    next();
  
};}
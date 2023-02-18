import { Request, Response, NextFunction } from 'express';

export const validator = (req: Request, res: Response, next: NextFunction) => {
  const nombre1 = Number(req.query.nombre1);
  const nombre2 = Number(req.query.nombre2);
  const operation = String(req.query.operation);

  if (isNaN(nombre1) || isNaN(nombre2)) {
    res
      .status(400)
      .json({ error: 'Les deux nombres doivent être des nombres.' });
    return;
  }
  if (operation == 'div' && nombre2 == 0) {
    res.status(400).json({ error: 'Le quotient doit être different de 0!' });
    return;
  }
  next();
};

import express, { Request, Response, NextFunction } from 'express';

interface OperationResult {
  operation: string;
  nombre1: number;
  nombre2: number;
  resultat: number;
}

const app = express();
app.use(express.json());

const validator = (req: Request, res: Response, next: NextFunction) => {
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

const calculator = (req: Request, res: Response, next: NextFunction) => {
  const nombre1 = Number(req.query.nombre1);
  const nombre2 = Number(req.query.nombre2);
  const operation = String(req.query.operation);

  let resultat: number;

  switch (operation) {
    case 'add':
      resultat = nombre1 + nombre2;
      break;
    case 'minus':
      resultat = nombre1 - nombre2;
      break;
    case 'div':
      resultat = nombre1 / nombre2;
      break;
    case 'multiply':
      resultat = nombre1 * nombre2;
      break;
    default:
      res.status(400).json({
        error: 'Opération invalide. Les opérations valides sont add, minus, div et multiply.',
      });
      return;
  }

  res.locals.operationResult = {
    operation,
    nombre1,
    nombre2,
    resultat,
  };

  next();
};

const sendResult = (req: Request, res: Response) => {
  const operationResult = res.locals.operationResult as OperationResult;
  res.json(operationResult);
};

app.get('/operation', validator, calculator, sendResult);

app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000.');
});

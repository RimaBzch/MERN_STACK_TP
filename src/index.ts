import express from 'express';
import { MathController } from './Controllers/mathController';
import { MathService } from './Services/MathService'
import { validator } from './Middlewares/validator';

const app = express();
const mathService = new MathService();
const mathController = new MathController(mathService);

app.use(express.json());

app.get('/operation', validator, mathController.calculate.bind(mathController));

app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000.');
});

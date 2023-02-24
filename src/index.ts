import express from 'express';
import { MathController } from './Controllers/MathController';
import { MathService } from './Services/MathService'
import { Validator } from './Middlewares/Validator';

const app = express();
const mathService = new MathService();
const mathController = new MathController(mathService);
const validator = new Validator();

app.use(express.json());

app.get('/operation', validator.validate, mathController.calculate.bind(mathController));

app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000.');
});

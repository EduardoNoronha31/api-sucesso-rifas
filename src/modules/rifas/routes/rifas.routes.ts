import { Router } from 'express';
import RifasController from '../controllers/RifasController';

const rifasRouter = Router();
const rifasController = new RifasController();

rifasRouter.get('/', rifasController.index);
rifasRouter.get('/:id', rifasController.show);
rifasRouter.post('/', rifasController.create);
rifasRouter.put('/:id', rifasController.update);
rifasRouter.delete('/:id', rifasController.delete);

export default rifasRouter;

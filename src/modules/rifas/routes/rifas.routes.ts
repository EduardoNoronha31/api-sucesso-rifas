import { Router } from 'express';
import RifasController from '../controllers/RifasController';
import { celebrate, Joi, Segments } from 'celebrate';

const rifasRouter = Router();
const rifasController = new RifasController();

rifasRouter.get('/', rifasController.index);

rifasRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  rifasController.show,
);

rifasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
  }),
  rifasController.create,
);

rifasRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  rifasController.update,
);

rifasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  rifasController.delete,
);

export default rifasRouter;

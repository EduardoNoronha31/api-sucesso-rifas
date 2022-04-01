import { Router } from 'express';
import rifasRouter from '@modules/rifas/routes/rifas.routes';

const routes = Router();
routes.use('/rifas', rifasRouter)

export default routes;

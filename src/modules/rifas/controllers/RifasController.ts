import { Request, Response } from 'express';
import CreateRifaService from '../typeorm/services/CreateRifaService';
import DeleteRifaService from '../typeorm/services/DeleteRifaService';
import ListRifaService from '../typeorm/services/ListRifaService';
import ShowRifaService from '../typeorm/services/ShowRifaService';
import UpdateRifaService from '../typeorm/services/UpdateRifaService';

class RifasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRifas = new ListRifaService();
    const rifas = await listRifas.execute();
    return response.json(rifas);
  }
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showRifa = new ShowRifaService();
    const rifa = await showRifa.execute({ id });
    return response.json(rifa);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const createRifa = new CreateRifaService();

    const rifa = await createRifa.execute({
      name,
      price,
      quantity,
    });

    return response.json(rifa);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const { id } = request.params;
    const updateRifa = new UpdateRifaService();

    const rifa = await updateRifa.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(rifa);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteRifa = new DeleteRifaService();
    await deleteRifa.execute({ id: id });
    return response.json([]);
  }
}

export default RifasController;

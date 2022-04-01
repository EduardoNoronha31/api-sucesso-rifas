import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Rifa from '../entities/Rifa';
import { RifaRepository } from '../repositories/RifasRepository';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class UpdateRifaService {
  public async execute({ id, name, price, quantity }: IRequest): Promise<Rifa> {
    const rifasRepository = getCustomRepository(RifaRepository);
    const rifa = await rifasRepository.findOne(id);

    if (!rifa) {
      throw new AppError('Product not found!');
    }

    const rifaExists = await rifasRepository.findByName(name);

    if (rifaExists && name !== rifa.name) {
      throw new AppError('There is already one product with this name!');
    }

    rifa.name = name;
    rifa.price = price;
    rifa.quantity = quantity;
    await rifasRepository.save(rifa);
    return rifa;
  }
}

export default UpdateRifaService;

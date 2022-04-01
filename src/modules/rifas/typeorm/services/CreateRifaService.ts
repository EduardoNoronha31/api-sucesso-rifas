import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Rifa from '../entities/Rifa';
import { RifaRepository } from '../repositories/RifasRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateRifaService {
  public async execute({ name, price, quantity }: IRequest): Promise<Rifa> {
    const rifasRepository = getCustomRepository(RifaRepository);
    const rifaExists = await rifasRepository.findByName(name);

    if (rifaExists) {
      throw new AppError('There is already one product with this name!');
    }

    const rifa = rifasRepository.create({
      name,
      price,
      quantity,
    });

    await rifasRepository.save(rifa);
    return rifa;
  }
}

export default CreateRifaService;

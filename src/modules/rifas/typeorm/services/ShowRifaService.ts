import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Rifa from '../entities/Rifa';
import { RifaRepository } from '../repositories/RifasRepository';

interface IRequest {
  id: string;
}

class ShowRifaService {
  public async execute({ id }: IRequest): Promise<Rifa> {
    const rifasRepository = getCustomRepository(RifaRepository);

    const rifa = await rifasRepository.findOne(id);

    if (!rifa) {
      throw new AppError('Product not found!');
    }
    return rifa;
  }
}

export default ShowRifaService;

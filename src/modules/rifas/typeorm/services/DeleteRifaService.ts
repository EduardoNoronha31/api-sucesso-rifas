import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { RifaRepository } from '../repositories/RifasRepository';

interface IRequest {
  id: string;
}

class DeleteRifaService {
  public async execute({ id }: IRequest): Promise<void> {
    const rifasRepository = getCustomRepository(RifaRepository);
    const rifa = await rifasRepository.findOne(id);

    if (!rifa) {
      throw new AppError('Product not found!');
    }

    await rifasRepository.remove(rifa);
  }
}

export default DeleteRifaService;

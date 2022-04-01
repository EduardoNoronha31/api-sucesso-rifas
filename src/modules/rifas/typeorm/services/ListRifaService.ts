import { getCustomRepository } from 'typeorm';
import Rifa from '../entities/Rifa';
import { RifaRepository } from '../repositories/RifasRepository';

class ListRifaService {
  public async execute(): Promise<Rifa[]> {
    const rifasRepository = getCustomRepository(RifaRepository);

    const rifas = rifasRepository.find();

    return rifas;
  }
}

export default ListRifaService;

import { EntityRepository, Repository } from 'typeorm';
import Rifa from '../entities/Rifa';

@EntityRepository(Rifa)
export class RifaRepository extends Repository<Rifa> {
  public async findByName(name: string): Promise<Rifa | undefined> {
    const rifa = this.findOne({
      where: {
        name,
      },
    });
    return rifa;
  }
}

import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PeopleEntity } from '../../entities/people.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(PeopleEntity)
    private readonly peopleRepository: Repository<PeopleEntity>,
  ) {}

  async getAllPeople(): Promise<PeopleEntity[]> {
    return await this.peopleRepository.find();
  }

  async getPersonById(id: number): Promise<PeopleEntity | undefined> {
    return await this.peopleRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createPerson(person: PeopleEntity): Promise<PeopleEntity> {
    return await this.peopleRepository.save(person);
  }

  async updatePerson(
    id: number,
    updatedPerson: Partial<PeopleEntity>,
  ): Promise<PeopleEntity | undefined> {
    await this.peopleRepository.update({ id }, updatedPerson);
    return this.peopleRepository.findOne({
      where: {
        id,
      },
    });
  }

  async deletePerson(id: number): Promise<DeleteResult> {
    return await this.peopleRepository.delete(id);
  }
}

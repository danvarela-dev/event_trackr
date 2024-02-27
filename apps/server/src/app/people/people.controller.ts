import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PeopleService } from "./people.service";
import { PeopleEntity } from "./people.entity";

@ApiTags('People')
@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {
  }

  @Get()
  async getAllPeople(): Promise<PeopleEntity[]> {
    return await this.peopleService.getAllPeople();
  }

  @Get(':id')
  async getPersonById(id: number): Promise<PeopleEntity | undefined> {
    return await this.peopleService.getPersonById(id);
  }

  @Post()
  async createPerson(person: PeopleEntity): Promise<PeopleEntity> {
    return await this.peopleService.createPerson(person);
  }

  @Put(':id')
  async updatePerson(id: number, updatedPerson: Partial<PeopleEntity>): Promise<PeopleEntity | undefined> {
    return await this.peopleService.updatePerson(id, updatedPerson);
  }

  @Delete(':id')
  async deletePerson(id: number): Promise<void> {
    await this.peopleService.deletePerson(id);
  }
}

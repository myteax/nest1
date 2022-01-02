import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './Event.entities';
import { Repository } from 'typeorm';
import { InputDto } from './InputDto';

@Controller('events')
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  @Get()
  async getall() {
    return await this.repository.find();
  }
  @Get(':id')
  async findId(@Param('id') id: string) {
    console.log(id);
    return await this.repository.findOne(id);
  }
  @Post()
  async postId(@Body() input: InputDto) {
    console.log(input);
    return await this.repository.save(input);
  }
  @Patch(':id')
  async patchIt(@Param('id') id: string, @Body() input: InputDto) {
    console.log(id);
    const ex = await this.repository.findOne(id);
    const et = { ...input, id: ex.id };

    return await this.repository.save(et);
  }
}

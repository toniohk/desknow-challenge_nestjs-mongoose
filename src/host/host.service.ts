import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Host } from './schemas/host.schema';
import { IHost } from './interfaces/host.interface';
import { CreateHostDto, UpdateHostDto } from './dtos';

@Injectable()
export class HostService {
  constructor(
    @InjectModel(Host.name) private readonly model: Model<Host>,
  ) { }

  public async findAll(): Promise<Host[]> {
    return await this.model.find().exec();
  }

  public async findOne(id: string): Promise<Host> {
    return await this.model.findById({ _id: id }).exec();
  }

  public async create(createHostDto: CreateHostDto): Promise<IHost> {
    return await this.model.create(createHostDto);
  }

  public async createMulti(createHostDtos: CreateHostDto[]): Promise<IHost[]> {
    return await this.model.create(createHostDtos);
  }

  public async update(id: string, updateHostDto: UpdateHostDto,): Promise<IHost> {
    return await this.model.findByIdAndUpdate({ _id: id }, updateHostDto);
  }

  public async delete(id: string): Promise<IHost> {
    return await this.model.findByIdAndRemove(id);
  }
}

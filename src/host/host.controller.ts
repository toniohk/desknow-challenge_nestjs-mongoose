import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { HostService } from './host.service';
import { Host } from './schemas/host.schema';
import { CreateHostDto, UpdateHostDto } from './dtos';

@ApiTags('Hosts')
@Controller('api/hosts')
export class HostController {
  constructor(private readonly service: HostService) { }

  @Get()
  @ApiOkResponse({ type: Host, isArray: true })
  async getHosts(): Promise<Host[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Host })
  public async getHost(@Param('id') id: string): Promise<Host> {
    if (!id) {
      throw new NotFoundException('Host does not exist');
    }

    return await this.service.findOne(id);
  }

  @Post()
  @ApiOkResponse({ type: Host })
  public async createHost(@Body() createHostDto: CreateHostDto): Promise<Host> {
    return await this.service.create(createHostDto);
  }

  @Post('multi')
  @ApiOkResponse({ type: Host, isArray: true })
  public async createHosts(@Body() createHostDtos: CreateHostDto[]): Promise<Host[]> {
    return await this.service.createMulti(createHostDtos);
  }

  @Put(':id')
  @ApiOkResponse({ type: Host })
  async updateHost(@Param('id') id: string, @Body() updateHostDto: UpdateHostDto): Promise<Host> {
    if (!id) {
      throw new NotFoundException('Host does not exist');
    }

    return await this.service.update(id, updateHostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Host })
  async deleteHost(@Param('id') id: string): Promise<Host> {
    return await this.service.delete(id);
  }
}

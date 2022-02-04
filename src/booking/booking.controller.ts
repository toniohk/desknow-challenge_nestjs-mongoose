import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { BookingService } from './booking.service';
import { Booking } from './schemas/booking.schema';
import { CreateBookingDto, UpdateBookingDto } from './dtos';

@ApiTags('Bookings')
@Controller('api/bookings')
export class BookingController {
  constructor(private readonly service: BookingService) { }

  @Get()
  @ApiOkResponse({ type: Booking, isArray: true })
  async getBookings(): Promise<Booking[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Booking })
  public async getBooking(@Param('id') id: string) {
    if (!id) {
      throw new NotFoundException('Booking does not exist');
    }

    return await this.service.findOne(id);
  }

  @Post()
  @ApiOkResponse({ type: Booking })
  public async createBooking(@Body() createBookingDto: CreateBookingDto) {
    return await this.service.create(createBookingDto);
  }

  @Post('multi')
  @ApiOkResponse({ type: Booking, isArray: true })
  public async createHosts(@Body() createBookingDtos: CreateBookingDto[]): Promise<Booking[]> {
    return await this.service.createMulti(createBookingDtos);
  }

  @Put(':id')
  @ApiOkResponse({ type: Booking })
  async updateBooking(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    if (!id) {
      throw new NotFoundException('Booking does not exist');
    }

    return await this.service.update(id, updateBookingDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Booking })
  async deleteBooking(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}

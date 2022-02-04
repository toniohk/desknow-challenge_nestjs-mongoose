import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Booking } from './schemas/booking.schema';
import { IBooking } from './interfaces/booking.interface';
import { CreateBookingDto, UpdateBookingDto } from './dtos';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private readonly model: Model<Booking>,
  ) { }

  public async findAll(): Promise<Booking[]> {
    return await this.model.find().exec();
  }

  public async findOne(id: string): Promise<Booking> {
    return await this.model.findById({ _id: id }).exec();
  }

  public async create(createBookingDto: CreateBookingDto): Promise<IBooking> {
    return await this.model.create(createBookingDto);
  }

  public async createMulti(createBookingDtos: CreateBookingDto[]): Promise<IBooking[]> {
    return await this.model.create(createBookingDtos);
  }

  public async update(id: string, updateBookingDto: UpdateBookingDto,): Promise<IBooking> {
    return await this.model.findByIdAndUpdate({ _id: id }, updateBookingDto);
  }

  public async delete(id: string): Promise<IBooking> {
    return await this.model.findByIdAndRemove(id);
  }
}

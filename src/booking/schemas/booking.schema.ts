import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Coordinate } from '../dtos/coordinate';

@Schema()
export class Booking extends Document {
  @ApiProperty({ required: true })
  @Prop({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, type: () => Coordinate })
  coordinate: Coordinate;

  @ApiProperty({ required: true })
  @Prop({ required: true })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

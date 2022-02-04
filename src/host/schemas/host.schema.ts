import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Host extends Document {
  @ApiProperty({ required: true })
  @Prop({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @Prop({ required: true })
  hostName: string;

  @ApiProperty({ required: true })
  @Prop({ required: true, })
  address: string;

  @ApiProperty({ required: true, isArray: true, type: () => Number })
  @Prop({ required: true })
  coordinates: number[];

  @ApiProperty({ required: true })
  @Prop({ required: true })
  status: string;

  @ApiProperty({ required: false })
  @Prop()
  property: string;
}

export const HostSchema = SchemaFactory.createForClass(Host);

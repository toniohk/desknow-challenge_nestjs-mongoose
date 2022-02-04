import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class Coordinate {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  readonly latitude: number;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  readonly longitude: number;
}
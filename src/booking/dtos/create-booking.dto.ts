import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

import { Coordinate } from './coordinate';

export class CreateBookingDto {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ required: true, type: () => Coordinate })
  @IsNotEmpty()
  readonly coordinate: Coordinate;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  readonly status: string;
}


import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsArray,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateHostDto {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  readonly hostName: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @ApiProperty({ required: true, isArray: true, type: () => Number })
  @IsArray()
  @IsNotEmpty()
  readonly coordinates: number[];

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  readonly property?: string;
}


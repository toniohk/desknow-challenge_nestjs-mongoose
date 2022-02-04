import { Document } from 'mongoose';

import { Coordinate } from '../dtos/coordinate';

export interface IBooking extends Document {
  readonly id: number;
  readonly name: string;
  readonly coordinate: Coordinate;
  readonly status: string;
}

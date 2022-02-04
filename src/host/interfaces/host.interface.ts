import { Document } from 'mongoose';

export interface IHost extends Document {
  readonly id: number;
  readonly hostName: string;
  readonly address: string;
  readonly coordinates: number[];
  readonly status: string;
  readonly property: string;
}

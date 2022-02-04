import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HostModule } from './host/host.module';
import { BookingModule } from './booking/booking.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`),
    HostModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

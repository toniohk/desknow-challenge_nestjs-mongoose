import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HostService } from './host.service';
import { HostController } from './host.controller';
import { Host, HostSchema } from './schemas/host.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Host.name, schema: HostSchema },
    ]),
  ],
  providers: [HostService],
  controllers: [HostController],
})
export class HostModule {}

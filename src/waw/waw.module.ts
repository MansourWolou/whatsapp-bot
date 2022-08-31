import { Module } from '@nestjs/common';
import { WawService } from './waw.service';
import { WawController } from './waw.controller';

@Module({
  controllers: [WawController],
  providers: [WawService]
})
export class WawModule {}

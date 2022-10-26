import { Module } from '@nestjs/common';
import { WawController } from './waw.controller';
import { WawService } from './waw.service';

@Module({
  controllers: [WawController],
  providers: [WawService]
})
export class WawModule {}

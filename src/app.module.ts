import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WawModule } from './waw/waw.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [WawModule],
})
export class AppModule {}

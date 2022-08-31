import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WawModule } from './waw/waw.module';

@Module({
  imports: [WawModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

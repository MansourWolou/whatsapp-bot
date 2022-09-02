import {
  Controller, Post,
  /*   Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, */
} from '@nestjs/common';
import { WawService } from './waw.service';
/* import { CreateWawDto } from './dto/create-waw.dto';
import { UpdateWawDto } from './dto/update-waw.dto';
 */
@Controller('waw')
export class WawController {
  constructor(private readonly wawService: WawService) {}

  @Post('/webhook')
  sendTextMessage(message:string, recipientPhone:string){
      this.wawService.sendTextMessage(message,recipientPhone)
  }
}

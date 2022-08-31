import { Controller, Get, Post } from '@nestjs/common';
import { AppWawService } from './appWaw.service';

@Controller()
export class AppWawController{

    constructor(private readonly wawService:AppWawService){}
    @Get()
    getMessageNotification(){
        this.wawService.getMessageNotification()
    }
    @Post()
    sendTextMessage(message:string, recipientPhone:string){
        this.wawService.sendTextMessage(message,recipientPhone)
    }
}
import { Controller, Get, HttpCode, Param, Query, Req,Res } from '@nestjs/common';
import { WawService } from './waw.service';

@Controller('waw')
export class WawController {
    constructor(private readonly wawService: WawService){}

    @Get("/")
    getHook() : string{
        return this.wawService.getHook();
    }
    @Get('webhook')
    setUpWebhook(@Query('hub.mode') mode:any,
                @Query('hub.verify_token')token : any,
                @Query('hub.challenge') challenge:any ) {
                   return this.wawService.setUpWebhook(mode,token,challenge);
    }
    
}

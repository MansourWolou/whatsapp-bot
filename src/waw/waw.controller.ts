import { Controller, Get } from '@nestjs/common';
import { WawService } from './waw.service';

@Controller('waw')
export class WawController {
    constructor(private readonly wawService: WawService){}

    @Get("webhook")
    getHook() : string{
        return this.wawService.getHook();
    }
}

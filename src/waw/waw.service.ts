import { Injectable } from '@nestjs/common';

@Injectable()
export class WawService {
    getHook() : string{
        return "this is a webhook oooo";
    }
}


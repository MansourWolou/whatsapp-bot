import { HttpException, HttpStatus, Injectable, Req, Res } from '@nestjs/common';

@Injectable()
export class WawService {
    getHook() : string{
        return "this is a webhook oooo";
    }
    setUpWebhook(mode: any,token: any,challenge: any,req:Request,res:Response){
        console.log(mode,token,challenge);
        
        /** UPDATE YOUR VERIFY TOKEN
        This will be the Verify Token value when you set up webhook**/
        const VERIFY_TOKEN = "hello7";

        // Check if a token and mode were sent
        if (mode && token) {
        
          // Check the mode and token sent are correct
          if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Respond with 200 OK and challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            console.log(challenge);
            
            return challenge;

          } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
          }
        }
    }
    postToWebhook(){

    }
}


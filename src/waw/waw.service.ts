import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as type from './../type';
import { CreateWawDto } from './dto/create-waw.dto';
import { UpdateWawDto } from './dto/update-waw.dto';

@Injectable()
export class WawService {
  private senderPhoneNumberID:number;
    private auth:string;
    private graphApiVersion:string;
    private baseUrl:string;
    
    constructor(phoneId:number,token){
        this.senderPhoneNumberID = phoneId;
        this.auth = token;
        
    }
    // recuperer le message reçu par le bot 
    getMessageNotification(){}
    // envoyer un message à un utilisateur de whatsapp
  async sendTextMessage(message:string , recipientPhone:string){
    let content : type.Text ;
    let msg: type.sendTextMessage;

    content.body = message;
    msg.to = recipientPhone;
    msg.text = content; 

    type resTextMessage = {
        messagingProduct: 'whatsapp';
        contacts: [
            {
              input: string,
              wa_id: string
            }
          ],
          messages: [
            {
              id: string
            }
          ]
    }
    
    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await axios.post<resTextMessage>(
        `https://graph.facebook.com/${this.graphApiVersion}/${this.senderPhoneNumberID}/messages`,
        msg,
        {
            headers: { 
                'Authorization': `Bearer ${this.auth}`, 
                'Content-Type': 'application/json'
            },
        },
      );
    
      console.log(JSON.stringify(data, null, 4));
    
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
      

    }
    //envoyer un message template a un utilisateur whatsapp
    sendTemplateMessage(){}

}

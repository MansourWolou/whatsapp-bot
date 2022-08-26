import { Injectable } from '@nestjs/common';

@Injectable()
export class AppWawService{
    senderPhoneNumberID:number;
    auth:string;
    graphApiVersion:string;
    baseUrl:string;


    constructor(phoneId:number,token){
        this.senderPhoneNumberID = phoneId;
        this.auth = token;
        
    }
    parseWebhoockNotification(){}
    sendTextMessage(message:string){}
    sendTemplateMessage(){}


}
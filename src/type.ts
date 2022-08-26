import { Profiler } from "inspector";

/**
 * The top level Webhooks array contains the following two fields:
 * object: All Webhook events for WhatsApp Cloud API belong under the whatsapp_business_account object.
 * entry: 	An array of entry objects.
 */
export type Component = {
    object:any;
    entry: Array<Entry>;
}
/**
 * id	:The ID of Whatsapp Business Accounts this Webhook belongs to.
 * changes	:Changes that triggered the Webhooks call. This field contains an array of change objects.
 */
export type Entry = {
    id:number;
    changes: Array<Change>;
}
/**
 * value	A value object. Contains details of the changes related to the specified field.
 * field	Contains the type of notification you are getting on that Webhook. Currently, the only option for this API is “messages”.
 */
export type Change = {
    value: any;
    field: string ;
}
/**
 * display_phone_number	The phone number of the business account that is receiving the Webhooks.
 * phone_number_id	The ID of the phone number receiving the Webhooks. You can use this phone_number_id to send messages back to customers.
 */
export type Metadata = {
    displayPhoneNumber : number;
    phoneNumberId: number;
}
/**
 * messaging_product:	The messaging service used for Webhooks. For WhatsApp messages, this value needs to be set to “whatsapp”.
 * metadata	:The metadata about your phone number.
 * messages:	An array of message objects. Added to Webhooks for incoming message notifications.
 * statuses:	An array of message status objects. Added to Webhooks for message status update.
 * errors:	An array of message error objects.
 */
export type Value = {
    messagingProduct : string;
    metadata : Metadata;
    messages: Array<Message>;
    statuses: Array<Statuses>;
    errors: Array<Error>;
}
/**
 * profile	The profile object.
 * wa_id	The WhatsApp ID of the customer. You can send messages using this wa_id.
 */
export type Contact = {
    profile: Profile;
    waId: number;
}
/**
 * name	Optional.
Specifies the sender's profile name
 */
export type Profile = {
    name?:string
}
/**
 * from	The customer's phone number.
*id	The unique identifier of incoming message, you can use messages endpoint to mark it as read.
*timestamp	The timestamp when a customer sends a message.
*type	The type of message being received.

Supported values are:
text: for text messages.
image: for image (media) messages.
interactive: for interactive messages.
document: for document (media) messages.
audio: for audio and voice (media) messages.
sticker: for sticker messages.
video: for video (media) messages.
button: for responses to interactive message templates.
contacts: for contact messages.
location: for location messages.
unknown: for unknown messages.
system: for user number change messages.
*context	Added to Webhook if message is forwarded or an inbound reply.
A context object.
*identity	Added to Webhook if show_security_notifications is enabled in application settings.
An identity object.
*text	Added to Webhook if type is text.
A text object.
*audio	Added to Webhook if type is audio (including voice messages).
A media object with the audio information.
*image	Added to Webhook if type is image.
A media object with the image information.
*sticker	Added to Webhook if type is sticker.
A media object with the sticker information.
*video	Added to Webhook if type is video.
A media object with the video information.
*interactive	Added to Webhook if type is interactive.
An interactive object.
*document	Added to Webhook if type is document.
A media object with the document information.
*errors	Added to Webhook if type is unknown.
If displayed, this field contains the following error message:

[{"code":131051,"details":"Message type is not currently supported","title":"Unsupported message type"]
*system	Added to Webhook if type is system.
A system message object.
*button	Added to Webhook if type is button.
A button message object.
This field is used when the Webhook notifies you that a user clicked on a quick reply button.
referral	Added to Webhook if the message is coming from a user that clicked an ad that is Click To WhatsApp.
A referral object. This is how the referral object works:
A user clicks on an ad with the Click to WhatsApp call-to-action.
User is redirected to WhatsApp and sends a message to the advertising business.
User sends a message to the business. Be aware that users may elect to remove their referral data.
The advertising business gets an inbound message notification including the referral object, which provides additional context on the ad that triggered the message. Knowing all this information, the business can appropriately reply to the user message.
 */
export type Message = {
    from:number
    id : number
    timestam: Date
    type: 'text' | 'image' |'interactive'|'document'|'audio'|'video'|'button'|'contacts'|'location'|'unknown'|'system'
    context?: Context
    identity?:Identity
    text?: Text
    audio?: Media
    image?: Media 
    sticker?:Media
    video?:Media
    interactive?: Interactive
    document?:Media
    error?: '[{"code":131051,"details":"Message type is not currently supported","title":"Unsupported message type"]'
    system?: System
    button?:Button 
    referral?:Referral
}
/**
 * body	The text of the text message.
 */
export type Text = {
    body:string;
}
/**
 * forwarded	Added to Webhooks if message was forwarded.
Set to true if the received message has been forwarded.
 * frequently_forwarded	Added to Webhooks if message has been frequently forwarded.
Set to true if the received message has been forwarded more than five times.
 * from.	Added to Webhooks if message is an inbound reply to a sent message.
The WhatsApp ID of the sender of the sent message.
 * id.	Added to Webhooks if message is an inbound reply to a sent message.
The WhatsApp ID of the sender of the sent message.
 */
export type Context = {
    forwarded?:Boolean
    frequentlyForwarded?:Boolean
    form?:number
    id?:number
}
export type Identity = {
    acknowledged:string
}
export type Statuses = {}
export type Media = {}
export type Interactive = {}
export type System = {}
export type Button = {}
export type Referral = {}
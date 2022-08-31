import { Profiler } from "inspector";

/**
 * The top level Webhooks array contains the following two fields:
 * object: All Webhook events for WhatsApp Cloud API belong under the whatsapp_business_account object.
 * entry: 	An array of entry objects.
 */
export interface Component {
    object:object;
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
    value: object;
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
    errors?: Array<Error>;
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
    timestamp: string
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
    previewUrl?: boolean;
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
/**
 * acknowledged	State of acknowledgment for latest user_identity_changed system notification.
 * created_timestamp	The timestamp of when the WhatsApp Business API detected the user potentially changed.
 * hash	Identifier for the latest user_identity_changed system notification.
 * 
 */
export type Identity = {
    acknowledged:string;
    createdTimestamp:string;
    hash:string;
}
/**
 *  id: The message ID.
    recipientId: The WhatsApp ID of the recipient.
    status: The status of the message. Valid values are: read, delivered, sent, failed, or deleted.
    timestamp: The timestamp of the status message.
    type: The type of entity this status object is about. Currently, the only available option is "message".
    conversation: This object will be provided by default when Conversation-Based Pricing launches in a future update.
Object containing conversation attributes, including id. See conversation object for more information.
WhatsApp defines a conversation as a 24-hour session of messaging between a person and a business. There is no limit on the number of messages that can be exchanged in the fixed 24-hour window. The 24-hour conversation session begins when:
A business-initiated message is delivered to a user
A business’ reply to a user message is delivered

The 24-hour conversation session is different from the 24-hour customer support window. 
The customer support window is a rolling window that is refreshed when a user-initiated message is delivered to a business. 
Within the customer support window businesses can send free-form messages.
Any business-initiated message sent more than 24 hours after the last customer message must be a template message.
    priving:This object will be provided by default when Conversation-Based Pricing launches in a future update.
    errors: 	Added to Webhook if status is set to failed. An array of error objects with information about a message’s delivery failure.
 */
export type Statuses = {
    id: number
    recipientId: number
    status: 'read'|'delivered'|'sent'|'failed'|'deleted'
    timestamp: string
    type: string
    conversation: object
    priving:object
    errors: object
}
/**
 *     caption?:	Added to Webhooks if it has been previously specified.
                    The caption that describes the media.
    filename?:Added to Webhooks for document messages.
                    The media's filename on the sender's device.
    id:The ID of the media.
    mime_type:The mime type of the media.
    sha256:The checksum of the media.
 */
export type Media = {
    caption?:string
    filename?:string
    id:number
    mime_type:string
    sha256:number
}
/**
 *     type:Contains the type of interactive object. Supported options are:
            button_reply: for responses of Reply Buttons.
            list_reply: for responses to List Messages and other interactive objects.
    buttonReply:Used on Webhooks related to Reply Buttons.
    listReply: Used on Webhooks related to List Messages
 */
export type Interactive = {
    type:ButtonReply| ListReply
    buttonReply:ButtonReply
    listReply: ListReply
}
/**
 * id: The unique identifier of the button
    title: The title of the button.
 */
export type ButtonReply = {
    id: number
    title: string
}
/**
 * id: The unique identifier (ID) of the selected row.
    title: The title of the selected row.
    description:The description of the selected row.
 */
export type ListReply = {
    id: number
    title:string
    description:string
}
/**
 * This object is added to Webhooks if a user has changed their phone number and 
 * if a user’s identity has potentially changed on WhatsApp.
 *     body:Describes the system message event. Supported use cases are:
            Phone number update: for when a user changes from an old number to a new number.
            Identity update: for when a user identity has changed.
    newWaId?: 	Added to Webhooks for phone number updates.
                New WhatsApp ID of the customer.
    identity?:Added to Webhooks for identity updates.
                New WhatsApp ID of the customer.
    type:Supported types are:
        user_changed_number: for a user changed number notification.
        user_identity_changed: for user identity changed notification.
    user?: Added to Webhooks for identity updates.
            The new WhatsApp user ID of the customer
 */
export type System = {
    body:string
    newWaId?: number
    identity?:Identity
    type:'user_changed_number' | 'user_identity_changed'
    user?: number
}
export type error = {
    code:number
    title: string
}
/**
 * source_url	Specifies the URL that leads to the ad or post clicked by the user. Opening this URL takes you to the ad viewed by your user.
 * source_type	Specifies the type of the ad's source. Supported values are "ad" or "post".
 * source_id	Specifies the Meta ID for an ad or post.
 * headline	Specifies the headline used in the ad or post that generated the message.
 * body	The description, or body, from the ad or post that generated the message.
 * media_type	Media present in the ad or post the user clicked. Supported values are "image" or "video".
 * image_url	Added if media_type is “image”.Contains a URL to the raw image.
 * video_url	Added if media_type is “video”.Contains a URL to the video.
 * thumbnail_url	Added if media_type is “video”.Contains a URL to the thumbnail image of the clicked video.
 */
export type Referral = {
    sourceUrl: string
    sourceType:'ad'|'post'
    sourceId:number
    headLine:string
    body:string
    mediaType:'image'|'video'
    imageUrl?: string
    videoUrl?: string
    thumbmailUrl?:string
}
/**
 * payload	The developer-defined payload for the button when a business account sends interactive messages.
 * text	The button text.
 */
export type Button = {
    playload:Interactive
    text: Text
}
export type MessageStatusType = {
    sent:boolean
    delivered:boolean
    read:boolean
    failed:boolean
    deleted:boolean
}


export type sendTextMessage = {
    messagingProduct: 'whatsapp';
    recipientType: 'individual';
    to: string;
    type: "text";
    text : Text
}

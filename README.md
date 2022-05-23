# cloud api overview

make calls to Meta’s Graph API to send messages and Webhooks to receive events, such as messages and status updates. The Graph API is a form of Remote Procedure Call expressed over HTTP, where operations and their parameters are expressed using a combination of URL parameters, headers, and request body.

there is a limit to the rate of call . conf doc

# getting started

create a meta dec account and config a meta app for whatsapp

**very important** config the webhoock to receive modification 

> cloud api : https://documenter.getpostman.com/view/13382743/UVC5FTHT#1f4f7644-cc97-40b5-b8e4-c19da268fff1

{
    "object":"whatsapp_business_account",
    "entry":[{"id":"108593695193330","changes":[{"value":{"messaging_product":"whatsapp","metadata":{"display_phone_number":"15550323716","phone_number_id":"104662018925720"},"statuses":[{"id":"wamid.HBgLMzM2Mjk2MTg2NzAVAgARGBJDNUE3MDVCOTQ4MjZCQ0QyODgA","status":"read","timestamp":"1653242109","recipient_id":"33629618670"}]
},
"field":"messages"
}]}]}

// Imports dependencies and set up http server
const 
  request = require('request'),
  express = require('express'),
  body_parser = require('body-parser'),
  app = express().use(body_parser.json()); // creates express http server



app.use((req, res, next) => {
  res.header("Content-Type: application/json");
  res.header("Authorization: Bearer EAAGAGeR9ooIBAC06ZA9BvMIsLSp4ds0LrgmRMo00ZCEw5RtPSXB3u4nwXUvHT6DpZBHdl9xbxM5KM247HZAZCaKsSivLEcVhYuc0KZC6CETm21wtnHDRQ5a9yUC8gCR5QOPaKaZBzanTh16LqyZBUGaugxX4AcCv2pTVrg4di1LsP9T3rsVG0yWb52fBpLz2bf4xNSzRxs0mPxz8apxie5ch"
  );
  next();
});
// Accepts POST requests at /webhook endpoint
app.post('/webhook', (req, res) => {  

  // Parse the request body from the POST
  let body = req.body;
  let msg = req.body.entry[0].changes[0].value.messages[0].text;
  let url = "https://graph.facebook.com/v13.0/104662018925720/messages";

  // Check the Incoming webhook message
  console.log("Incoming webhook: " + JSON.stringify(req.body));
  console.log( msg);
  // si je recoi salut je repond salut
  if(msg == "salut"){
      //repondre salut bg
      console.log("salut bg");
  }else if(msg == "un mot clé"){// si je recoi un mot clé je met en place une action spé
      // coder l'action spécifique
  }else{// si je n'ai rien pu faire de tt ça j'envoi un message d'information
      // envoyer le message template
      res.json(
        {
          messagin_product:"whatsapp",
          recipient_type:"individual",
          to:"+330629618670",
          type: "template",
          template:{
            name:"intro",
            langage:{code:"fr_FR"},
           
          }
        }
      )
  }
  
  // pour dire que je suis un bot 
  // Validate the webhook
  if(req.body.object){
    res.sendStatus(200);
  } else {
    // Return a '404 Not Found' if event is not from a whatsApp API
    res.sendStatus(404);
  }

});

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
app.get('/webhook', (req, res) => {
  
  /** UPDATE YOUR VERIFY TOKEN
  This will be the Verify Token value when you set up webhook**/
  const VERIFY_TOKEN = "hello7";
  
  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Check if a token and mode were sent
  if (mode && token) {
  
    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

// Sets server port and logs message on success
app.listen(3000|| 1337, () => console.log('webhook is listening'));
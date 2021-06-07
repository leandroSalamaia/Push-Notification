  const express = require("express");
  const webpush = require("web-push");
  const bodyParser = require("body-parser");
  const path = require("path");
  
  const app = express();
  
  // Set static path
  app.use(express.static(path.join(__dirname, "client")));
  
  app.use(bodyParser.json());
  
  const publicVapidKey ="BO3IgDdxxI2q1t2S8bK-NM5g5l8WMJxgDdrC_TB2UN6Ngd5b1T10X3zdQPxiQezWES7SSXXTsg2tJY_h0kc6KFA";
  const privateVapidKey = "gpLEscgEDErqZIeVgRmMCmGzST0DHFpdvDsCBb7sYmY";


  
  webpush.setVapidDetails(
    "mailto:test@test.com",
    publicVapidKey,
    privateVapidKey
  );
  
  // Subscribe Route
  app.post("/subscribe", (req, res) => {
    // Get pushSubscription object

    
    const subscriptions = req.body;
    
      // Send 201 - resource created
      res.status(201).json({});
    
      
      for (const subscription of subscriptions){
        // Cria o payload
        let pay = subscription.nome + ' -> Testando PUSH!!!'
        const payload = JSON.stringify({ title: pay });
        webpush
        .sendNotification(subscription.key, payload)
        .catch(err => console.error(err));
      }
  });
  
  const port = 5000;
  
  app.listen(port, () => console.log(`Server started on port ${port}`));

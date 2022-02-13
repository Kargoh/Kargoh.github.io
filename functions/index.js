const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

exports.CheckoutSession = functions.https.onRequest(() => {
        // server.js
        //
        // Use this sample code to handle webhook events in your integration.
        //
        // 1) Paste this code into a new file (server.js)
        //
        // 2) Install dependencies
        //   npm install stripe
        //   npm install express
        //
        // 3) Run the server on http://localhost:4242
        //   node server.js

        const stripe = require('stripe');
        const express = require('express');
        const app = express();

        // This is your Stripe CLI webhook secret for testing your endpoint locally.
        const endpointSecret = "whsec_69fff72d4679ee0f762325b1e1647004cfb4ff820e6012af6815b0df51a5a165";

        app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
        const sig = request.headers['stripe-signature'];

        let event;

        try {
            event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        } catch (err) {
            response.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // Handle the event
        switch (event.type) {
            case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            // Then define and call a function to handle the event payment_intent.succeeded
            break;
            // ... handle other event types
            default:
            console.log(`Unhandled event type ${event.type}`);
        }

        // Return a 200 response to acknowledge receipt of the event
        response.send();
        });

        app.listen(5001, () => console.log('Running on port 3000'));
})

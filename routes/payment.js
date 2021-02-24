const express = require('express');
const router = express.Router();

const {createPaymentIntent} = require('../services/payment-service');

router.post('/', async (request, response) => {
    try {
        await createPaymentIntent(request, response)
    } catch (e) {
      if (e.type === 'StripeCardError') {
        // Display error on client
        return response.send({ error: e.message });
      } else {
        // Something else happened
        return response.status(500).send({ error: e.type });
      }
    }
  });

module.exports = router;
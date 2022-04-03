const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")("sk_test_lZZdsSBWtWDF7OqB6rHlf9H100aCEUzlKF");

router.post("/payment", (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "eur",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  });

  module.exports = router;
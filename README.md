# Upsidedown Shop

This project is set up to demo what severside integration might look like for a friend's static html site.

## Project Description :pencil:

The two major goals for this project is to setup a simple express server to serve the static pages & integrate Stripe's payment platform using their US-Custom integration.

Beyond these goals I might create a full checkout flow just for fun and play around with deployment. I would love to React-ify this project but I don't want to make this too complex since the original developer doesn't have that much experience in JS.

## Project Structure :triangular_ruler:

This app started as an express-generator project.

.
├── app.js
├── bin
│ └── www
├── package.json
├── public
│ ├── images
│ ├── javascripts
│ │ ├── shop.js
│ │ └── checkout.js
│ ├── stylesheets
│ │ └── style.css
│ └── views
│ ├── index.html
│ ├── shop.html
│ └── checkout.html
├── routes
│ ├── product.js
│ └── payment.js
└── services
├── product-service.js
└── payment-service.js

## Local Development :tools:

At this time there is no node version prerequisites so it's as simple as running:

1. npm install
2. npm run dev

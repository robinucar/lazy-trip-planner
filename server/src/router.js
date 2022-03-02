/* Here, you’ll define the app’s endpoints and make the 
connection with Amadeus Node SDK:
 */

const { API_KEY, API_SECRET } = require("./config");
const Amadeus = require("amadeus");
const express = require("express");
// Create router
const router = express.Router();
// ...
module.exports = router;

/* At the beginning of the router.js file, you should 
import the necessary modules, including environment 
variables from config.js, and create a router instance. */


// Create Amadeus API client
const amadeus = new Amadeus({
  clientId: API_KEY,
  clientSecret: API_SECRET,
});


/* Let’s start with the /api/search endpoint. 
This will be used to suggest city names to the 
user as they search:
 */


const API = "api";
// City search suggestions
router.get(`/${API}/search`, async (req, res) => {
  const { keyword } = req.query;
  const response = await amadeus.referenceData.locations.get({
    keyword,
    subType: Amadeus.location.city,
  });
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

/* The typed keyword is accessed as a query argument 
and passed through to the Amadeus Airport & City 
Search API call.
The endpoint responds to GET requests to /api/search, 
with an appropriate response or error JSON object. 
When successful, the /api/search response will 
contain the selected city’s cityCode
The cityCode will be passed as a query parameter to 
the /api/hotels endpoint in order to get the available 
hotels for the given city using the Amadeus Hotel 
Search API:
 */

// Querying hotels
router.get(`/${API}/hotels`, async (req, res) => {
  const { cityCode } = req.query;
  const response = await amadeus.shopping.hotelOffers.get({
    cityCode,
  });
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});


/* Upon picking the hotel, the user should be presented 
with a list of the hotel’s offers (combinations of rooms, 
  rates and conditions that are available for booking). 
  For that, you’ll use the 2nd endpoint of the Amadeus 
  Hotel Search API and hotelID from the /api/hotels 
  response: */

/*   The retrieved hotelID will be forwarded as a query 
  parameter to a new endpoint,  /api/offers, to be 
  used with the SDK: */

// Querying hotel offers
router.get(`/${API}/offers`, async (req, res) => {
  const { hotelId } = req.query;
  const response = await amadeus.shopping.hotelOffersByHotel.get({
    hotelId,
  });
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// CHECK IF WE REALLY NEED TO HAVE THIS CODE FOR OUR USE:

// Confirming the offer
router.get(`/${API}/offer`, async (req, res) => {
  const { offerId } = req.query;
  const response = await amadeus.shopping.hotelOffer(offerId).get();
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// Booking
router.post(`/${API}/booking`, async (req, res) => {
  const { offerId } = req.query;
  const { body } = req;
  const response = await amadeus.booking.hotelBookings.post(
    JSON.stringify({
      data: {
        offerId,
        guests: body.guests,
        payments: body.payments,
      },
    })
  );
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});
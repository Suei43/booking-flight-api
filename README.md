# Booking Flight API

This is an Express-based API that allows users to search for flights and make bookings. The API is built using Node.js and MongoDB, and it provides a simple and efficient way to manage flight bookings.

## Features

- Search for flights: allows users to search for available flights based on origin, destination, departure date, and return date.
- Book a flight: allows users to book a flight by providing their personal information and payment details.
- View booking details: allows users to view their booking details, including flight information, passenger information, and payment information.
- Cancel a booking: allows users to cancel a booking and receive a refund, subject to the cancellation policy.

## API Routes

- `/flights`: GET route to retrieve a list of available flights based on search parameters.
- `/bookings`: POST route to create a new booking.
- `/bookings/:id`: GET route to retrieve a booking by its ID.
- `/bookings/:id`: PUT route to update an existing booking.
- `/bookings/:id`: DELETE route to cancel a booking.

## How to Use

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. Send HTTP requests to the API endpoints using a tool like Postman or curl.
5. To search for flights, make a GET request to the `/flights` endpoint with the appropriate search parameters in the query string.
6. To create a booking, make a POST request to the `/bookings` endpoint with the necessary booking information in the request body.
7. To view or update a booking, make a GET or PUT request to the `/bookings/:id` endpoint with the booking ID in the URL.
8. To cancel a booking, make a DELETE request to the `/bookings/:id` endpoint with the booking ID in the URL.

## Credits

This API was created by Suei. The design and functionality are based on a fictional flight booking system. The API is for educational purposes only and is not intended for commercial use.

## License

This project is licensed under the terms of the <a href="https://opensource.org/license/mit/">MIT license.</a>

# Contact Form Mailer Using Nodemailer

This Node.js application uses Express, Nodemailer, and MongoDB to create an API endpoint that processes contact form submissions from a website, sends them as emails, and stores them in a MongoDB database. It's designed to be deployed on [render.com](https://render.com) and uses environment variables for secure configuration.

## Features

- **API Endpoint for Form Submission:** Processes POST requests from a web form and stores them in a MongoDB database.
- **Email Integration:** Uses Nodemailer to send form data as an email.
- **MongoDB Database Integration:** Stores form submissions for record-keeping and future reference.
- **Environment Variables:** Securely configures email credentials and database connection details.
- **Cross-Origin Resource Sharing (CORS) Enabled:** Accepts requests from specified origins.
- **Responsive HTML Email Template:** Formats the email with basic HTML styling.

## Setup and Configuration

### Prerequisites

- Node.js installed on your system.
- A Gmail account with an App Password set up for Nodemailer.
- MongoDB account for the database.
- An account on [render.com](https://render.com) for deployment.

### Installation

1. **Clone the Repository:**
   ```
   git clone https://github.com/M-YasirGhaffar/contact-form-mailer-using-nodemailer.git
   cd contact-form-mailer-using-nodemailer
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory with the following content, replacing placeholders with your actual details:
   ```
   EMAIL=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-app-password
   PERSONAL_EMAIL=your-personal-email@gmail.com
   MONGODB_CONNECTION_URL=your-mongodb-url
   MONGODB_DB_NAME=your-db-name
   MONGODB_COLLECTION_NAME=your-collection-name
   ```

### Running the Application Locally

- Start the server with `npm start`. The server will run on `http://localhost:3000`.

### Deployment on Render.com

- Follow Render's [Node.js deployment guide](https://render.com/docs/deploy-node-express-app) to deploy the application.
- Ensure that the environment variables are correctly set in the Render.com dashboard.

## Usage

- Send a POST request to `http://localhost:3000/send-email` with the following form data: `name`, `email`, `message`.
- The server processes the request, sends an email to the specified `PERSONAL_EMAIL` address, and stores the submission in MongoDB.

## Troubleshooting

If you encounter errors, check the following:

- Ensure all environment variables are set correctly.
- Verify that the Gmail App Password and account settings are correct.
- Check for any error messages in the server logs for more details.
- Ensure MongoDB connection details are correct and the database is accessible.

## Contributing

Contributions to improve this project are welcome. Please create a pull request or open an issue on GitHub.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

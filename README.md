# Contact Form Mailer Using Nodemailer

## Description

This Node.js application uses Express and Nodemailer to create an API endpoint that processes contact form submissions from a website and sends them as emails. It's designed to be deployed on [render.com](https://render.com) and uses environment variables for secure configuration.

## Features

- **API Endpoint for Form Submission:** Processes POST requests from a web form.
- **Email Integration:** Uses Nodemailer to send form data as an email.
- **Environment Variables:** Securely configures email credentials.
- **Cross-Origin Resource Sharing (CORS) Enabled:** Accepts requests from specified origins.
- **Responsive HTML Email Template:** Formats the email with basic HTML styling.

## Setup and Configuration

### Prerequisites

- Node.js installed on your system.
- A Gmail account with an App Password set up for Nodemailer.
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
   Create a `.env` file in the root directory with the following content, replacing the placeholders with your actual Gmail account details:
   ```
   EMAIL=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-app-password
   PERSONAL_EMAIL=your-personal-email@gmail.com
   ```

### Running the Application Locally

- Start the server with `npm start`. The server will run on `http://localhost:3000`.

### Deployment on Render.com

- Follow Render's [Node.js deployment guide](https://render.com/docs/deploy-node-express-app) to deploy the application.
- Ensure that the environment variables are correctly set in the Render.com dashboard.

## Usage

- Send a POST request to `http://localhost:3000/send-email` with the following form data: `name`, `email`, `message`.
- The server processes the request and sends an email to the specified `PERSONAL_EMAIL` address.

## Troubleshooting

If you encounter errors, check the following:

- Ensure all environment variables are set correctly.
- Verify that the Gmail App Password and account settings are correct.
- Check for any error messages in the server logs for more details.

---

## Contributing

Contributions to improve this project are welcome. Please create a pull request or open an issue on GitHub.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

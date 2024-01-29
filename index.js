require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    res.redirect('https://github.com/M-YasirGhaffar/contact-form-mailer-using-nodemailer/tree/main#readme')
});

app.post('/send-email', (req, res) => {
    let { name, email, message } = req.body;

    // Use environment variables for sensitive data
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.EMAIL_APP_PASSWORD, // Your app password
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.PERSONAL_EMAIL, // Your personal email
        subject: "NEW EMAIL FROM CONTACT FORM OF PORTFOLIO WEBSITE",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #f60;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send(`
                <h1>Email sent successfully!</h1>
                <h2>Here is what was received at the receiver end:</h2>
                <ul>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Message:</strong> ${message}</li>
                </ul>
            `);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*

require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://connectmycustomcontactform:contactform0027@customformstoredata.uldmim2.mongodb.net/?retryWrites=true&w=majority";

console.log("Database URI: ", uri);
console.log("Email from ENV: ", process.env.EMAIL);
console.log("Email App Password from ENV: ", process.env.EMAIL_APP_PASSWORD);


const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(e, n, m) {
    try {
        console.log("Running the database function");

        // Connect the client to the server
        console.log("Connecting to MongoDB...");
        await client.connect();
        console.log("Connected to MongoDB");

        // Specify the database and collection
        const db = client.db("CustomContactForm");
        const collection = db.collection("contactformmessages");
        console.log("Database and Collection selected");

        // Insert a document
        console.log("Inserting document with email: ", e, ", name: ", n, ", message: ", m);
        const result = await collection.insertOne({ date: new Date(), email: e, name: n, message: m });
        console.log(`Document inserted with _id: ${result.insertedId}`);

        // Send a ping
        console.log("Pinging MongoDB...");
        await client.db("admin").command({ ping: 1 });
        console.log("Ping successful");
    } catch (error) {
        console.error("Error in run function: ", error);
    } finally {
        console.log("Closing MongoDB connection");
        await client.close();
        console.log("MongoDB connection closed");
    }
}


app.get('/', (req, res) => {
    res.redirect('https://github.com/M-YasirGhaffar/contact-form-mailer-using-nodemailer/tree/main#readme')
});

app.post('/send-email', (req, res) => {
    let { name, email, message, form_info } = req.body;
    console.log("Received request with: ", req.body);

    // Use environment variables for sensitive data
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.EMAIL_APP_PASSWORD, // Your app password
        },
    });

    const mailOptions = {
        from: form_info,
        to: process.env.PERSONAL_EMAIL, // Your personal email
        subject: "NEW EMAIL FROM CONTACT FORM OF PORTFOLIO WEBSITE",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #f60;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send(`
                <h1>Email sent successfully!</h1>
                <h2>Here is what was received at the receiver end:</h2>
                <ul>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Message:</strong> ${message}</li>
                </ul>
            `);
            console.log("Running database function after sending email");
            run(name, email, message).catch(console.dir);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


*/ 
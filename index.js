require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_CONNECTION_URL;

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

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
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(process.env.MONGODB_DB_NAME);
        const collection = db.collection(process.env.MONGODB_COLLECTION_NAME);

        const result = await collection.insertOne({ date: new Date(), email: e, name: n, message: m });

        await client.db("admin").command({ ping: 1 });
    } catch (error) {
        console.error("Error in run function: ", error);
    } finally {
        await client.close();
        console.log("MongoDB connection closed");
    }
}

app.get('/', (req, res) => {
    res.redirect('https://github.com/M-YasirGhaffar/contact-form-mailer-using-nodemailer/tree/main#readme')
});

app.post('/send-email', (req, res) => {
    let { name, email, message, form_info } = req.body;

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
            run(name, email, message).catch(console.dir);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
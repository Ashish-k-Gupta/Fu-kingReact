import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email
async function sendMail(to, subject, htmlContent) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: htmlContent,
    });
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}

// API endpoint to handle form submissions
app.post('/api/driver', async (req, res) => {
  const { driverName, driverEmail, cellNumber, experience } = req.body;

  const htmlContent = `
    <h1>New Driver Application</h1>
    <p><strong>Name:</strong> ${driverName}</p>
    <p><strong>Email:</strong> ${driverEmail}</p>
    <p><strong>Cell Number:</strong> ${cellNumber}</p>
    <p><strong>Experience:</strong> ${experience} years</p>
  `;

  try {
    await sendMail('dispatch@manntraninc.com', 'New Driver Application', htmlContent);
    res.json({ message: 'Driver information received and email sent!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(json());

const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-email', (req, res) => {
  const { name, email, pickupLocation, dropLocation, trailerType } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    subject: 'New Quote Request from Website',
    text: `
      Name: ${name}
      Email: ${email}
      Pickup Location: ${pickupLocation}
      Drop Location: ${dropLocation}
      Trailer Type: ${trailerType}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Email sent successfully!', info });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// import express, { json } from 'express';
// import { createTransport } from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = 5000;

// app.use(cors({
//   origin: 'http://localhost:3000', 
//   methods: ['GET', 'POST'],
//   credentials: true,
// }));

// app.use(json());

// const transporter = createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
// });

// app.post('/send-email', (req, res) => {
//   const { name, email, pickupLocation, dropLocation, trailerType } = req.body;
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER, 
//     subject: 'New Quote Request from Website',
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Pickup Location: ${pickupLocation}
//       Drop Location: ${dropLocation}
//       Trailer Type: ${trailerType}
//     `,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).json({ message: 'Error sending email', error });
//     }
//     res.status(200).json({ message: 'Email sent successfully!', info });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMail(to, subject, htmlContent) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: htmlContent,
    });

    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
}

async function loadHTMLTemplate(templatePath) {
  try {
    const htmlContent = await fs.readFile(templatePath, 'utf-8');
    return htmlContent;
  } catch (error) {
    console.error('Error loading HTML template:', error);
    throw error;
  }
}

async function main() {
  try {
    const templatePath = path.join(__dirname, 'email-template.html');
    const htmlContent = await loadHTMLTemplate(templatePath);

    await sendMail(
      'theashukumar007@gmail.com',
      'Testing HTML emails',
      htmlContent
    );

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

main();

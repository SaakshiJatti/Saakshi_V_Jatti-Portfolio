const nodemailer = require('nodemailer');

export default function handler(req, res) {
  // 1. Create a "transporter"
  // This is the service that will send the email (e.g., Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 2. Get the form data from the request
  const { name, email, company, message } = req.body;

  // 3. Set up the email content
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: process.env.EMAIL_USER,   // List of receivers (yourself)
    subject: `New Message from ${name} on your Portfolio`, // Subject line
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company || 'Not provided'}

      Message:
      ${message}
    `,
  };

  // 4. Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    return res.status(200).json({ message: 'Email sent successfully' });
  });
}
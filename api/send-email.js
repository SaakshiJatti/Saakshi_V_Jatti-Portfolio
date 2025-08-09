import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Get the form data from the request body
  const { name, email, company, message } = req.body;

  // Create a transporter—the service that sends the email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Set up the email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sending the email to yourself
    subject: `New Message from ${name} on your Portfolio`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company || 'Not provided'}

      Message:
      ${message}
    `,
  };

  // Try to send the email
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
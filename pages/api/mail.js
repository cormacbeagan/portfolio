import { createTransport } from 'nodemailer';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export default async (req, res) => {
  const { text, email } = req.body;
  if (!text || !email) {
    res.status(403).send();
    return;
  }
  const resp = await sendEmail(text, email);
  res.send(resp);
};

function sendEmail(text, email) {
  const message = {
    to: 'cormac.webdev@gmail.com',
    from: 'cor@macbeagan.me',
    subject: 'New Message from MacBeagan.me',
    html: `<div
    style=" border: 1px solid black; padding: 20px; font-family: sans-serif;
    line-height: 2; font-size: 20px; "
    >
    <h3>Incoming from macbeagan.me:</h3>
    <p>${text}</p>
    <p>End of message</p>
    <p>Sender: ${email}</p>
    </div>;
    `,
  };
  return new Promise((resolve, reject) => {
    transport.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
}

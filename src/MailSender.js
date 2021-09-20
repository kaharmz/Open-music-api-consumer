const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  senMail(targetEmail, content) {
    const message = {
      from: 'Open Music Api',
      to: targetEmail,
      subject: 'Eksport Playlist',
      text: 'Lampiran export playlists',
      attachments: [
        {
          filename: 'playlists-song.json',
          content,
        },
      ],
    };
    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;

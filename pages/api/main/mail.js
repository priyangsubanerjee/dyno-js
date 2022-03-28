import nodemailer from "nodemailer";
export default async function (req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const email = req.body.email;
      console.log(req.body);
      const fourDigitCode = Math.floor(1000 + Math.random() * 9000);
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.NEXT_PUBLIC_USER_NAME,
          pass: process.env.NEXT_PUBLIC_USER_PASSWORD,
        },
        secure: true,
      });

      const mailData = {
        from: process.env.NEXT_PUBLIC_USER_NAME,
        to: email.toLowerCase(),
        subject: "Contact Form Submission",
        html: `
            <h2>2FA Code</h2>
            <h1>${fourDigitCode}</h1>`,
      };

      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          res.status(500).json({
            success: false,
            message: "Internal server error",
          });
        } else {
          res.status(200).json({
            success: true,
            code: fourDigitCode,
          });
        }
      });

      break;

    default:
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
  }
}

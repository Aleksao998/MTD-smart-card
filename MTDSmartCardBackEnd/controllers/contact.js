const sgMail = require("@sendgrid/mail");

exports.contactForm = async (req, res, next) => {
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: "contact@mtdsmartcard.com",
    from: "contact@mtdsmartcard.com",
    subject: "Contact form from: " + req.body.name,
    text: "Email :" + req.body.email + "has send you this msg: " + req.body.msg,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({
        msg: "Succesfull",
      });
    })
    .catch((error) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

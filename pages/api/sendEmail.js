import emailjs from "@emailjs/browser";

export default function handler(req, res) {
  if (req.method == 'POST') {
    emailjs.sendForm('service_xb5q56f', 'template_s6cst77', {
      name:req.body.name,
      email:req.body.email,
      message:req.body.message
    }, 'GzcpkX3jBQ7xlbjWO')
    .then(function(response) {
      return res.status(200).json({ success: true, msg: 'Sent!' })
    }, function(error) {
      return res.status(403).json({ success: false, msg: error })
    });
  }
  else {
    return res.status(400).json({ success: false, msg: 'Please make a valid request' })
  }
}

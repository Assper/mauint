import nodemailer from 'nodemailer'
import config from '../config'

const transporter = nodemailer.createTransport({ ...config.mail })

export async function sendMail(options) {
  const data = {
    from: config.mail.auth.user,
    ...options
  }

  await transporter.sendMail(data)
}

export async function sendRestoreMail(email, password) {
  const template = `
    <h1>You send request for restore password</h1>
    <p>Your new password: <b>${password}</b></p>
  `
  await sendMail({
    to: email,
    subject: 'MAUINT restore password',
    html: template
  })
} 

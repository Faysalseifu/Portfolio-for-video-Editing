import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL as string;
const FROM_EMAIL = (process.env.CONTACT_FROM_EMAIL as string) || 'no-reply@yourdomain.com';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, projectType, budget, deadline, details } = req.body || {};
  if (!name || !email || !details) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: `Portfolio Inquiry <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      reply_to: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || '-'} </p>
        <p><strong>Budget:</strong> ${budget || '-'} </p>
        <p><strong>Deadline:</strong> ${deadline || '-'} </p>
        <p><strong>Details:</strong></p>
        <pre style="white-space:pre-wrap">${details}</pre>
      `,
    });

    // Optional auto-reply to client
    await resend.emails.send({
      from: `Faysal Media <${FROM_EMAIL}>`,
      to: email,
      subject: `Thanks, ${name}! I received your inquiry`,
      html: `<p>Thanks for reaching out! I'll review your details and reply within 24 hours.</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL;
  if (!to) {
    return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 });
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#1e3a5f;padding:28px 36px;">
            <p style="margin:0;color:#ffffff;font-size:20px;font-weight:bold;letter-spacing:0.5px;">Deliberate Services LLC</p>
            <p style="margin:6px 0 0;color:#a8c4e0;font-size:13px;">New contact form submission</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:20px;border-bottom:1px solid #e8e8e8;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.8px;">Name</p>
                  <p style="margin:0;font-size:15px;color:#1a1a2e;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 0;border-bottom:1px solid #e8e8e8;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.8px;">Email</p>
                  <p style="margin:0;font-size:15px;color:#1a1a2e;">${email}</p>
                </td>
              </tr>
              ${subject?.trim() ? `<tr>
                <td style="padding:20px 0;border-bottom:1px solid #e8e8e8;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.8px;">Subject</p>
                  <p style="margin:0;font-size:15px;color:#1a1a2e;">${subject.trim()}</p>
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding-top:20px;">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.8px;">Message</p>
                  <p style="margin:0;font-size:15px;color:#1a1a2e;line-height:1.7;white-space:pre-wrap;">${message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8f9fa;padding:16px 36px;border-top:1px solid #e8e8e8;">
            <p style="margin:0;font-size:12px;color:#888;text-align:center;">This message was sent via the contact form at deliberate-services.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: 'Deliberate Services <contact@deliberate-services.com>',
    to,
    replyTo: email,
    subject: subject?.trim() || `Contact form inquiry from ${name}`,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

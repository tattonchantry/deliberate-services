import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // TEMP: mail-tester.com deliverability test — revert before go-live
  const to = 'test-61ufnu2d8@srv1.mail-tester.com';

  const { error } = await resend.emails.send({
    from: 'Deliberate Services <contact@deliberate-services.com>',
    to,
    replyTo: email,
    subject: subject?.trim() || `Contact form inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

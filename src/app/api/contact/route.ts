import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "info@xhamia.com";
const CONTACT_PHONE = process.env.CONTACT_PHONE ?? "043723623";

function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    // Nuk ka konfigurim real SMTP – kthejmë transport “fake” që bën sikur dërgon.
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const context = String(formData.get("context") ?? "kontakt").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Ju lutem plotësoni emrin, emailin dhe mesazhin." },
      { status: 400 },
    );
  }

  const body = [
    `Konteksti: ${context}`,
    "",
    `Emri: ${name}`,
    `Email: ${email}`,
    "",
    "Mesazhi:",
    message,
    "",
    `Nr. telefoni i kontaktit (faqja): ${CONTACT_PHONE}`,
  ].join("\n");

  const transporter = createTransport();

  // Nëse nuk ka SMTP të konfiguruar, e pranojmë kërkesën si demo pa dërguar realisht email.
  if (!transporter) {
    console.log("[contact] Mesazh DEMO:", body);
    return NextResponse.json({ ok: true, demo: true });
  }

  const from = process.env.SMTP_FROM ?? CONTACT_EMAIL;

  await transporter.sendMail({
    to: CONTACT_EMAIL,
    from,
    replyTo: email,
    subject: `Mesazh nga faqja (${context})`,
    text: body,
  });

  return NextResponse.json({ ok: true });
}


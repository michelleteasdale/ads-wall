import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const from = process.env.RESEND_FROM_EMAIL || "info@head-pay.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "AdsWall";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ads-wall.com";

export async function sendWelcomeEmail(to: string, firstName: string) {
  return resend.emails.send({
    from: `${siteName} <${from}>`,
    to,
    subject: `Welcome to ${siteName}!`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; color: #0f172a; margin-bottom: 16px;">Welcome to ${siteName}, ${firstName}!</h1>
        <p style="color: #475569; line-height: 1.6; margin-bottom: 24px;">
          Your account has been created successfully. You can now sign in and start issuing virtual cards for your ad campaigns.
        </p>
        <a href="${siteUrl}/en/account" style="display: inline-block; background: #2563eb; color: white; padding: 12px 32px; border-radius: 12px; text-decoration: none; font-weight: 600;">
          Go to Dashboard
        </a>
        <p style="color: #94a3b8; font-size: 13px; margin-top: 32px;">
          If you didn't create this account, please ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #94a3b8; font-size: 12px;">${siteName} — ${siteUrl}</p>
      </div>
    `,
  });
}

export async function sendPasswordResetEmail(to: string, firstName: string, resetToken: string) {
  const resetUrl = `${siteUrl}/en/reset-password?token=${resetToken}`;

  return resend.emails.send({
    from: `${siteName} <${from}>`,
    to,
    subject: `Reset your ${siteName} password`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; color: #0f172a; margin-bottom: 16px;">Password Reset</h1>
        <p style="color: #475569; line-height: 1.6; margin-bottom: 24px;">
          Hi ${firstName}, we received a request to reset your password. Click the button below to create a new password. This link expires in 1 hour.
        </p>
        <a href="${resetUrl}" style="display: inline-block; background: #2563eb; color: white; padding: 12px 32px; border-radius: 12px; text-decoration: none; font-weight: 600;">
          Reset Password
        </a>
        <p style="color: #94a3b8; font-size: 13px; margin-top: 32px;">
          If you didn't request a password reset, you can safely ignore this email. Your password won't change.
        </p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #94a3b8; font-size: 12px;">${siteName} — ${siteUrl}</p>
      </div>
    `,
  });
}

export async function sendInvoiceEmail(to: string, firstName: string, invoiceData: {
  amount: string;
  currency: string;
  description: string;
  date: string;
  invoiceId: string;
}) {
  return resend.emails.send({
    from: `${siteName} <${from}>`,
    to,
    subject: `Invoice #${invoiceData.invoiceId} — ${siteName}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; color: #0f172a; margin-bottom: 16px;">Invoice #${invoiceData.invoiceId}</h1>
        <p style="color: #475569; line-height: 1.6; margin-bottom: 24px;">Hi ${firstName}, here's your invoice details:</p>
        <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <table style="width: 100%; font-size: 14px; color: #334155;">
            <tr><td style="padding: 8px 0; color: #94a3b8;">Date</td><td style="padding: 8px 0; text-align: right;">${invoiceData.date}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Description</td><td style="padding: 8px 0; text-align: right;">${invoiceData.description}</td></tr>
            <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 12px 0; font-weight: 600;">Total</td><td style="padding: 12px 0; text-align: right; font-weight: 700; font-size: 18px; color: #0f172a;">${invoiceData.currency} ${invoiceData.amount}</td></tr>
          </table>
        </div>
        <a href="${siteUrl}/en/account" style="display: inline-block; background: #2563eb; color: white; padding: 12px 32px; border-radius: 12px; text-decoration: none; font-weight: 600;">
          View in Dashboard
        </a>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #94a3b8; font-size: 12px;">${siteName} — ${siteUrl}</p>
      </div>
    `,
  });
}

export async function sendPurchaseConfirmationEmail(to: string, firstName: string, purchase: {
  cardLast4: string;
  amount: string;
  currency: string;
  merchant: string;
  date: string;
}) {
  return resend.emails.send({
    from: `${siteName} <${from}>`,
    to,
    subject: `Purchase confirmed — ${siteName}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; color: #0f172a; margin-bottom: 16px;">Purchase Confirmed</h1>
        <p style="color: #475569; line-height: 1.6; margin-bottom: 24px;">Hi ${firstName}, a purchase was made with your virtual card.</p>
        <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <table style="width: 100%; font-size: 14px; color: #334155;">
            <tr><td style="padding: 8px 0; color: #94a3b8;">Card</td><td style="padding: 8px 0; text-align: right;">•••• ${purchase.cardLast4}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Merchant</td><td style="padding: 8px 0; text-align: right;">${purchase.merchant}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Date</td><td style="padding: 8px 0; text-align: right;">${purchase.date}</td></tr>
            <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 12px 0; font-weight: 600;">Amount</td><td style="padding: 12px 0; text-align: right; font-weight: 700; font-size: 18px; color: #0f172a;">${purchase.currency} ${purchase.amount}</td></tr>
          </table>
        </div>
        <a href="${siteUrl}/en/account" style="display: inline-block; background: #2563eb; color: white; padding: 12px 32px; border-radius: 12px; text-decoration: none; font-weight: 600;">
          View in Dashboard
        </a>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #94a3b8; font-size: 12px;">${siteName} — ${siteUrl}</p>
      </div>
    `,
  });
}

import fs from "fs";
import PDFDocument from "pdfkit";
import { NoUserFounderror } from "../error.js";
import { findUserById } from "../../user/repo/user.repo.js";

export async function genrateMembershipCertificate(userId: bigint) {
    const user = await findUserById(userId);
    if (!user) {
        throw NoUserFounderror;
    }

    const doc = new PDFDocument({
        size: [600, 350],
        margin: 0
    });

    const fileName = `membership_${user.membership_number}.pdf`;
    doc.pipe(fs.createWriteStream(fileName));

    // Register fonts (assuming they are downloaded to the root directory)
    const fontBoldPath = "Tajawal-Bold.ttf";
    const fontRegularPath = "Tajawal-Regular.ttf";

    if (fs.existsSync(fontBoldPath) && fs.existsSync(fontRegularPath)) {
        doc.registerFont('Tajawal-Bold', fontBoldPath);
        doc.registerFont('Tajawal-Regular', fontRegularPath);
    }

    const bannerHeight = 90;
    const primaryColor = '#84B0A5';

    // Top Banner
    doc.rect(0, 0, 600, bannerHeight).fill(primaryColor);

    // Footer Wave (approximated with a bezier curve)
    doc.path('M 0 320 Q 150 310, 300 330 T 600 320 L 600 350 L 0 350 Z').fill(primaryColor);

    // Logo Placeholder
    doc.circle(90, bannerHeight, 45).fill('#FFFFFF').stroke(primaryColor);
    doc.circle(90, bannerHeight, 45).lineWidth(2).stroke(primaryColor);

    // Only apply the custom font if it exists
    const boldFont = fs.existsSync(fontBoldPath) ? 'Tajawal-Bold' : 'Helvetica-Bold';
    const regFont = fs.existsSync(fontRegularPath) ? 'Tajawal-Regular' : 'Helvetica';

    doc.font(boldFont)
        .fontSize(24)
        .fillColor(primaryColor)
        .text('ANAS', 50, bannerHeight - 15, { align: 'center', width: 80 });

    // Header Text (Right aligned)
    doc.font(boldFont)
        .fontSize(22)
        .fillColor('#333333')
        .text('بطاقة اعتماد مقدمي', 0, 15, { align: 'right', width: 560, features: ['rtla'] })
        .text('خدمات السياحة البيئية', 0, 45, { align: 'right', width: 560, features: ['rtla'] });

    // Body Text (Right aligned)
    const startY = 130;
    const lineGap = 35;

    const roleText = user.system_role === 'ambassedor' ? 'سفير' : 'مقدم خدمة';
    const expiryDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB');

    const fields = [
        `الاسم بالكامل: ${user.name}`,
        `مقدم خدمة/سفير: ${roleText}`,
        `نوع الخدمة: سياحة بيئية`, // Hardcoded placeholder
        `كود العضويه: ${user.membership_number}`,
        `تاريخ الانتهاء: ${expiryDate}`
    ];

    // Helper to fix Bidi for pdfkit's rtla feature
    // Reverses English letters and numbers so they render correctly when pdfkit reverses the whole line.
    function fixBidi(str: string) {
        return str.replace(/[A-Za-z0-9][A-Za-z0-9\s/.\-]*[A-Za-z0-9]|[A-Za-z0-9]/g, match => match.split('').reverse().join(''));
    }

    doc.font(regFont)
        .fontSize(18)
        .fillColor('#333333');

    fields.forEach((text, index) => {
        doc.text(fixBidi(text), 0, startY + (index * lineGap), { align: 'right', width: 550, features: ['rtla'] });
    });

    doc.end();

    return fileName;
}




export async function generateMembershipCertificateBuffer(
  userId: bigint
): Promise<Buffer> {
  const user = await findUserById(userId);

  if (!user) {
    throw NoUserFounderror;
  }

  const doc = new PDFDocument({
    size: [600, 350],
    margin: 0,
  });

  const chunks: Buffer[] = [];

  doc.on("data", (chunk) => {
    chunks.push(chunk);
  });

  const pdfPromise = new Promise<Buffer>((resolve, reject) => {
    doc.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    doc.on("error", reject);
  });

  const fontBoldPath = "Tajawal-Bold.ttf";
  const fontRegularPath = "Tajawal-Regular.ttf";

  if (
    fs.existsSync(fontBoldPath) &&
    fs.existsSync(fontRegularPath)
  ) {
    doc.registerFont("Tajawal-Bold", fontBoldPath);
    doc.registerFont("Tajawal-Regular", fontRegularPath);
  }

  const bannerHeight = 90;
  const primaryColor = "#84B0A5";

  // Top Banner
  doc.rect(0, 0, 600, bannerHeight).fill(primaryColor);

  // Footer Wave
  doc
    .path(
      "M 0 320 Q 150 310, 300 330 T 600 320 L 600 350 L 0 350 Z"
    )
    .fill(primaryColor);

  // Logo
  doc.circle(90, bannerHeight, 45).fill("#FFFFFF");
  doc.circle(90, bannerHeight, 45)
    .lineWidth(2)
    .stroke(primaryColor);

  const boldFont = fs.existsSync(fontBoldPath)
    ? "Tajawal-Bold"
    : "Helvetica-Bold";

  const regFont = fs.existsSync(fontRegularPath)
    ? "Tajawal-Regular"
    : "Helvetica";

  doc
    .font(boldFont)
    .fontSize(24)
    .fillColor(primaryColor)
    .text("ANAS", 50, bannerHeight - 15, {
      align: "center",
      width: 80,
    });

  doc
    .font(boldFont)
    .fontSize(22)
    .fillColor("#333333")
    .text("بطاقة اعتماد مقدمي", 0, 15, {
      align: "right",
      width: 560,
      features: ["rtla"],
    })
    .text("خدمات السياحة البيئية", 0, 45, {
      align: "right",
      width: 560,
      features: ["rtla"],
    });

  const roleText =
    user.system_role === "ambassedor"
      ? "سفير"
      : "مقدم خدمة";

  const expiryDate = new Date(
    Date.now() + 365 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-GB");

  const fields = [
    `الاسم بالكامل: ${user.name}`,
    `مقدم خدمة/سفير: ${roleText}`,
    `نوع الخدمة: سياحة بيئية`,
    `كود العضويه: ${user.membership_number}`,
    `تاريخ الانتهاء: ${expiryDate}`,
  ];

  function fixBidi(str: string) {
    return str.replace(
      /[A-Za-z0-9][A-Za-z0-9\s/.\-]*[A-Za-z0-9]|[A-Za-z0-9]/g,
      (match) => match.split("").reverse().join("")
    );
  }

  doc
    .font(regFont)
    .fontSize(18)
    .fillColor("#333333");

  fields.forEach((text, index) => {
    doc.text(
      fixBidi(text),
      0,
      130 + index * 35,
      {
        align: "right",
        width: 550,
        features: ["rtla"],
      }
    );
  });

  doc.end();

  return pdfPromise;
}
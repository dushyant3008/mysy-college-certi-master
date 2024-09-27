"use server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mysy@vpmp.ac.in",
    pass: "dclq bdqx iclq ksjj",
  },
});

export default async function sendEmail(type , eno) {
  const directoryPath = `./server/files/${type}`;

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    const pdfFiles = files.filter(file => path.extname(file).toLowerCase() === '.pdf');

    pdfFiles.sort((a, b) => {
      return fs.statSync(path.join(directoryPath, b)).birthtime - fs.statSync(path.join(directoryPath, a)).birthtime;
    });

    if (pdfFiles.length > 0) {
      const latestPdfFile = pdfFiles[0];
      const pdfAttachment = fs.readFileSync(path.join(directoryPath, latestPdfFile));

      transporter.sendMail({
        from: "mysy@vpmp.ac.in",
        to: "adminoffice@vpmp.ac.in",
        subject: eno,
        text: `MYSY College Certificate 2024`,
        attachments: [
          {
            filename: latestPdfFile,
            content: pdfAttachment,
          },
        ],
      });
    } else {
      console.log('No PDF files found in the directory');
    }
  });
}
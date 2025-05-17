// import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // const { firstName, lastName, email, mobileNumber, state } = req.body;

    // Initialize the Google Spreadsheet
    // const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    // Authenticate with Google Sheets
    // await doc.useServiceAccountAuth({
    //   client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    //   private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    // });

    // Load the document
    // await doc.loadInfo();

    // Get the first sheet
    // const sheet = doc.sheetsByIndex[0];

    // Add the new row
    // await sheet.addRow({
    //   "First Name": firstName,
    //   "Last Name": lastName,
    //   Email: email,
    //   "Mobile Number": mobileNumber,
    //   State: state,
    //   Timestamp: new Date().toISOString(),
    // });

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    return res.status(500).json({ message: "Error submitting form" });
  }
}

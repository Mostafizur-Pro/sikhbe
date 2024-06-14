import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import moment from "moment-timezone";
import httpStatus from "http-status";
import { generateNextStudentProfileId } from "./profileId";
import { connection } from "../config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Parse the request body
      const reqBody = req.body;
      console.log("signup", reqBody);
      const generateId = await generateNextStudentProfileId();
      const hashedPassword = await bcrypt.hash(reqBody.password, 10);
      const formattedDate = moment
        .tz("Asia/Dhaka")
        .format("YYYY-MM-DD HH:mm:ss");

      const newStudent = {
        profile_id: generateId,
        name: reqBody.name,
        email: reqBody.email,
        password: hashedPassword,
        role: "student",
        phone: reqBody.phone,
        image:
          "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png",
        status: "publish",
        created_at: formattedDate,
        updated_at: formattedDate,
      };

      const query = "INSERT INTO student SET ?";
      const result = await new Promise((resolve, reject) => {
        connection.query(query, newStudent, (error, results) => {
          if (error) {
            console.error("Error creating new student:", error.message);
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      // Send success response
      const createdClientId = (result as any).insertId;
      res.status(httpStatus.CREATED).json({
        success: true,
        message: "Student created successfully",
        data: { id: createdClientId },
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

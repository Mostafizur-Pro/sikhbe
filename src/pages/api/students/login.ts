import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { config, pool } from "../config";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const reqBody = req.body;
      const connection = await pool.getConnection();

      const [studentData]: any = await connection.query(
        "SELECT * FROM student WHERE email = ?",
        [reqBody.email]
      );

      const student = studentData[0];
      if (!student) {
        return res.status(401).json({ message: "Can't find email." });
      }

      const isMatch = await bcrypt.compare(reqBody.password, student.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Don't match password." });
      }

      connection.release();

      const token = jwt.sign(
        { adminId: student.id, email: student.email },
        config.jwt_secret as string,
        { expiresIn: "1d" }
      );

      res.status(200).json({ token, student });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  }
}

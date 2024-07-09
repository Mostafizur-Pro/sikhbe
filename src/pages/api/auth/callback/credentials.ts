import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../../config"; // Adjust import as necessary

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      const connection = await pool.getConnection();
      const [results]: any = await connection.query("SELECT * FROM student WHERE email = ?", [email]);

      if (results.length === 0) {
        connection.release();
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const user = results[0];
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        connection.release();
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, {
        expiresIn: "1d",
      });

      connection.release();
      res.status(200).json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;

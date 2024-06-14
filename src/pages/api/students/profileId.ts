import { connection } from "../config";

export const generateNextStudentProfileId = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT MAX(profile_id) AS max_profile_id FROM student",
      (error: any, results: any, fields: any) => {
        if (error) {
          console.error("Error generating next student profile ID:", error);
          reject(error);
        } else {
          const maxProfileId = results[0].max_profile_id;

          const nextProfileId = maxProfileId
            ? parseInt(maxProfileId.replace("SB24S", "")) + 1
            : 1;

          const generatedId = `SB24S${nextProfileId
            .toString()
            .padStart(4, "0")}`;

          resolve(generatedId);
        }
      }
    );
  });
};

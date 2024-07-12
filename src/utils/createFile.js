import axios from "axios";
import { Buffer } from "buffer";

export default async function createFile(fileName, submitValue) {
  const token = `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`;
  const repo = `resume`;
  const owner = `fks1311`;
  const path = `src/profiles/${fileName}.js`;
  const message = `create ${fileName}.js`;

  const content = Buffer.from(JSON.stringify(submitValue), "utf8").toString(
    "base64"
  );

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  const config = {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  };

  const data = {
    message,
    content,
  };

  try {
    const response = await axios.put(url, data, config);
    console.log("File created: ", response.data);
  } catch (error) {
    console.error("Error creating file: ", error);
  }
}

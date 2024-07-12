import axios from "axios";
import { Buffer } from "buffer";

export default async function getFile(fileName) {
  const token = `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`;
  const repo = `resume`;
  const owner = `fks1311`;
  const path = `src/profiles/${fileName}.js`;

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  const config = {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  };

  try {
    const response = await axios.get(url, config);
    const data = response.data.content;
    const decode = Buffer.from(data, "base64").toString("utf8");
    console.log("File get: ", JSON.parse(decode));
  } catch (error) {
    console.error("Error creating file: ", error);
  }
}

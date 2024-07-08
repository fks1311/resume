// Github file upload

export default async function createFile() {
  const token = `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`;
  const repo = `resume`;
  const owner = `fks1311`;
  const path = `src/pages/profiles/${fileName}.js`;
  const message = `create ${fileName}.js`;

  const content = Buffer.from(fileContent, "utf8").toString("base64");

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

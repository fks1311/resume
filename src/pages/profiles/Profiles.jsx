import DefaultPage from "components/global/DefaultPage";
import ProfileTemplate from "components/profile/ProfileTemplate";

export default function Profiles() {
  return (
    <DefaultPage>
      <ProfileTemplate />
      {/* <input
        type="text"
        placeholder="File name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <textarea
        placeholder="File content"
        value={fileContent}
        onChange={(e) => setFileContent(e.target.value)}
      />
      <button onClick={handleCreateFile}>Create File</button> */}
    </DefaultPage>
  );
}

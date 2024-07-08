import { useState, forwardRef } from "react";
import { styled } from "styled-components";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const Images = forwardRef(({ children }, ref) => {
  const [preview, setPreview] = useState();

  const imgFileUpload = (target) => {
    const reader = new FileReader();
    reader.readAsDataURL(target);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  return (
    <ImgFileContainer className="preview-container" solid={preview}>
      {preview === undefined && (
        <label htmlFor="file_upload">
          <FileLabelContainer>
            <BsFileEarmarkPerson />
            파일 선택
          </FileLabelContainer>
        </label>
      )}
      <FileSelectContainer
        type="file"
        id="file_upload"
        onChange={(e) => imgFileUpload(e.target.files[0])}
      />
      {preview && (
        <PreviewContainer>
          <MdCancel id="cancel" size={30} />
          <ImgFile src={preview} alt="프로필 사진" className="preview" />
        </PreviewContainer>
      )}
    </ImgFileContainer>
  );
});

const ImgFileContainer = styled.div`
  height: 300px;
  width: 300px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ solid }) => solid === undefined && `2px dashed #b4b4b8`};
  border-radius: 10px;
`;

const FileLabelContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  padding: 1rem;
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  background-color: #5c88c4;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const FileSelectContainer = styled.input`
  display: none;
`;

const PreviewContainer = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  #cancel {
    position: absolute;
    top: -4%;
    right: -4%;
    color: #5c88c4;
  }
`;
const ImgFile = styled.img`
  height: 300px;
  width: 300px;
  background-size: contain;
`;
export default Images;

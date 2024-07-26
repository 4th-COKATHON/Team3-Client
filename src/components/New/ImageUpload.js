import { useState } from "react";
import styled from "styled-components";

export const ImageUpload = () => {
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const onchangeImageUpload = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result);
    };
  };
  return (
    <ImageUploadContainer>
      <StyledLabel htmlFor="image-upload">이미지 파일 업로드</StyledLabel>
      <img src={uploadImgUrl} img="img" />
      <Input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={onchangeImageUpload}
      />
    </ImageUploadContainer>
  );
};

const ImageUploadContainer = styled.div`
  cursor: pointer;
  display: flex;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

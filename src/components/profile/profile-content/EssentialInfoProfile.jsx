// 필수
import { forwardRef } from "react";
import { styled } from "styled-components";
import Images from "components/inputs/Images";
import FormColumn from "components/form/FormColumn";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import {
  BsFillPersonFill,
  BsTelephone,
  BsGithub,
  BsLink,
} from "react-icons/bs";

const EssentialInfoProfile = forwardRef((props, ref) => {
  const { register, errors } = props;

  return (
    <Container className="essential-info">
      <Images />
      <BasicInfoInput className="basic-input-container">
        <FormColumn
          id="user_name"
          render={() => <BsFillPersonFill />}
          {...register("user_name", {
            required: "이름은 필수 입력 항목입니다",
            pattern: {
              value: /^[가-힣]{2,20}$/,
              message: "2글자 이상의 올바른 한글 이름을 적어주세요",
            },
          })}
          errors={errors}
        />
        <FormColumn
          id="user_phone"
          render={() => <BsTelephone />}
          {...register("user_phone", {
            required: "휴대폰 번호는 필수 입력 항목입니다",
            pattern: {
              value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})/,
              message: "올바른 휴대폰 번호 형식이 아닙니다",
            },
          })}
          errors={errors}
        />
        <FormColumn
          id="user_mail"
          render={() => <MdOutlineLocalPostOffice />}
          {...register("user_mail", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          errors={errors}
        />
        <FormColumn
          id="user_github"
          render={() => <BsGithub />}
          {...register("user_github", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          errors={errors}
        />
        <FormColumn
          id="user_blog"
          render={() => <BsLink />}
          {...register("user_blog", {
            pattern: {
              value:
                /([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*/g,
              message: "올바른 주소 형식이 아닙니다.",
            },
          })}
          errors={errors}
        />
      </BasicInfoInput>
    </Container>
  );
});

const Container = styled.div`
  // max-width: 800px;
  display: flex;
  // justify-content: center;
  border-bottom: 1px solid #f6f5f5;
`;
const BasicInfoInput = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin: 20px;
`;

export default EssentialInfoProfile;

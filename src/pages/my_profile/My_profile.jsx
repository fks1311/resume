import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import DefaultPage from "components/global/DefaultPage";

export default function My_profile() {
  const navigate = useNavigate();
  const pf_list = [1];
  const variants = {
    show: {
      scale: 1.1,
    },
  };

  return (
    <DefaultPage>
      <PageContainer>
        <NewProfileBtn
          variants={variants}
          initial={false}
          whileHover="show"
          onClick={() => navigate(`/profiles/me`)}
        >
          새로운 프로필 생성
        </NewProfileBtn>
        {pf_list.length !== 0 &&
          pf_list.map((data, idx) => (
            <ProfileList key={idx}>{data}</ProfileList>
          ))}
      </PageContainer>
    </DefaultPage>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const NewProfileBtn = styled(motion.div)`
  height: 32px;
  width: 800px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f6f5f5;
  font-size: 18px;
  font-weight: bold;
  background-color: #478ccf;
  border-radius: 10px;
  cursor: pointer;
`;
const ProfileList = styled.div``;

import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function GlobalNavigation() {
  const navigate = useNavigate();
  const nav = ["profiles", "my"];

  return (
    <PageContainer>
      <Header>
        <div onClick={() => navigate("/")}>Hi</div>
        {nav.map((n, idx) => (
          <div key={idx} onClick={() => navigate(`/${n}`)}>
            {n}
          </div>
        ))}
      </Header>
      <Outlet />
    </PageContainer>
  );
}
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  width: inherit;
  max-width: 1200px;
  height: 65px;
  cursor: pointer;
`;

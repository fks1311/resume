import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function GlobalNavigation() {
  const navigate = useNavigate();
  const nav = ["profiles", "my"];

  return (
    <PageContainer>
      <Header>
        <Nav onClick={() => navigate("/")}>Hi</Nav>
        {nav.map((n, idx) => (
          <Nav key={idx} onClick={() => navigate(`/${n}`)}>
            {n}
          </Nav>
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

const Nav = styled.div`
  padding: 5px 20px;
`;

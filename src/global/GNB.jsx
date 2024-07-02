import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function GlobalNavigation() {
  const navigate = useNavigate();
  const nav = ["profiles", "my"];

  return (
    <>
      <NavContainer>
        {nav.map((n, idx) => (
          <div key={idx} onClick={() => navigate(`/${n}`)}>
            {n}
          </div>
        ))}
      </NavContainer>
      <Outlet />
    </>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  height: 65px;
  padding: 0rem 3rem;
  cursor: pointer;
`;

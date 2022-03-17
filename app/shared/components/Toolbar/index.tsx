import { Link } from "remix";
import styled from "@emotion/styled";

const StyledToolbar = styled.div`
  max-width: 100vw;
  width: 100vw;
  background-color: white;
  position: fixed;
  z-index: 999;
  height: 48px;
  top: 0;
  padding: 1rem;
`;

const StyledToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-tems: center;
  justify-items: stretch;
  justify-content: space - between;
  color: #000;
  height: 100%;
`;

const StyledToolbarListItems = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledToolbarLogo = styled.img`
  width: auto;
  height: 60px;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledToolbarSpacing = styled.div`
  height: 48px;
`;

export default function Toolbar() {
  return (
    <>
      <StyledToolbar>
        <StyledToolbarWrapper>
          <StyledToolbarListItems>
            {/* Link is a Helper from Remix to navigate between pages. Check Remix Docs for more Info */}
            <Link to={"/"} prefetch="none">
              <StyledToolbarLogo
                src={
                  "https://res.cloudinary.com/rangle/image/upload/q_auto,f_auto/rangle.io/TOR-triangle_868x868_kq1k91.png"
                }
                alt="logo"
              />
            </Link>
          </StyledToolbarListItems>
        </StyledToolbarWrapper>
      </StyledToolbar>
      <StyledToolbarSpacing></StyledToolbarSpacing>
    </>
  );
}
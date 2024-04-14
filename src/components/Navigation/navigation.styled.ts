import styled from "styled-components";

export const NavWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  position: sticky;
  margin: 0;
  width: 100%;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const NavContent = styled.nav`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px;
`;

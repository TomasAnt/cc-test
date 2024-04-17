import styled from "styled-components";

export const ErrorMsg = styled.div`
  position: absolute;
  color: red;
  font-size: 12px;
  bottom: -15px;
  left: 15px;
  background-color: #fff;
  z-index: 1;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    font-size: 10px;
    bottom: -13px;
  }
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacings.s16};
  align-items: center;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: red;
    &::placeholder {
      transform: translateY(-14px);
      font-size: 12px;
    }
  }

  &::placeholder {
    font-size: 14px;
    transition: transform 0.3s ease-in-out;
  }
`;

export const Absolute = styled.div`
  position: relative;
  display: flex;
  width: auto;
  flex: 1;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 38px 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Roboto", sans-serif;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    padding: 0;
    background-color: transparent;
  }
`;

export const Headline = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: ${({ theme }) => theme.lineHeights.h3};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacings.s16};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacings.s16};
  align-items: center;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: red; /* Change border color on focus */
    &::placeholder {
      transform: translateY(-14px); /* Move placeholder up slightly on focus */
      font-size: 12px;
    }
  }

  &::placeholder {
    font-size: 14px; /* Adjust font size of placeholder */
    transition: transform 0.3s ease-in-out;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  padding: 11px 0 0 10px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("./arrowDown.svg") no-repeat;
  background-position: right 17px center;
  background-size: 12px;
  font-size: 12px;
  line-height: 20px;

  .state-select {
    display: none;
  }
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 10px;
  pointer-events: none;
  color: #999;
  font-size: 12px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    padding: 16px;
    background-color: white;
    margin-bottom: 16px;
  }
`;

export const Delivery = styled.div`
  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    padding: 16px;
    background-color: white;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const OneField = styled.div`
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
  flex-direction: column;
`;

export const TwoFields = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ThreeFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    grid-template-columns: 1fr 1fr;

    & > :nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`;

export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.s16};
  border-radius: 6px 6px 0px 0px;
  border: 1px solid #3362ab;
  background: #f0f5ff;
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.s16};

  span {
    white-space: nowrap;
  }
`;

export const PaymentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dividers};
  padding: ${({ theme }) => theme.spacings.s12};
  margin-bottom: ${({ theme }) => theme.spacings.s16};
`;

export const Cards = styled.div`
  display: flex;
  gap: 3px;
`;

export const Center = styled.div`
  display: flex;
  place-content: center;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    flex-direction: column;
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  color: ${({ theme }) => theme.colors.inputColor};
`;

///////////////////////////////////////////////////////////////////////
///////////////////// Cart Styles /////////////////////////////////////
///////////////////////////////////////////////////////////////////////

export const CartContainer = styled.section`
  flex: 1;
  padding: 16px 38px;
  max-width: 600px;
  font-family: "Roboto", sans-serif;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    max-width: 100%;
    background-color: #f5f5f5;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Roboto", sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-right: 2rem;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  padding: 14px;

  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("./arrowDown.svg") no-repeat;
  background-position: right 16px center;
  background-size: 12px;
  font-size: 14px;
  line-height: 20px;

  .state-select {
    display: none;
  }
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: 3px;
  left: 10px;
  pointer-events: none;
  color: #999;
  font-size: 14px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  color: #828282;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: ${({ theme }) => theme.spacings.s16};
`;

export const Input = styled.input`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  width: 100%;
`;

export const OneFieldContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;
export const TwoFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 32px;
`;
export const ThreeFieldsContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 32px;
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
`;

export const Cards = styled.div`
  display: flex;
  gap: 3px;
`;

import styled from "styled-components";

export const Why = styled.div`
  padding-top: 16px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  flex-direction: row;
  align-items: center;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const WhyTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.input};
  line-height: ${({ theme }) => theme.lineHeights.input};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  padding: 16px 0;
  align-items: flex-start;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
`;

export const BoxTitle = styled.p`
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const BoxParagraph = styled.p`
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

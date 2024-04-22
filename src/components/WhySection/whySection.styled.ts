import styled from "styled-components";

export const Why = styled.div`
  padding-top: ${({ theme }) => theme.spacings.s24};
  padding-bottom: ${({ theme }) => theme.spacings.s16};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: ${({ theme }) => theme.spacings.s16};
  flex-direction: row;
  align-items: center;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    grid-template-columns: 1fr 2fr 1fr;
    padding-top: 0;
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
  align-items: flex-start;
`;

export const Spacer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacings.s32};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s8};
  margin-left: ${({ theme }) => theme.spacings.s16};
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
  max-width: 357px;
`;

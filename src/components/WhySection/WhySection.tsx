import { whySectionData } from "../../../config";
import {
  Why,
  Separator,
  WhyTitle,
  Content,
  Box,
  BoxTitle,
  BoxParagraph,
} from "./whySection.styled";

const WhySection = () => {
  return (
    <>
      <Why>
        <Separator />
        <WhyTitle>Why Choose Logoipsum</WhyTitle>
        <Separator />
      </Why>
      {whySectionData.map((data, index) => (
        <Content key={index}>
          <img src={data.imgSrc} alt={data.title} />
          <Box>
            <BoxTitle>{data.title}</BoxTitle>
            <BoxParagraph>{data.paragraph}</BoxParagraph>
          </Box>
        </Content>
      ))}
    </>
  );
};

export default WhySection;

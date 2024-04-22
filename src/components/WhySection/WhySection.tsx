import { whySectionData } from "../../../config";
import {
  Why,
  Separator,
  WhyTitle,
  Content,
  Box,
  BoxTitle,
  BoxParagraph,
  Spacer,
} from "./whySection.styled";

const WhySection = () => {
  return (
    <>
      <Why>
        <Separator />
        <WhyTitle>Why Choose Logoipsum</WhyTitle>
        <Separator />
      </Why>
      <Spacer>
        {whySectionData.map((data, index) => (
          <Content key={index}>
            <img src={data.imgSrc} alt={data.title} />
            <Box>
              <BoxTitle>{data.title}</BoxTitle>
              <BoxParagraph>{data.paragraph}</BoxParagraph>
            </Box>
          </Content>
        ))}
      </Spacer>
    </>
  );
};

export default WhySection;

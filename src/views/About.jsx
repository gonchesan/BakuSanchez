import { useContext, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Container, Header } from "../globalStyle";
import { SectionAbout, TextAbout, WrapperAbout } from "./About.elements";
import { TitleContact } from "./Contact.elements";

const About = () => {
  const { aboutUsInfo } = useContext(DataContext);
  const [isLoading, setIsLoading] = useOutletContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, [setIsLoading]);
  return (
    <Container>
      <Header>Who we are</Header>
      <WrapperAbout>
        <SectionAbout>
          <img
            src="https://live.staticflickr.com/1960/30730179207_80ab2109b8_b.jpg"
            alt="some figures"
          />
        </SectionAbout>
        <SectionAbout>
          <TitleContact>Baku Store</TitleContact>
          {!isLoading &&
            aboutUsInfo.map((element, index) => {
              return <TextAbout key={index}>{element}</TextAbout>;
            })}
        </SectionAbout>
      </WrapperAbout>
    </Container>
  );
};

export default About;

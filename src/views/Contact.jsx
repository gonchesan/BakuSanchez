import { useEffect } from "react";

import { useOutletContext } from "react-router-dom";
import { CheckoutSubtitle } from "../components/OrderSummary/OrderSummary.elements";
import { Container, Header } from "../globalStyle";
import {
  ButtonContactSubmit,
  InputContact,
  ListInformationContact,
  SectionContact,
  SubtitleContact,
  TextareaContact,
  TitleContact,
  WrapperForm,
  WrapperInputs,
} from "./Contact.elements";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  const [isLoading, setIsLoading] = useOutletContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, [setIsLoading]);
  return (
    <>
      {!isLoading && (
        <Container>
          <Header>Contact us</Header>
          <div className="contact-info">
            <SubtitleContact>
              We love questions and feedback- and we're always happy to help!
            </SubtitleContact>
            <SubtitleContact>Here are some ways to contact us.</SubtitleContact>
            <WrapperForm>
              <SectionContact isLeft>
                <form>
                  <TitleContact>Send us a message</TitleContact>
                  <SubtitleContact>
                    Send us a message and we'll within 24 hours.
                  </SubtitleContact>
                  <WrapperInputs>
                    <div>
                      <CheckoutSubtitle>Full name</CheckoutSubtitle>
                      <InputContact
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div>
                      <CheckoutSubtitle>Telephone</CheckoutSubtitle>
                      <InputContact
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Telephone"
                        required
                      />
                    </div>
                  </WrapperInputs>
                  <CheckoutSubtitle>Email</CheckoutSubtitle>
                  <InputContact
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />

                  <CheckoutSubtitle>Message</CheckoutSubtitle>
                  <TextareaContact
                    name="msg"
                    id="msg"
                    cols="30"
                    rows="10"
                    placeholder="Your Message Here..."
                  ></TextareaContact>
                  <ButtonContactSubmit type="submit">
                    Submit
                  </ButtonContactSubmit>
                </form>
              </SectionContact>
              <SectionContact isRight>
                <div className="details">
                  <TitleContact>Contact information</TitleContact>
                  <ListInformationContact>
                    <li>
                      <IoLocationOutline />
                      177 Hungtington Ave St 1703
                    </li>
                    <li>
                      <IoMailOutline />
                      contact.us@bakusotre.com
                    </li>
                    <li>
                      <AiOutlinePhone />
                      +1-617-555-0108
                    </li>
                  </ListInformationContact>
                </div>
              </SectionContact>
            </WrapperForm>
          </div>
        </Container>
      )}
    </>
  );
};

export default Contact;

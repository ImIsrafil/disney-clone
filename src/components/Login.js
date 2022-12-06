import React from "react";
import styled from "styled-components";
import CTALogo from "./images/cta-logo-one.svg";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={CTALogo} alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            animi distinctio voluptatibus nemo perferendis neque similique,
            consequatur non perspiciatis ducimus molestias doloribus facilis
            possimus eius cupiditate nostrum quas repellat autem?
          </Description>
          <CTALogoTwo src="./images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -100;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: center;
  padding: 80px 40px;
  height: 100%;
`;
const CTA = styled.div`
  max-width: 650px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-hight: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 91.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 20px;
`;

export default Login;

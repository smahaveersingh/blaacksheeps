import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import IMG from "../assets/box.png";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Blaack Sheep's.</Logo>
        <Desc>
          Family or a group that are considered to be bad 
          or worthless by other people in that family or group.
          Commonly reffered to as "Black sheep of the family". 
          Our vision is to be proud of who we are. 
        </Desc>

        <Desc>
          "It takes noting to join the crowd. It takes everything to stand alone" - Hans F.Hansen
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <a href="https://www.facebook.com/" target="_blank">
              <Facebook />
            </a>
          </SocialIcon>
          <SocialIcon color="E4405F">
          <a href="https://www.instagram.com/blaacksheeps" target="_blank">
            <Instagram />
          </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <img src={IMG} style={{height: "90%", width:"85%"}}>
        </img>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 28 Oriel House, Dublin Road, Dundalk, Louth, IE
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +353 894242775
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> admin@blaacksheeps.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardContent from "../../components/CardContent";
import MainContent from "../../components/MainContent";
import Sidebar from "../../components/Sidebar";
import * as Styled from "./styles";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    document.title = "Khipo FullStack Challenge | Home";

    if (!token) {
      navigate("/sign-in");
    }
  }, []);

  const FirstName = localStorage.getItem("@USER_SESSION");

  return (
    <Styled.Container>
      <Sidebar />
      <MainContent>
        <Styled.Title>
          Wellcome, <b>{FirstName}!</b>
        </Styled.Title>
        <Styled.Content>
          <Styled.HeaderHeadline>
            <Styled.Title>
              <b>This is the headline</b>
            </Styled.Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pharetra augue egestas nibh mollis convallis. Quisque consequat
              efficitur diam, a laoreet nibh bibendum ac.
            </p>
          </Styled.HeaderHeadline>
          <Styled.ContentCardWrapp>
            <CardContent
              title="Lorem ipsum dolor sit amet"
              subtitle="Lorem ipsum dolor sit amet, consetetur sadipsing elitr, sed diam."
            />
            <CardContent
              title="Lorem ipsum dolor sit amet"
              subtitle="Lorem ipsum dolor sit amet, consetetur sadipsing elitr, sed diam."
            />
            <CardContent
              title="Lorem ipsum dolor sit amet"
              subtitle="Lorem ipsum dolor sit amet, consetetur sadipsing elitr, sed diam."
            />
            <CardContent
              title="Lorem ipsum dolor sit amet"
              subtitle="Lorem ipsum dolor sit amet, consetetur sadipsing elitr, sed diam."
            />
          </Styled.ContentCardWrapp>
        </Styled.Content>
      </MainContent>
    </Styled.Container>
  );
}

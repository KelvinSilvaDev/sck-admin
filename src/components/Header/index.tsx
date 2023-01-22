import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTokenApi } from "../../context/useTokenApi";
import * as Styled from "./styles";

interface HeaderProps {
  isLogged?: boolean;
}

export default function Header() {
  const [email, setEmail] = useState<any>("");
  const { deleteTokenApi, tokenApi } = useTokenApi();

  useEffect(() => {
    const signedUser = localStorage.getItem("@USER_SESSION");

    if (signedUser) {
      const email = localStorage.getItem("@USER_EMAIL");
      setEmail(email);
    }
    // console.log('signedUser', JSON.parse(signedUser)?.registration_type)
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      console.log("token", token);

      const email = localStorage.getItem("@USER_EMAIL");
      console.log("email", email);
      setEmail(email);
    }
  });

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("@USER_SESSION");
    localStorage.removeItem("@USER_EMAIL");

    navigateTo("/");
  };

  return (
    <Styled.Container>
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Inspiration</Link>
          </li>
          <li>
            <Link to="/">Find Work</Link>
          </li>
          <li>
            <Link to="/">Learn Design</Link>
          </li>
          <li>
            <Link to="/">Hire Designers</Link>
          </li>
        </ul>
      </nav>
      {tokenApi ? (
        <div id="LoginButtons">
          <p>{email}</p>
          <a href="#">
            <button onClick={handleSignOut}>Sign Out</button>
          </a>
        </div>
      ) : (
        <div id="LoginButtons">
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
    </Styled.Container>
  );
}

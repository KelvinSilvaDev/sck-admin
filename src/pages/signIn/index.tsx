import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import Container from "../../components/Container";
import { setUser } from "../../context/useSessionUser";
import { useTokenApi } from "../../context/useTokenApi";
import { defaultsHeadersAxios } from "../../services/api";
import { authenticate } from "../../usecases/user";

import * as Styled from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash size={16} />);

  const { setTokenApi } = useTokenApi();
  const push = useNavigate();

  useEffect(() => {
    document.title = "Khipo FullStack Challenge | Sign In";
    const email = localStorage.getItem("email");
    const isLogged = localStorage.getItem("token");
    if (email) {
      setEmail(email);
    }
    if (isLogged) {
      push("/");
    }
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await authenticate({ email, password });
      const { access_token, user } = response;
      setUser(user);
      setTokenApi(access_token);
      defaultsHeadersAxios(access_token);
      localStorage.setItem("@USER_EMAIL", email);
      push("/");
    } catch (e: any) {
      console.log(e);
    }
  };

  const show = () => {
    type === "password" ? setType("text") : setType("password");

    if (type === "password") {
      setIcon(<FaEyeSlash size={16} />);
    } else {
      setIcon(<FaEye size={16} />);
    }
  };

  return (
    <Styled.Container>
      <h1>Sign In</h1>

      <Container>
        <Styled.Form onSubmit={(e: any) => handleLogin(e)}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
          <label htmlFor="password">
            Password
            <input
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
            />
            <span onClick={show}>{icon}</span>
          </label>

          <div className="formOptions">
            <div id="rememberDiv" className="formOpt">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                onChange={() => setRemember(!remember)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div id="forgot" className="formOpt">
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
          </div>
          <button type="submit">Sign In</button>
        </Styled.Form>
      </Container>
    </Styled.Container>
  );
}

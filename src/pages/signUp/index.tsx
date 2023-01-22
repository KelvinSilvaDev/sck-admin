import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { setUser } from "../../context/useSessionUser";
import { useTokenApi } from "../../context/useTokenApi";

import api, { defaultsHeadersAxios } from "../../services/api";
import { authenticate } from "../../usecases/user";
import * as Styled from "./styles";

export default function signUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash size={16} />);
  const navigate = useNavigate();
  const { setTokenApi } = useTokenApi();

  useEffect(() => {
    document.title = "Khipo FullStack Challenge | Sign Up";
    const email = localStorage.getItem("@USER_EMAIL");
    const isLogged = localStorage.getItem("token");
    if (email) {
      setEmail(email);
    }
    if (isLogged) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    const response = await api.post("/user", data);

    if (response.status === 201) {
      localStorage.setItem("@USER_EMAIL", email);
      localStorage.setItem("@USER_SESSION", name);
      try {
        const response = await authenticate({ email, password });
        const { access_token, user } = response;
        setUser(user);
        setTokenApi(access_token);
        defaultsHeadersAxios(access_token);
        navigate("/");
      } catch (e: any) {
        console.log(e);
      }
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
      <h1>Sign Up</h1>

      <Container>
        <Styled.Form onSubmit={(e: any) => handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="submit">Sign In</button>
          <p>
            Already a user? <Link to="/sign-in">Login</Link>
          </p>
        </Styled.Form>
      </Container>
    </Styled.Container>
  );
}

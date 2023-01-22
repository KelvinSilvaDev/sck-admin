import { RxDashboard } from "react-icons/rx";
import * as Styled from "./styles";

export default function Sidebar() {
  return (
    <Styled.Container>
      <div></div>
      <nav>
        <ul>
          <li>
            <a href="/">
              {" "}
              <RxDashboard size={16} /> Link 1
            </a>
          </li>
          <li>
            <a href="/">
              {" "}
              <RxDashboard size={16} /> Link 2
            </a>
          </li>
          <li>
            <a href="/">
              {" "}
              <RxDashboard size={16} /> Link 3
            </a>
          </li>
        </ul>
      </nav>
    </Styled.Container>
  );
}

import { AiOutlineCheck } from "react-icons/ai";
import * as Styled from "./styles";

interface CardContentProps {
  title: string;
  subtitle: string;
}

export default function CardContent({ title, subtitle }: CardContentProps) {
  return (
    <Styled.Container>
      <Styled.Title>
        {" "}
        <AiOutlineCheck size={24} color="green" /> {title}
      </Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Container>
  );
}

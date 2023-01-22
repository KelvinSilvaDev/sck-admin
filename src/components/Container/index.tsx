import * as Styled from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

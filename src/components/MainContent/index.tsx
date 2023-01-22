import * as Styled from "./styles";

interface MainContentProps {
  children: React.ReactNode;
}
export default function MainContent({ children }: MainContentProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

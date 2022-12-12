import { Container } from "@mantine/core";
import { Navigation } from "./Navigation";

export const PageLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <Navigation />
      <Container>{props.children}</Container>
    </>
  );
};

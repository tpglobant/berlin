import { Link, useLocation } from "react-router-dom";
import {
  createStyles,
  Header,
  Container,
  Group,
  Title,
  NavLink,
  Text,
} from "@mantine/core";
import { IconBrandMantine } from "@tabler/icons";
import { ThemeToggle } from "./ThemeToggle";
import { routes } from "./../utils/routes";

const HEADER_HEIGHT = 80;

const useStyles = createStyles(() => ({
  root: {
    position: "sticky",
    zIndex: 99,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  linkGroup: {
    flexWrap: "nowrap",
  },
}));

export const Navigation = () => {
  const { classes } = useStyles();
  const location = useLocation();

  return (
    <Header height={HEADER_HEIGHT} mb={60} className={classes.root}>
      <Container className={classes.header}>
        <Group>
          <Text component={Link} to={routes.Home}>
            <Group>
              <IconBrandMantine size={28} />
              <Title size={"h3"}>Berlin</Title>
            </Group>
          </Text>
        </Group>
        <Group>
          <Group spacing={5} className={classes.linkGroup}>
              <>
                <NavLink
                  label="Items"
                  component={Link}
                  to={routes.Items}
                  active={location.pathname === routes.Items}
                  noWrap
                />
                <NavLink
                  label="Create Item"
                  component={Link}
                  to={routes.CreateItem}
                  active={location.pathname === routes.CreateItem}
                  noWrap
                />
              </>
          </Group>
          <ThemeToggle />
        </Group>
      </Container>
    </Header>
  );
};

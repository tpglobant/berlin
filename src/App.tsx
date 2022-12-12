import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Grid,
} from "@mantine/core";
import "./styles/index.scss";

import { PageLayout } from "./components/PageLayout";
import { Home } from "./pages/Home";
import { Items } from "./pages/Items/Items";
import { CreateItem } from "./pages/CreateItem/CreateItem";
import { routes } from "./utils/routes";

function App() {
  const themeFomStorage = localStorage.getItem("theme") as ColorScheme;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    themeFomStorage || "light"
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const color = value || (colorScheme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", color);
    setColorScheme(color);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <PageLayout>
          <Grid grow justify="center">
            <Pages />
          </Grid>
        </PageLayout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

function Pages() {
  return (
    <Routes>
      <Route path={routes.Home} element={<Home />} />
      <Route path={routes.CreateItem} element={<CreateItem />} />
      <Route path={routes.Items} element={<Items />} />
    </Routes>
  );
}

export default App;

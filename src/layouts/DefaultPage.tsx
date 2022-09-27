import Html from "../components/Html/Html";
import Box from "../components/Box/Box";
import Copyright from "../components/Copyright/Copyright";
import Logo from "../components/Logo/Logo";
import SceneWaves from "../components/SceneWaves/SceneWaves";
import MainNav from "../components/MainNav/MainNav";
import { Suspense } from "react";

const DefaultPage = ({ title, children }) => {
  return (
    <Html title={title}>
      <Suspense>
        <SceneWaves />
      </Suspense>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        style={{ flex: 1 }}
      >
        <main>
          <header>
            <Logo />
            <MainNav />
          </header>

          {children}
        </main>
        <footer>
          <Copyright />
        </footer>
      </Box>
    </Html>
  );
};

export default DefaultPage;

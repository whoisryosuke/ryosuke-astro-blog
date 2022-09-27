import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import {
  logoContainerStyles,
  logoLinkStyles,
  logoTextStyles,
} from "./Logo.css";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Box className={logoContainerStyles}>
      <a href="/" className={logoLinkStyles}>
        <Text fontFamily="heading" fontSize={5} className={logoTextStyles}>
          Ryosuke
        </Text>
      </a>
    </Box>
  );
};

export default Logo;

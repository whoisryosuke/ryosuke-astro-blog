import React, { PropsWithChildren } from "react";
import { Box } from "../Box/Box";
import { Text, TextProps } from "../Text/Text";

type Props = TextProps<"p"> & {};

const ListItem = ({
  children,
  fontSize,
  lineHeight,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Box as="li" mb={2} style={{ lineHeight: "3rem" }}>
      <Text as="p" fontSize={3} lineHeight={6}>
        {children}
      </Text>
    </Box>
  );
};

export default ListItem;

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Box>
  );
};

export default ToggleMode;

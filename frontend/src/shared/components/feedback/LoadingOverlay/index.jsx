import { Spinner } from "../Spinner";

import { Overlay, Box, Text } from "./styles";

export function LoadingOverlay({ visible = false, text = "Carregando..." }) {
  if (!visible) return null;

  return (
    <Overlay>
      <Box>
        <Spinner size="lg" />
        <Text>{text}</Text>
      </Box>
    </Overlay>
  );
}

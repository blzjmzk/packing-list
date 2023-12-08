import {
  Button,
  Heading,
  Checkbox,
  CheckboxGroup,
  Stack,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";

import { useState } from "react";

const PackingList = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox
            value="socks"
            onChange={() => setIsChecked(!isChecked)}
            textDecoration={isChecked ? "line-through" : "none"}
          >
            Socks
          </Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">Kakashi</Checkbox>
        </Stack>
      </CheckboxGroup>
    </>
  );
};

export default PackingList;

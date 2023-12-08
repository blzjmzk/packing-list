import {
  Checkbox,
  Button,
  CheckboxGroup,
  Stack,
  HStack,
} from "@chakra-ui/react";

import { SmallCloseIcon } from "@chakra-ui/icons";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  console.log(items);
  return (
    <>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {items.map((item) => (
            <HStack key={item.id}>
              <Checkbox
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
                textDecoration={item.packed ? "line-through" : null}
              >
                {item.quantity} {item.description}
              </Checkbox>
              <button onClick={() => onDeleteItem(item.id)}>
                <SmallCloseIcon />
              </button>
            </HStack>
          ))}
        </Stack>
      </CheckboxGroup>
    </>
  );
};

export default PackingList;

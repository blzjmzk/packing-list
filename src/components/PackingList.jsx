import { Checkbox, SimpleGrid, CheckboxGroup, Box } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  console.log(items);
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} mb={28}>
        {items.map((item) => (
          <Box key={item.id}>
            <CheckboxGroup colorScheme="green">
              <Checkbox
                onChange={() => onToggleItem(item.id)}
                textDecoration={item.packed ? "line-through" : null}
              >
                {item.quantity} {item.description}
              </Checkbox>
            </CheckboxGroup>
            <button onClick={() => onDeleteItem(item.id)}>
              <SmallCloseIcon _hover={{ color: "red" }} />
            </button>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PackingList;

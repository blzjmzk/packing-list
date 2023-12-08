import { Checkbox, SimpleGrid, CheckboxGroup, HStack } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  console.log(items);
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        <CheckboxGroup colorScheme="green">
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
        </CheckboxGroup>
      </SimpleGrid>
    </>
  );
};

export default PackingList;

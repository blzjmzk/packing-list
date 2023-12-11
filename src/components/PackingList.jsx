import { Checkbox, SimpleGrid, CheckboxGroup, HStack } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  console.log(items);
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        {items.map((item) => (
          <CheckboxGroup key={item.id} colorScheme="green">
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
          </CheckboxGroup>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PackingList;

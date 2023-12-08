import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

const PackingList = ({ items }) => {
  console.log(items);
  return (
    <>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {items.map((item) => (
            <Checkbox key={item.id}>
              {item.quantity} {item.description}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </>
  );
};

export default PackingList;

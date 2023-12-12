import { VStack, Heading, Text, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import ColorModeSwitch from "./components/ColorModeSwitch";
import Sort from "./components/Sort";

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <Box pos="fixed" top="4" right="4">
        <ColorModeSwitch />
      </Box>
      <VStack>
        <Heading marginTop={14} marginBottom={4}>
          Packing List
        </Heading>
        <Box borderWidth="1px" borderRadius="lg" px={5} pb={6} pt={1}>
          <Flex justify="flex-end">
            <Sort sortBy={sortBy} setSortBy={setSortBy} />
          </Flex>
          <Text marginBottom={2} fontSize="xl" textAlign="center">
            I need to take:
          </Text>
          <Form onAddItems={handleAddItems} />
          <PackingList
            items={sortedItems}
            onDeleteItem={handleDeleteItems}
            onToggleItem={handleToggleItem}
          />
          <Stats items={items} />
        </Box>
      </VStack>
    </>
  );
}

export default App;

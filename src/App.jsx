import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import ColorModeSwitch from "./components/ColorModeSwitch";

function App() {
  const [items, setItems] = useState([]);

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

  return (
    <>
      <Box pos="fixed" top="4" right="4">
        <ColorModeSwitch />
      </Box>
      <VStack>
        <Heading marginTop={14} marginBottom={4}>
          Packing List
        </Heading>
        <Box borderWidth="1px" borderRadius="lg" p="6">
          <Text marginBottom={2} fontSize="xl" textAlign="center">
            I need to take:
          </Text>
          <Form onAddItems={handleAddItems} />
          <PackingList
            items={items}
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

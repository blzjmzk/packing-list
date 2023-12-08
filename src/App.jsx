import "./App.css";
import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

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
      <VStack justifyContent="center">
        <Heading marginY={8}>Packing List</Heading>
        <Box borderWidth="1px" borderRadius="lg" p="6">
          <VStack justifyContent="center">
            <Text marginBottom={1} fontSize="xl">
              I need to take:
            </Text>
            <Form onAddItems={handleAddItems} />
            <PackingList
              items={items}
              onDeleteItem={handleDeleteItems}
              onToggleItem={handleToggleItem}
            />
            <Stats />
          </VStack>
        </Box>
      </VStack>
    </>
  );
}

export default App;

import "./App.css";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <>
      <VStack justifyContent="center">
        <Heading marginY={8}>Packing List</Heading>
        <Text marginBottom={1} fontSize="xl">
          I need to take:
        </Text>
        <Form onAddItems={handleAddItems} />
        <PackingList items={items} />
        <Stats />
      </VStack>
    </>
  );
}

export default App;

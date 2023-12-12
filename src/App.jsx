import { VStack, Heading, Text, Flex, Button, Box } from "@chakra-ui/react";
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

  function clearList() {
    setItems([]);
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
      <Box pos="absolute" top="4" right="4">
        <ColorModeSwitch />
      </Box>
      <VStack>
        <Heading marginTop={14} marginBottom={4}>
          Packing List
        </Heading>
        <Box
          borderRadius="lg"
          borderWidth="1px"
          maxWidth={{ base: "90%", sm: "40%" }}
          minHeight={{ base: "90vh", sm: "70vh" }}
          pb={6}
          position="relative"
          pt={1}
          px={5}
          width="100%"
        >
          <Flex direction="column">
            <Text marginBottom={2} fontSize="xl" textAlign="center">
              I need to take:
            </Text>
            <Form onAddItems={handleAddItems} />
            <Sort sortBy={sortBy} setSortBy={setSortBy} />
            <PackingList
              items={sortedItems}
              onDeleteItem={handleDeleteItems}
              onToggleItem={handleToggleItem}
            />
            <Flex
              bottom="0"
              justify="center"
              mb={4}
              position="absolute"
              width="100%"
            >
              <Box position="absolute" bottom="0" mb={2}>
                <Stats items={items} />
                {items.length > 0 && (
                  <Flex justify="center">
                    <Button onClick={clearList} size="sm">
                      Clear the list
                    </Button>
                  </Flex>
                )}
              </Box>
            </Flex>
          </Flex>
        </Box>
      </VStack>
    </>
  );
}

export default App;

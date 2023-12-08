import "./App.css";
import { VStack, Heading, Text } from "@chakra-ui/react";

import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <VStack justifyContent="center">
        <Heading marginY={8}>Packing List</Heading>
        <Text marginBottom={1} fontSize="xl">
          I need to take:
        </Text>

        <Form />
        <PackingList />
        <Stats />
      </VStack>
    </>
  );
}

export default App;

import {
  Button,
  Select,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <>
      <HStack mb="3">
        <Select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          width="auto"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </Select>
        <Box w="100%">
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                borderRadius={8}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="items..."
                variant="outline"
                value={description}
              />
              <InputRightElement>
                <Button type="submit" size="sm" mx="1">
                  Add
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>
      </HStack>
    </>
  );
};

export default Form;

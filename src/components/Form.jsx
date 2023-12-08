import {
  Button,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <>
      <HStack justifyContent="center">
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
        <form onSubmit={handleSubmit}>
          <InputGroup width="auto">
            <Input
              borderRadius={8}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="T-shirts"
              variant="outline"
              value={description}
            />
            <InputRightElement width="auto">
              <Button type="submit">Add</Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </HStack>
    </>
  );
};

export default Form;

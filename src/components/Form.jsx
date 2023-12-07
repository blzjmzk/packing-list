import {
  Button,
  Heading,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";

const Form = () => {
  //   const ref = useRef < HTMLInputElement > null;
  //   const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <>
      <Heading marginBottom={5}>Packing List</Heading>
      <HStack justifyContent="center">
        <Select width="auto">
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
        </Select>
        {/* <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) setSearchText(ref.current.value);
          navigate("/");
        }}
      > */}
        <InputGroup width="auto">
          <Input
            //   ref={ref}
            borderRadius={8}
            placeholder="Enter items..."
            variant="outline"
          />
          <InputRightElement width="auto">
            <Button>Add</Button>
          </InputRightElement>
        </InputGroup>
        {/* </form> */}
      </HStack>
    </>
  );
};

export default Form;

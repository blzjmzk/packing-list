import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Sort = ({ sortBy, setSortBy }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        mb={2}
        px={4}
        mx="auto"
        rightIcon={<ChevronDownIcon />}
      >
        {sortBy === "input" && "Sort by input order"}
        {sortBy === "description" && "Sort by description"}
        {sortBy === "packed" && "Sort by packed status"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup value={sortBy} onChange={(value) => setSortBy(value)}>
          <MenuItemOption value="input">Sort by input order</MenuItemOption>
          <MenuItemOption value="description">
            Sort by description
          </MenuItemOption>
          <MenuItemOption value="packed">Sort by packed status</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default Sort;

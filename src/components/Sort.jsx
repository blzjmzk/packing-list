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
      <MenuButton as={Button} size="xs" rightIcon={<ChevronDownIcon />}>
        Sort
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

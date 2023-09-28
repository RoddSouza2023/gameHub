import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function GamesPerPage({ setGamesPerPage, gamesPerPage, setCurrentPage }) {
  const sortOrders = [
    { value: 8, label: "8" },
    { value: 16, label: "16" },
    { value: 32, label: "32" },
    { value: 60, label: "60" },
  ];

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {gamesPerPage} Game(s) Per Page
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => {
                setGamesPerPage(order.value);
                setCurrentPage(1);
              }}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default GamesPerPage;

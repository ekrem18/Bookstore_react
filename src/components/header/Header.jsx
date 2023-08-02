import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";
import Flex from "../../styles/Flex";

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const { searchInfo, setSearchInfo, getData } = useBooksContext();
  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm>
        <Flex>
          <SearchInput type="search" placeholder="Search..." />
          <SelectBox>
            {printType.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </SelectBox>
        </Flex>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;

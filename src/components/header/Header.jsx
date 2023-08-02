import React from 'react'
import { HeaderButton, HeaderContainer, HeaderForm, HeaderTitle, SearchInput, SelectBox } from './Header.style'
import Flex from '../../styles/Flex'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm>
        <Flex>
        <SearchInput type="search" placeholder="Search..." />
        <SelectBox>
          <option>All</option>
        </SelectBox>
        </Flex>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header
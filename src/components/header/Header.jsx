import React from 'react'
import { HeaderButton, HeaderContainer, HeaderForm, HeaderTitle, SearchInput, SelectBox } from './Header.style'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm>
        <SearchInput/>
        <SelectBox>
          <option>All</option>
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header
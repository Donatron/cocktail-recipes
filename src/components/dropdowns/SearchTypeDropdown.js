import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';

import { setSearchType } from '../../store/actions'

export const SearchTypeDropdown = (props) => {
  const { clearSearchFilters, setSearchType, search } = props;
  const { searchType } = search;
  const [searchByDropdownOpen, setSearchByDropdownOpen] = useState(false);
  const toggleSearchDropdown = (e) => setSearchByDropdownOpen(prevState => !prevState);

  const onSelectSearchType = (e) => {
    clearSearchFilters();
    setSearchType(e.target.value)
  }

  return (
    <Dropdown isOpen={searchByDropdownOpen} toggle={toggleSearchDropdown}>
      <DropdownToggle caret>
        {searchType ? searchType.toUpperCase() : "Search By"}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={onSelectSearchType} value="name">Name</DropdownItem>
        <DropdownItem onClick={onSelectSearchType} value="ingredient">Ingredient</DropdownItem>
        <DropdownItem onClick={onSelectSearchType} value="alcoholContent">Alcohol Content</DropdownItem>
        <DropdownItem onClick={onSelectSearchType} value="glassType">Glass Type</DropdownItem>
        <DropdownItem onClick={onSelectSearchType} value="random">Random</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps, { setSearchType })(SearchTypeDropdown);
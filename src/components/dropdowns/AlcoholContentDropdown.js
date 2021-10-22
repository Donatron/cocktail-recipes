import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';

import { setSearchParams } from '../../store/actions';

export const AlcoholContentDropdown = (props) => {
  const { setSearchParams, clearSearchFilters } = props;
  const { searchType } = props.search;
  const [alcoholContentDropdownOpen, setAlcoholContentDropdownOpen] = useState(false);
  const toggleAlcoholContentDropdown = () => setAlcoholContentDropdownOpen(prevState => !prevState);

  const onSelectAlcoholContent = (e) => {
    clearSearchFilters();
    setSearchParams(searchType, e.target.value);
  };

  return (
    <Dropdown isOpen={alcoholContentDropdownOpen} toggle={toggleAlcoholContentDropdown}>
      <DropdownToggle caret>
        Alcohol Content
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={onSelectAlcoholContent} value="alcoholic">Alcoholic</DropdownItem>
        <DropdownItem onClick={onSelectAlcoholContent} value="non alcoholic">Non Alcoholic</DropdownItem>
        <DropdownItem onClick={onSelectAlcoholContent} value="optional alcohol">Optional Alcohol</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps, { setSearchParams })(AlcoholContentDropdown);
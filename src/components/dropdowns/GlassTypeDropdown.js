import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';

import { setSearchParams } from '../../store/actions';

export const GlassTypeDropdown = (props) => {
  const { clearSearchFilters, setSearchParams, search } = props;
  const { searchType } = search;
  const [glassTypeDropdownOpen, setGlassTypeDropdownOpen] = useState(false);
  const toggleGlassTypeDropdown = () => setGlassTypeDropdownOpen(prevState => !prevState);

  const onSelectGlassType = (e) => {
    clearSearchFilters();
    setSearchParams(searchType, e.target.value);
  };


  return (
    <Dropdown isOpen={glassTypeDropdownOpen} toggle={toggleGlassTypeDropdown}>
      <DropdownToggle caret>
        Glass Type
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={onSelectGlassType} value="highball glass">Highball Glass</DropdownItem>
        <DropdownItem onClick={onSelectGlassType} value="cocktail glass">Cocktail Glass</DropdownItem>
        <DropdownItem onClick={onSelectGlassType} value="old-fashioned glass">Old-fashioned Glass</DropdownItem>
        <DropdownItem onClick={onSelectGlassType} value="whiskey glass">Whiskey Glass</DropdownItem>
        <DropdownItem onClick={onSelectGlassType} value="collins glass">Collins Glass</DropdownItem>
        <DropdownItem onClick={onSelectGlassType} value="pousse cafe glass">Pousse Cafe Glass</DropdownItem>
        <DropdownItem onClick={onSelectGlassType} value="champagne flute">Champagne Flute</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps, { setSearchParams })(GlassTypeDropdown);
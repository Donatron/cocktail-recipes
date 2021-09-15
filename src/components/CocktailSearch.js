import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Input, Button } from 'reactstrap';

const CocktailSearch = () => {
  const [searchByDropdownOpen, setSearchByDropdownOpen] = useState(false);
  const [alcoholContentDropdownOpen, setAlcoholContentDropdownOpen] = useState(false);
  const [glassTypeDropdownOpen, setGlassTypeDropdownOpen] = useState(false);

  const toggleSearchDropdown = () => setSearchByDropdownOpen(prevState => !prevState);
  const toggleAlcoholContentDropdown = () => setAlcoholContentDropdownOpen(prevState => !prevState);
  const toggleGlassTypeDropdown = () => setGlassTypeDropdownOpen(prevState => !prevState);

  const onChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="container cocktail-search">
      <h4>Search Cocktails</h4>
      <Dropdown isOpen={searchByDropdownOpen} toggle={toggleSearchDropdown}>
        <DropdownToggle caret>
          Search By
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Name</DropdownItem>
          <DropdownItem>Ingredient</DropdownItem>
          <DropdownItem>Alcohol Content</DropdownItem>
          <DropdownItem>Glass Type</DropdownItem>
          <DropdownItem>Random</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown isOpen={alcoholContentDropdownOpen} toggle={toggleAlcoholContentDropdown}>
        <DropdownToggle caret>
          Alcohol Content
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Alcoholic</DropdownItem>
          <DropdownItem>Non Alcoholic</DropdownItem>
          <DropdownItem>Optional Alcohol</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown isOpen={glassTypeDropdownOpen} toggle={toggleGlassTypeDropdown}>
        <DropdownToggle caret>
          Glass Type
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Highball Glass</DropdownItem>
          <DropdownItem>Cocktail Glass</DropdownItem>
          <DropdownItem>Old-fashioned Glass</DropdownItem>
          <DropdownItem>Whiskey Glass</DropdownItem>
          <DropdownItem>Collins Glass</DropdownItem>
          <DropdownItem>Pousse Cafe Glass</DropdownItem>
          <DropdownItem>Champagne Flute</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <InputGroup>
        <Input
          placeholder="enter search term"
          className="cocktail-search_input"
          onChange={onChange}
        />
      </InputGroup>
      <Button color="primary">Search</Button>
    </div>
  );
}

export default CocktailSearch;
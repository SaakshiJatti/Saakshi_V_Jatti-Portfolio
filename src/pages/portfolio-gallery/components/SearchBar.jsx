import React from 'react';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search projects..." }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
        <Icon name="Search" size={18} className="text-text-secondary" />
      </div>
      <Input
        type="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e?.target?.value)}
        className="pl-10"
      />
    </div>
  );
};

export default SearchBar;
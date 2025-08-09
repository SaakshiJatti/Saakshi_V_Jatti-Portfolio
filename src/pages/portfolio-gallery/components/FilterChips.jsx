import React from 'react';
import Button from '../../../components/ui/Button';

const FilterChips = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters?.map((filter) => (
        <Button
          key={filter?.id}
          variant={activeFilter === filter?.id ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter?.id)}
          className="magnetic-hover micro-feedback"
        >
          {filter?.label}
          {filter?.count && (
            <span className="ml-2 text-xs opacity-70">
              {filter?.count}
            </span>
          )}
        </Button>
      ))}
    </div>
  );
};

export default FilterChips;
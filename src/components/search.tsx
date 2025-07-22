import React from 'react';

type SortOption = 'relevance' | 'name' | 'date' | 'popularity';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex h-5">

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="block appearance-none w-full bg-white  "
      >
        
        <option value="relevance">Most Relevance</option>
        <option value="name">Asc Ord</option>
        <option value="date">Most Earlier</option>
        <option value="popularity">Most Famous</option>
        
      </select>
      <div className=''> <FontAwesomeIcon icon={faChevronDown} /></div>
     
      

    </div>
  );
};

export default SortSelect;

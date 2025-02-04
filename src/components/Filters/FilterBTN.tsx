import React from 'react';

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
    return (
        <div>
            
            <div>
            <input 
            onClick={() => {
                setPageNumber(1);
                task(items);
            }}
            type="radio" 
            id={`${name} - ${index}`} 
            name={name}
            value="" 
            />
            <label for={`${name} - ${index}`} >
                {items}
            </label>
            
            </div>
        </div>
    )
}

export default FilterBTN;